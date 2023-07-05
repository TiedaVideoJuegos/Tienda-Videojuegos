const express = require("express");
const app = express();

// Utilizar información con respecto a Json que nos ofrece express.
app.use(express.json());

// Importar rutas.
const productos=require("./routes/products")
app.use('/api',productos)

module.exports=app