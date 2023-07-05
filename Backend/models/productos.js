const mongoose=require("mongoose")

/* Esquema de los productos, usando el metodo de mongoose llamado schema
Cada vez que se realiza un create, asigna automaticamente un ID.
*/
const productosSchema=mongoose.Schema({
    nombre:{
        type:String, //Tipo del atributo
        required: [true, "Por favor registrar el nombre del producto."],    // se desea que sea obligatorio. Se realiza una validación de recursos, si no está lleno, muestra el mensaje.
        trim:true,  //elimina valores blancos.
        maxLength:[120,"El nombre del producto no puede exceder los 120 caracteres."] //Si algo no funciona muestra el mensaje de la derecha.
    },
    precio:{
        type:Number,
        required: [true, "Por favor registrar el valor del producto."],
        maxLength:[7,"El valor del producto no puede estar por encima de 9'999.999"],
        default:0.0
    },
    Consola:{
        type:String
    },
    Descripcion:{
        type: String,
        required: [true, "Por favor registrar la descripción del producto."],
        maxLength:[500,"El nombre del producto no puede exceder los 500 caracteres."],
    },
    FechaIngreso:{
        type: Date,
        required: [false, "Por favor registrar la fecha de ingreso del producto."],
        default: Date.now
    },
    FechaEgreso:{
        type: Date,
    },
    FechaLanzamiento:{
        type: Date,
        required: [true, "Por favor registrar la fecha de lanzamiento del producto."],
        default: Date.now
    },
    Calificacion:{
        type: Number,
        default: 0
    },
    // Se crea un arreglo de imagenes para poder tener varias imagenes de un producto.
    Imagen:[
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    categoria:{
        type: String,
        required: [true, "Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Acción",
                "Aventura",
                "Arcade",
                "Deportes",
                "Estrategia",
                "Simulación",
                "Rol"
            ]
        }
    },
    inventario:{
        type: Number,
        required: [true,"Por favor registre el stock del producto."],
        maxLength: [5, "Cantidad máxima no puede sobrepasar 99999"],
        default: 0
    },
    numCalificaciones:{
        type: Number,
        default: 0
    },
    Opiniones:[
        {
            nombreCliente:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required: true
            },
            Comentario:{
                type: String,
                required: true
            }
        }
    ]
})

// Se exporta como un modelo de base de datos que se alimenta del esquema creado.
module.exports=mongoose.model("productos", productosSchema)