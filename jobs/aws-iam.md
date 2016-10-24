# AWS IAM Account for CloudWatch

## Overview

The following document describes the process of creating a read-only account used to query statistics from AWS CloudWatch API.

## Configuration Steps

### Login into the AWS console and select Identity and Access Management (IAM)

![](images/img_554f3a8c1f70a.png)


### Open the Groups menu and click [Create New Group].

Use a naming convention that would describe what this group is used for,
for example `cloudwatch-ro-group`.

![aws-acl-2](images/aws-acl-2.png)

### Open Users menu and click [Create New User].

Let the system generate access and secret key automatically. Copy
them for your reference.

![aws-acl-3](images/aws-acl-3.png)

### Open Group menu again and click on Add Users to Group

Add `cloudwatch-ro-user` to the `cloudwatch-ro-group`.

![aws-acl-4](images/aws-acl-4.png)

### While on the Group page, scroll down to Inline Policies and click on [Create Another Policy]

Enter the following JSON text and save the policy.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "cloudwatch:Describe*",
                "cloudwatch:Get*",
                "cloudwatch:List*",
                "ec2:Describe*"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}

```

### Save and verify that the policy is correct.

![aws-acl-5](images/aws-acl-5.png)

### You can now query Amazon CloudWatch monitoring service HTTP APIs with the new user account, access key, and secret key.
