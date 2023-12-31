const app=require("./app")
const conectDB = require("./config/database");

// Setear  archivo de configuración.
const dotenv=require("dotenv");
dotenv.config({path: 'Backend/config/config.env'})

conectDB();

// Se lanza el servidor.
const server=app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})