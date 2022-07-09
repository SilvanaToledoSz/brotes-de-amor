//Función para mostrar la hora en tiempo real:
setInterval(() => {    
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString()
    }, 1000);

function gracias() {
    let btnGracias = document.createElement("div")
    btnGracias.className = "btnGracias"
    btnGracias.innerHTML = `<button type="button" class="btn btn-danger btnVolver" title ="Volver">Volver al inicio</button>`
    graciasVolver.appendChild(btnGracias)

    btnGracias.addEventListener("click", ()=> {
        location.href = "index.html"
})
}
gracias()

function mostrarCompra() {
let clienteFinal = JSON.parse(localStorage.getItem("subirCliente"))
let contenedorDatos = document.createElement("div")
contenedorDatos.className = "datosCompra"
let datos = clienteFinal.join("<br>")
        contenedorDatos.innerHTML = datos
        masDatos.appendChild(contenedorDatos)
        console.log(clienteFinal)

        clienteObj = {
            ...clienteFinal
        }
        console.log(clienteObj[0])
        console.log(clienteObj[1])
        console.log(clienteObj[2])
        console.log(clienteObj[3])
}
mostrarCompra()

//Aplicación de galería Luxon:

function fecha(){
    const hoy = DateTime.now()
    console.log( hoy.toString() )    
    fechaHoy.innerHTML = `<div>Fecha de compra: ${hoy.toLocaleString(DateTime.DATE_SHORT)}</div>`     
    const suma = hoy.plus({ days: 2 })   
    fechaEntrega.innerHTML = `<div>Fecha de entrega: ${suma.toLocaleString(DateTime.DATE_SHORT)}</div>`     
}
fecha()