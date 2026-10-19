import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import projetoRoute from "./Routes/projeto.Route.js";

dotenv.config();
const api = express();
//Troca de mensagens com o front será no formato json
api.use(express.json());
api.use(cors());
api.use("/api", projetoRoute)
const PORT = process.env.PORT || 5000;
api.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});