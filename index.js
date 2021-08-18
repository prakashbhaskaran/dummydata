const express = require("express");

const datas = require("./datas");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/products", (req, res) => {
  res.json(datas);
});
app.post("/product/item", (req, res) => {
  const id = req.body.id;
  const item = datas.find((ele) => ele.pID === id);
  res.json(item);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("connected");
});
