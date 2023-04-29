def numericalDict(body):
    """
    Transform the value of q8 in a dictionary to a numerical score based on a range.

    Args:
        body (dict): A dictionary containing the key 'q8' with a value that is either an int or a float.

    Returns:
        dict: A new dictionary with the same keys as the input, but with the value of 'q8' transformed to a numerical score.

    Ex:
        >>> body = {'q1':5,'q8': 12}
        >>> numericalSort(body)
        {'q8': 0.5}
    """
    q8_value = body.get('q8')
    if isinstance(q8_value, (int, float)):
        if q8_value < 5:
            body['q8'] = 0
        elif q8_value <= 10:
            body['q8'] = 0.25
        elif q8_value <= 15:
            body['q8'] = 0.5
        elif q8_value <= 20:
            body['q8'] = 0.75
        else:
            body['q8'] = 1
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
        if float(value) >= 0.75:
            prompt_dict[key] = 'good'
        else:
            prompt_dict[key] = 'bad' if float(value) <= 0.5 else value
            prompt_dict[key] = 'good' if float(value) == 1 else prompt_dict[key]
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

my_dict = {
    "q1": "1",
    "q2": "0.75",
    "q3": "0.75",
    "q4": "0.25",
    "q5": "0.25",
    "q7": "1",
    "q8": "1",
    "q9": "1",
    "q10": "0.75"
}

my_dict = numericalDict(my_dict)
promptDict = transformPromptDictionary(my_dict)
nori = describeDictionary(promptDict)
print(nori)