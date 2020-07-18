const express = require("express");
const app = express();
const apiData = require("./data.json");
const apiRouters = express.Router();

apiRouters.get("/read", (req, res) => {
  res.json(apiData.read);
});

apiRouters.get("/getList", (req, res) => {
  res.json(apiData.getList);
});

apiRouters.get("/update", (req, res) => {
  res.json(apiData.update);
});

apiRouters.post("/delete", (req, res, next) => {
  res.json(apiData.delete);
});

apiRouters.get("/create", (req, res) => {
  res.json(apiData.create);
});

app.use("/", apiRouters);
app.listen(8083, () => {
  console.log("mock data is running...");
});
