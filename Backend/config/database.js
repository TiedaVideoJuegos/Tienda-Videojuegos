// Conexión base de datos mongo.
// mongose nos permite ejecutar queryies en nuestra bd.

const mongoose=require("mongoose");

//Metodos contante y no tiene acciones
const conectDB = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con=>{
        console.log(`BD Mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro la conexión a la bade de datos.`)
    })
}

module.exports=conectDB