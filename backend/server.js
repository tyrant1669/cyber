const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received:", username, password);
  res.json({ message: `Hello ${username}, login received.` });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
