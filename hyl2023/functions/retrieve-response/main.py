import json
import boto3

dynamodb_resource = boto3.resource("dynamodb")
table = dynamodb_resource.Table("environment-data")

def lambda_handler(event, context):
    try:
        user_id = "your_user_id_here"
        response = table.scan()
        user_data = None
        for item in response["Items"]:
            if item["id"] == user_id:
                user_data = item
                break
        
        # NEED TO ADD COMPARISON TO OTHER USER NUMERICAL INFORMATION AND ADD IT DATA ATTRIBUTE

        user_env_info = {
            field1: f"You are better than {some_variable}% of other people who took this survey."
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