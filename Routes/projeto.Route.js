import express from "express";
import projetoController from "../Controllers/projetoController.js";
const route = express.Router();
route.post("/create", projetoController.Create);
export default route;