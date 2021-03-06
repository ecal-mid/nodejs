// node express

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/main", express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Go to http://localhost:${port}`);
  console.log(`and to http://localhost:${port}/main`);
});
