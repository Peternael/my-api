const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/ai-video", (req, res) => {
  console.log("Data:", req.body);

  res.json({
    message: "وصلت البيانات ✅",
    data: req.body
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
