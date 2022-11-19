

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event);
    const distributorId = event.pathParameters.distributorId;
    const distributor = {'distributorId':distributorId, 'distributorName':"Distributor " + distributorId}
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify(distributor),
    };
    return response;
};
