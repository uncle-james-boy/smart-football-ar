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

app.use(express.json());

app.post('/track-interaction', (req, res) => {
    const { action, timestamp } = req.body;

    console.log("User interaction:", action, timestamp);

    res.json({
        message: "Interaction tracked successfully",
        data: { action, timestamp }
    });
});