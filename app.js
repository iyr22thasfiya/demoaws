import express from "express";
import { router } from "./router.js";

const app = express();

app.use(express.json());

router(app);

const Port = 80;
app.listen(Port, () => {
  console.log(`App listening in Port ${Port}`);
});
