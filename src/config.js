const dev = {
  STRIPE_KEY: "pk_test_51HFNZrFpkpVT6mAyyVbh5hVnb5PWu3XYm07ENHg35qzGIy1yjejfAU9pPdxqqaSgBYiGXq5XG3kpgO2DhbEw7zmD00t1KZGCw3",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-c2fgro3586am"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://1zblm5syi3.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_41164IfOI",
    APP_CLIENT_ID: "1ppv2hl26m5c1jj1jla3vkbn0o",
    IDENTITY_POOL_ID: "us-east-2:7e344d27-9736-463d-a1ce-33babe4041a3"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HFNZrFpkpVT6mAyyVbh5hVnb5PWu3XYm07ENHg35qzGIy1yjejfAU9pPdxqqaSgBYiGXq5XG3kpgO2DhbEw7zmD00t1KZGCw3",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1cst2pnumrukt"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://r1hczo51ej.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_aISTjFGpB",
    APP_CLIENT_ID: "311haonih09lk18esnjhdrv808",
    IDENTITY_POOL_ID: "us-east-2:b37fb752-1e79-483e-91ed-5a78965924ca"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};