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

    gpt_key = response["Parameters"][0]["Value"]

    body = event["body"] # Need to retrieve all data here as a json

    # THINGS TO DO HERE
    # 1. Save uuid (or id) into a variable
    # 2. Save all survey information into a string
    # 3. Make a call via the gpt function
    # 4. Save the response from the gpt function into data (as shown below)
    # 5. SORT USER INFORMATION INTO NUMERICAL VALUES FOR COMPARISON LATER (INTO DYNAMODB, WILL NEED TO EDIT DATA JSON DIRECTLY BENEATH THIS --> DEPENDS ON THE QUESTIONS WE ASK)

    data = {
        id: submission_id,
        gpt_string: gpt_response,
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


