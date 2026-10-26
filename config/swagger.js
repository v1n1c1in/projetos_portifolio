import swaggerAutogen from "swagger-autogen";
const outputFile = "./config/swagger-output.json";
const endpointsFiles = ["./Routes/projeto.Route.js"];

const doc = {
    info: {
        title: "Api de Projetos",
        description: "Documentação gerada automaticamente com swagger",
        version: "1.0.0",
    },

    host: "localhost:5000",
    schemes: ["http"],
    basePath: "/api",
};
swaggerAutogen()(outputFile, endpointsFiles, doc);
