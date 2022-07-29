//Función para mostrar la hora en tiempo real:
setInterval(() => {    
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString()
    }, 1000);

// Función para mostrar botón para volver al inicio
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

//Función para mostrar datos enviados por el comprador en el formulario
async function mostrarDatosComprador() {
    await fetch(bdComp) 
    .then( (respuesta) => respuesta.json())
    .then( (compradores) => {
        compradores = compradores.slice(-1)
        compradores.forEach(el => {
            let contenedorDatos = document.createElement("div")
            contenedorDatos.className = "datosCompra"
            let {inputNombre, inputEmail, inputTelefono, inputFormaPago} = el
            contenedorDatos.innerHTML = `${inputNombre}<br>
            ${inputEmail}<br>
            ${inputTelefono}<br>
            ${inputFormaPago}<br>`
            masDatos.appendChild(contenedorDatos)
        })
    })
    .catch ( (error)=> { 
        masDatos.className = "text-center mt-2 mb-1"
        masDatos.innerHTML = `<div>
                                    <i class="fa-solid fa-heart-crack"></i>
                                    <p class="text-center fs-6">El sitio está atravesando unos inconvenientes, <br>por favor, intentalo más tarde.</p>
                                    </div>`
    })    
} 
mostrarDatosComprador()

//Aplicación de galería Luxon:
function fecha(){
    const hoy = DateTime.now()
    fechaHoy.innerHTML = `<div>Fecha de compra: ${hoy.toLocaleString(DateTime.DATE_SHORT)}</div>`     
    const suma = hoy.plus({ days: 2 })   
    fechaEntrega.innerHTML = `<div>Fecha de entrega: ${suma.toLocaleString(DateTime.DATE_SHORT)}</div>`     
}
fecha()