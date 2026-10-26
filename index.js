import "dotenv/config";
import express from "express";
import cors from "cors";
import projetoRoute from "./Routes/projeto.Route.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger-output.json" with {type:"json"};
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL;
const api = new express();
//troca de mensagens com frontend json
api.use(express.json());
api.use(cors({
    credentials: true,
    origin: FRONTEND_URL
}));
api.use("/docs",swaggerUi.serve, swaggerUi.setup(swaggerDocument));
api.use("/api", projetoRoute);

api.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});