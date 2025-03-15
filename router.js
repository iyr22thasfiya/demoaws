import { Router } from "express";
import { getone, getall } from "./controller.js";

export const router = (app) => {
  const route = Router();
  route.get("/", getone);
  route.get("/getall", getall);

  app.use("/api", route);
};
