import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();    //inicia o dotenv.
const db = mysql.createConnection({
    host:process.env.BD_HOST,
    user:process.env.DB_USER,
    password:process.env.BD_PASSWORD,
    database:process.env.DB_NAME
});

db.connect((err)=>{
    if(err){
        console.error("Erro ao conectar Banco de Dados:", err);
        return;
    }

    console.log("Conectou com o banco de dados");
});