# beta-signup-serverless
A demo beta signup page built with serverless tech on AWS

Ask questions in the [gitter chat room](https://gitter.im/beta-signup-serverless/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

# Dependencies
* Node 6.10.3
* Yarn 0.27.5

# First time setup
1. Create yourself an [AWS account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
2. Install the [AWS CLI tools](https://aws.amazon.com/cli/)
3. Create an IAM user which has administrative permissions
4. Download the Access Key Id and Secret Access Key for your new IAM user
5. Create a new aws cli profile:
    ```
    aws configure --profile beta-demo
    ```
    When prompted, enter the access key Id and secret access key obtained in the previous step.
    ```
    AWS Access Key ID [None]: <Access Key Id>
    AWS Secret Access Key [None]: <Secret Access Key>
    Default region name [None]: ap-southeast-2 
    Default output format [None]: json
    ```
6. Clone this repository into a directory of your choosing
    ```
    git clone https://github.com/rlgod/beta-signup-serverless.git && cd beta-signup-serverless
    ```
7. Run the setup script
    ```
    yarn run setup
    ```

# Deploying the serverless framework backend

## Using the provided script (Recommended)
```
yarn run deploy:backend
```

## Manually
Run the shell preparation script
```
source env-setup
```
Then move into the backend directory and run the serverless commands manually there
```
cd backend && sls deploy -s <my-stage>
```

# Deploying the frontend
Run

```
yarn run deploy:frontend
```
