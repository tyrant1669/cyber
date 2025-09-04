const express = require("express");
const app = express();

app.use(express.json());

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login:", username, password);
  
  // For demo purposes, just reply back
  res.json({ message: `Hello ${username}, login received.` });
});

// Default route (optional)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
