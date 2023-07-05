const producto=require("../models/productos")

// Ver lista de productos.
exports.getProducts=(req,res,next) => {
    res.status(200).json({
        succes:true,
        message: "En esta ruta ud va a poder ver todos los productos."
    })
}


/* Controlador es el encargado de se decia lo que iba a ocurrir, el engrae del aplicativo
Desde aquí podemos realizar la creación de productos (CRUD)
Promesa: 
*/
// Crear un nuevo producto.
exports.newProdcut=async(req,res,next) => {
    const product= await producto.create(req.body);
    res.status(201).json({
        succes: true,
        product
    })
}