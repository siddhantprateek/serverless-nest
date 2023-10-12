exports.handler = async function () {
    const params = {
      // FunctionName is composed of: service name - stage - function name, e.g.
      FunctionName: 'myServiceName-dev-invokedHandler',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({ data: 'foo' }),
    }
   
    const response = await lambda.invoke(params).promise()
  }