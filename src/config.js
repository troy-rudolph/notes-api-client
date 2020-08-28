export default {
  MAX_ATTACHMENT_SIZE: 5000000,	
  s3: {
    REGION: "us-east-2",
    BUCKET: "buckbranchranch"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://6srxhl7q86.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_huseqtLkR",
    APP_CLIENT_ID: "k7ggis3rcsqt5ll4ar3e5mdki",
    IDENTITY_POOL_ID: "us-east-2:d52acc4e-88d7-4086-81c6-7b68b66172c2"
  }
};