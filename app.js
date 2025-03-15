import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("hello Yashik");
});

app.get("/getall", (req, res, next) => {
    res.send("hello everyone");
  });

const Port = 80;
app.listen(Port, () => {
  console.log(`App listening in Port ${Port}`);
});
