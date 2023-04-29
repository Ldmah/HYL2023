terraform {
  required_providers {
    aws = {
      version = ">= 4.0.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "ca-central-1"
}

resource "aws_s3_bucket" "hyl2023-waste-management" {
  bucket = "hyl2023-waste-management"
}


# BEGINNING OF GENERATE-RESPONSE TERRAFORM

locals {
  generate_function_name = "generate-response"
  generate_handler_name  = "main.lambda_handler"
  generate_artifact_name = "${local.generate_function_name}/artifact.zip"
}

resource "aws_iam_role" "lambda" {
  name               = "iam-for-lambda-response"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "lambda-generate" {
  s3_bucket = aws_s3_bucket.hyl2023-waste-management.bucket
  # the artifact needs to be in the bucket first. Otherwise, this will fail.
  s3_key        = local.generate_artifact_name
  role          = aws_iam_role.lambda.arn
  function_name = local.generate_function_name
  handler       = local.generate_handler_name
  source_code_hash = filebase64sha256("../functions/generate-response/main.py")

  runtime = "python3.9"

  timeout = 20
}


resource "aws_iam_policy" "logs" {
  name        = "lambda-logging-response"
  description = "IAM policy for logging from a lambda and adding to DynamoDB"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "dynamodb:*"
        
      ],
      "Resource": ["arn:aws:logs:*:*:*", "${aws_dynamodb_table.hyl2023-environment-data.arn}"],
      "Effect": "Allow"
    },
    {
      "Action": [
        "ssm:GetParametersByPath"
      ],
      "Resource": "*",
      "Effect": "Allow"
    }
  ]
}
EOF
}

# attach the above policy to the function role
# see the docs: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment
resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda.name
  policy_arn = aws_iam_policy.logs.arn
}

resource "aws_lambda_function_url" "generate-url" {
  function_name      = aws_lambda_function.lambda-generate.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["POST"]
    allow_headers     = ["*"]
    expose_headers    = ["keep-alive", "date"]
  }
}

output "generate_url" {
  value = aws_lambda_function_url.generate-url.function_url
}

# BEGINNING OF RETRIEVE LAMBDA TERRAFORM

data "archive_file" "retrieve" {
  type = "zip"
  # this file (main.py) needs to exist in the same folder as this 
  # Terraform configuration file
  source_file = "../functions/retrieve-response/main.py"
  output_path = "retrieve.zip"
}

resource "aws_lambda_function" "lambda-retrieve" {
  role             = aws_iam_role.lambda.arn
  function_name    = "retrieve-response"
  handler          = "main.lambda_handler"
  filename         = data.archive_file.retrieve.output_path
  source_code_hash = data.archive_file.retrieve.output_base64sha256

  # see all available runtimes here: https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html#SSS-CreateFunction-request-Runtime
  runtime = "python3.9"
}

resource "aws_lambda_function_url" "retrieve-url" {
  function_name      = aws_lambda_function.lambda-retrieve.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["GET"]
    allow_headers     = ["*"]
    expose_headers    = ["keep-alive", "date"]
  }
}


output "retrieve_url" {
  value = aws_lambda_function_url.retrieve-url.function_url
}


# Makes dynamodb table
resource "aws_dynamodb_table" "hyl2023-environment-data" {
  name         = "hyl2023-environment-data"
  billing_mode = "PROVISIONED"

  # up to 8KB read per second (eventually consistent)
  read_capacity = 1

  # up to 1KB per second
  write_capacity = 1

  # This is our composition key
  hash_key = "id" # This is the partition key
  
  attribute {
    name = "id"
    type = "S" 
  }
}