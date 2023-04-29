import json
import boto3

dynamodb_resource = boto3.resource("dynamodb")
table = dynamodb_resource.Table("hyl2023-environment-data")

def lambda_handler(event, context):
    try:
        
        user_id = event["headers"]["id"]

        response = table.scan()
        user_data = None

        counter = 0
        sum = 0

        for item in response["Items"]:
            if item["id"] == user_id:
                user_data = item
            
            counter += 1
            sum += int(item["score"])
        
        avg = sum / counter

        comparison = differenceFromAverage(user_data["score"], avg)

        
        # NEED TO ADD COMPARISON TO OTHER USER NUMERICAL INFORMATION AND ADD IT DATA ATTRIBUTE

        user_env_info = {
            "compare": comparison,
            "gpt_response": user_data["gpt_string"]
        }


    
    except Exception as exp:
        print("exception: {exp}")
        return{
            "statusCode":500,
            "body": json.dumps({
                "message":str(exp)
            })
        }
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            "message":"success",
            "data": user_env_info
        })
    }