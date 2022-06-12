// Implementación de array de objetos

const plantas = []
plantas.push (new Planta ("rosal", 1200.0, 1.1, 0.30, 7.5, 13, 0, 0))
plantas.push (new Planta ("begonia", 750.0, 0.3, 0.25, 1.2, 25, 0, 0))
plantas.push (new Planta ("malvon", 525.0, 0.5, 0.5, 1.1, 10, 0, 0))
plantas.push (new Planta ("ficus", 2200, 1.5, 0.9, 4.5, 1, 0, 0))
plantas.push (new Planta ("rosario bananita", 450, 0.45, 0.15, 2.25, 0, 0, 0))
plantas.push (new Planta ("cactus espiralado", 250, 0.15, 0.07, 0.3, 0, 0, 0))

const carritoFinal = []

// otras variables

let precioIva = 0
let valorEnvio = 650
let direccionLocal = "Calle falsa 123, Tierra del Fuego, Argentina."
let porcentajeMP = 1.35
let productoUnidades = 0
let envioDom = 0
let totalFinal = 0

// otras funciones sobre el array de objetos

const precioFinal = (a,b) => a + b