//Función para mostrar la hora en tiempo real:
setInterval(() => {    
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString()
    }, 1000);

//Función para que se vea el spinner:
const espera = () => {
    return `
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`
}

function bajarCarrito() {    
    recuento.className = "recuentoNO"
    totalPagar.className = "recuentoNO"    
    spinner.innerHTML = espera()
    
    //Aplico setTimeout para dar tiempo a que el sistema procese la respuesta:
    setTimeout(() => {
        spinner.innerHTML = ""
        spinner.className = "spinnerNO"
        recuento.className = "recuento animate__animated animate__fadeInUp"
        totalPagar.className = "col-12 text-center recuento animate__animated animate__fadeInUp"
        
        //Función que toma el array subido a localstorage y la 'baja' para poder trabajarla en el nuevo HTML
        let carritoLS = JSON.parse(localStorage.getItem("subirCarrito"))
        carritoLS.forEach((item) => {
            
            let card = document.createElement("div");
            card.className = "animate__animated animate__fadeInUp"

                //Muestra en HTML los elementos que fueron cargados al array del carrito desde index.html
                const {id, imgs, nombre, valorNeto, medida} = item 
                card.innerHTML = `
                        <div class="tabla_carrito container">
                            <span class="td_carrito1 text-center"><img src="${imgs}" class="card-img-top div__img--producto_carrito"></span>
                            <span class="td_carrito2 text-center">${nombre}</span>
                            <span class="td_carrito3 text-center">$ ${valorNeto}</span>
                            <span class="td_carrito4 text-center">${medida}</span>
                            <button id="borrar${id}" type="button" class="text-center btn td_carrito5" ><i class="fa-solid fa-trash"></i></button
                        </div>`
                listadoCarrito.appendChild(card)

                // Agregamos la funcionalidad de borrar un objeto del array y al mismo tiempo actualizar el total del carrito y el total de la suma:
                let btnEliminar = document.getElementById(`borrar${id}`)
                btnEliminar.addEventListener('click', ()=> {
                    btnEliminar.parentElement.remove()
                    carritoLS = carritoLS.filter(elemento => elemento.id !== id)                    
                    sumarProd(carritoLS)
                    sinCarrito(carritoLS)
                })
            })
        sumarProd(carritoLS)
        pagar()
        volver()
    }, 1000);    
}
bajarCarrito()

//Suma los objetos de array y muestra valor total
function sumarProd(prod) {    
    contadorProd.innerText = prod.length
    valorTotal.innerText = prod.reduce((acumulador,pl)=> acumulador + pl.valorNeto , 0)  
}

//Habilita el form desde el cual se enviarán datos.
function pagar() {
    let btnComprar = document.createElement("div")
    btnComprar.innerHTML = `<button type="button" class="animate__animated animate__fadeInUp btn btn-danger btnComprar">Pagar</button>`
    divComprar.appendChild(btnComprar)
    btnComprar.addEventListener("click", ()=> {
        formu.className = "col-4 div__form mt-5 ms-5 animate__animated animate__bounceInRight"
    })    
}

//Botón para volver a la página previa y reiniciar la compra:
function volver() {
    let btnVolver = document.createElement("div")
    btnVolver.innerHTML = `<button type="button" class="animate__animated animate__fadeInUp btn btn-danger btnVolver" title ="Reiniciar compra">Reiniciar <i class="fa-solid fa-arrow-rotate-left text-light"></i></button>`
    divVolver.appendChild(btnVolver)
    btnVolver.addEventListener("click", ()=> {
        location.href = "index.html"
    })        
}

// Función que define qué se ve en pantalla cuando el array no tiene objetos cargados
function sinCarrito(prod) {
    if (prod.length == 0) {
        let h1 = document.querySelector('h1')
        h1.innerHTML = "Ups, el carrito está vacío"
        recuento.className = "recuentoNO"
        totalPagar.className = "recuentoNO"
        divComprar.className = "recuentoNO"
        divVolver.className = "col-12 text-center"
    }
}

// Eventos del Formulario para botón Submit
submit.addEventListener("mouseover", ()=> {
    submit.className = "btn btn_form"
})
submit.addEventListener("mouseout", ()=> {
    submit.className = "btn btn-danger"
})
submit.addEventListener("click", (e)=> {
    e.preventDefault() 
    //Chequeo de campos completos:
    let habilitarCompra = ((inputNombre.value =="") || (inputEmail.value =="") || (inputTelefono.value =="") || (inputFormaPago.value !="Mercado Pago") && (inputFormaPago.value !="Transferencia Bancaria")) ? true : false
    habilitarCompra ? alertaFinal() :  datosComprador()
})

//Aplicación de galería SweetAlert:
function alertaFinal(){
    Swal.fire({
        title: 'Error',
        text: 'Te falta completar algunos campos',
        icon: 'error',
        confirmButtonText: 'Terminar de completar'
    })  
}

// Función para cargar en base .json los datos ingresados por el comprador:
async function datosComprador() {      
    let inputNombre = document.querySelector('#inputNombre').value
    let inputEmail = document.querySelector('#inputEmail').value
    let inputTelefono = document.querySelector('#inputTelefono').value
    let inputFormaPago = document.querySelector('#inputFormaPago').value
    try {
        let cargaCliente = await fetch(bdComp, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputNombre,
                inputEmail,
                inputTelefono,
                inputFormaPago
            })
        })
        let json = await cargaCliente.json()
        location.href = "gracias.html"
    } catch(error){
        let mensaje = error.statusText || 'Error'
        let informe = document.getElementById("informe")
        informe.innerHTML = `${mensaje}`
    }
}