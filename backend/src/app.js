const AWS = require('aws-sdk');

AWS.config.update({
  region: 'af-south-1'
});

const lambda = new AWS.Lambda();

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.post('/track-interaction', async (req, res) => {
  const payload = {
      body: JSON.stringify(req.body)
  };

  const params = {
      FunctionName: "trackInteractionFunction",
      Payload: JSON.stringify(payload)
  };

  try {
      const result = await lambda.invoke(params).promise();

      res.json({
          message: "Sent to AWS Lambda",
          lambdaResponse: JSON.parse(result.Payload)
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Lambda invocation failed" });
      }
    });
  
