const express=require("express");
const req = require("express/lib/request");

// Enrutador
const router=express.Router();

// Se trae la respuesta json desde el controlador.
const {getProducts} = require("../controllers/productsControllers")
// Ruta donde queremos ver el getProducts
router.route("/productos").get(getProducts)

module.exports=router;