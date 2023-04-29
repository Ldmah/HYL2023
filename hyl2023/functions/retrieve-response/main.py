import json
import boto3

dynamodb_resource = boto3.resource("dynamodb")
table = dynamodb_resource.Table("hyl2023-environment-data")

def lambda_handler(event, context):
    try:
        # user_id = "your_user_id_here"
        # response = table.scan()
        # user_data = None
        # for item in response["Items"]:
        #     if item["id"] == user_id:
        #         user_data = item
        #         break
        
        # # NEED TO ADD COMPARISON TO OTHER USER NUMERICAL INFORMATION AND ADD IT DATA ATTRIBUTE

        # user_env_info = {
        #     field1: f"You are better than {some_variable}% of other people who took this survey."
        # }
        print("hi, test -> delete later")


    
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
            "data": "NEED TO REPLACE THIS LATER WITH ACTUAL DATA IN JSON FORMAT RAHHH"
        })
    }



def differenceFromAverage(score, average):
    difference = score - average
    percentDifference = difference/average * 100
    if percentDifference > 0:
        tempString = f"You performed better than the average person by  {percentDifference}%."
    else:
        tempString = f"You performed worse than the average person by  {abs(percentDifference)}% of other people who took this survey."

    return tempString    
