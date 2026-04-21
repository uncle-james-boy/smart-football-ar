const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: "FootballInteractions",
        Item: {
            id: Date.now().toString(),
            action: data.action,
            timestamp: data.timestamp
        }
    };

    try {
        await dynamodb.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify("Saved to DynamoDB")
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify("Error saving data")
        };
    }
};