const { Lambda } = require('aws-sdk')
 
const lambda = new Lambda({
  apiVersion: '2015-03-31',
  // endpoint needs to be set only if it deviates from the default, e.g. in a dev environment
  // process.env.SOME_VARIABLE could be set in e.g. serverless.yml for provider.environment or function.environment
  endpoint: process.env.SOME_VARIABLE
    ? 'http://localhost:3002'
    : 'https://lambda.us-east-1.amazonaws.com',
})