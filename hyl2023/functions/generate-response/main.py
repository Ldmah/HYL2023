import json
import requests
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("environment-data")

def lambda_handler(event, context):
    client = boto3.client('ssm')
    response = client.get_parameters_by_path(
        Path='/hyl2023',
        Recursive=True,
        WithDecryption=True
    )

   # # THINGS TO DO HERE
    # # 1. Save uuid (or id) into a variable (make sure this is sent in header, not body)
    # # 2. Save all survey information into a string
    # # 3. Make a call via the gpt function
    # # 4. Save the response from the gpt function into data (as shown below)
    # # 5. SORT USER INFORMATION INTO NUMERICAL VALUES FOR COMPARISON LATER (INTO DYNAMODB, WILL NEED TO EDIT DATA JSON DIRECTLY BENEATH THIS --> DEPENDS ON THE QUESTIONS WE ASK)

    gpt_key = response["Parameters"][0]["Value"]
    submission_id = event["headers"]["id"]

    body = json.loads(event["body"]) # Need to retrieve all data here as a json

    numerical_dict = numericalDict(body) # creates numerical dictionary
    prompt_dict = transformPromptDictionary(numerical_dict) # creates prompt dictionary
    string_data = describeDictionary(prompt_dict) # creates string data
    survey_score = sumScore(numerical_dict) # creates response sum
    gpt_response = gpt(string_data, gpt_key) # creates gpt response


    data = {
        "id": submission_id,
        "gpt_string": gpt_response,
        "score": survey_score
    }

    json_data = json.dumps(data)

    try:
        body = json.loads(json_data)
        table.put_item(Item=body)
    
    except Exception as e:
        print(e)
        print('Error loading JSON data')
        return {
            'statusCode': 500,
            'body': json.dumps('Error loading JSON data')
        }
    print("Terraform test success")
        
    return {
        'statusCode': 200,
        'body': json.dumps('OpenAI retrieval and database upload success!')
    }


def gpt(data, gpt_key):
    request = f"Here is some information about a person's environmental impact. What are they doing good? What can they improve upon? "
    request +=data # MAY NEED TO EDIT THIS LATER BASED ON FORMAT OF INFO BEING PUSHED TO THE BACKEND

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {gpt_key}"
    }

    info = {
        "prompt": request,
        "model": "text-davinci-003",
        "max_tokens": 500,
        "temperature": 0.8
    }

    url = "https://api.openai.com/v1/completions"
    
    response = requests.post(url, headers=headers, data=json.dumps(info))
    gpt_response = response.json()
    text_string = gpt_response['choices'][0]['text']
    text_string = text_string.strip()

    return text_string



def numericalDict(body):
    """
    Transform the value of q8 in a dictionary to a numerical score based on a range.

    Args:
        body (dict): A dictionary containing the key 'q6' with a value that is either an int or a float.

    Returns:
        dict: A new dictionary with the same keys as the input, but with the value of 'q6' transformed to a numerical score.

    Ex:
        >>> body = {'q1':5,'6': 12}
        >>> numericalSort(body)
        {'q8': 0.5}
    """

    q6_value = body.get('q6')
    if isinstance(q6_value, (int, Decimal)):
        if q6_value < 5:
            body['q6'] = 1
        elif q6_value <= 10:
            body['q6'] = 2
        elif q6_value <= 15:
            body['q6'] = 3
        elif q6_value <= 20:
            body['q6'] = 4
        else:
            body['q6'] = 4

    return body


def transformPromptDictionary(dictionary):
    """
    Transforms the values in a dictionary based on the following rules:
    - If the value is >= 0.75, it is changed to 'Good'
    - If the value is <= 0.5, it is changed to 'Poor'
    - If the value is 1, it is changed to 'Good'
    - Otherwise, the value is unchanged
    
    Args:
    - dictionary: a dictionary with string keys and float values
    
    Returns:
    - A new dictionary with the same keys as the input dictionary, but with transformed values
    """
    prompt_dict = {}
    for key, value in dictionary.items():
        if Decimal(value) >= 3:
            prompt_dict[key] = 'good'
        else:
            prompt_dict[key] = 'bad' if Decimal(value) <= 2 else value
            prompt_dict[key] = 'good' if Decimal(value) == 4 else prompt_dict[key]
    return prompt_dict


def describeDictionary(dictionary):
    """
    Returns a string that describes a dictionary by concatenating the values of each key-value pair
    with the corresponding key. Each concatenated string is separated by a space.

    Args:
        dictionary (dict): A dictionary to describe.

    Returns:
        str: A string that describes the dictionary.
    """
    descriptions = []
    tempString = ""
    for key, value in dictionary.items():
        if key == 'q1':
            tempString = "preventing waste by using reusable bottles"
        elif key == 'q2':
            tempString = "recycling paper, plastic, and glass"
        elif key == 'q3':
            tempString = "turning off lights and electronics when not in use"
        elif key == 'q4':
            tempString = "participating in community cleanups"
        elif key == 'q5':
            tempString = "preventing textile waste"
        elif key == 'q6':
             tempString = "preventing food waste"
        elif key == 'q7':
            tempString ==  "preventing paper waste"
        elif key == 'q8':
            tempString = "using reusable bags, containers, and utensils"
        elif key == 'q9':
            tempString = "buying products with minimal/recyclable packaging"
        elif key == 'q10':
            tempString = "disposing of hazardous waste properly"
        descriptions.append(f"They are {value} at {tempString}")
    
    surveyDescription = " ".join(descriptions)
    return surveyDescription

def sumScore(numericalDict):
    sum = 0
    for num in numericalDict.values():
        sum += Decimal(num)
    return sum








