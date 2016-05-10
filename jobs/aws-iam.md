#  AWS-IAM

## 1. Login into AWS console and select Identity and Access Management (IAM)

![](images/img_554f3a8c1f70a.png)

 

## 2. Open Groups menu and click [Create New Group].

Use a naming convention that would describe what this group is used for,
for example cloudwatch-ro-group.

![aws-acl-2](images/aws-acl-2.png)

## 3. Open Users menu and click [Create New User].

Let the system generate access and secret key automatically and copy
them for your reference.

![aws-acl-3](images/aws-acl-3.png)

## 4. Open Group menu again and click on Add Users to Group

Add cloudwatch-ro-user to cloudwatch-ro-group

![aws-acl-4](images/aws-acl-4.png)

## 5. While on group page, scroll down to Inline Policies and click on  [Create Another Policy]

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

## 6. Save and verify that the policy is correct.

![aws-acl-5](images/aws-acl-5.png)

## 7. You can now query Amazon CloudWatch monitoring service HTTP APIs with the new user account, access key and secret key.