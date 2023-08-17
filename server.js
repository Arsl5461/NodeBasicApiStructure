const express = require("express");
const app = express();
const PORT = 8084;
// const connectDb = require("./config");
const registerRouter = require("./routes/user.route");

// connectDb();
app.use(registerRouter);

res.json("Hello World!");

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
