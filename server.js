const express = require("express");
const app = express();
const PORT = 8000;
// const connectDb = require("./config");
const registerRouter = require("./routes/user.route");

// connectDb();
app.use(registerRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.send("Hello From Docker Side!");
});
app.get("/arsl", (req, res) => {
  res.send("Hello From Arslan Side!");
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
