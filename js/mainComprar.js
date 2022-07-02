//Función que toma el array subido a localstorage y la 'baja' para poder trabajarla en el nuevo HTML
//Muestra en HTML los elementos cargados al array del carrito desde la página index.html 

function bajarCarrito() {    

    let contenedorCarrito = document.createElement("table")
    contenedorCarrito.className = "tabla_carrito"
    let filas = ""
    let carritoLS = JSON.parse(localStorage.getItem("subirCarrito")) || ["Carrito vacío"]
        for (item of carritoLS) {
            const {id, nombre, valorNeto, medida} = item 
            filas += `
                    <tr id="tr_carrito${id}">
                        <td class="td_carrito">${nombre}</td>
                        <td class="td_carrito">$ ${valorNeto}</td>
                        <td class="td_carrito">${medida}</td>                        
                    </tr>
                    <tr>
                        <td colspan=3>
                        <hr>
                        </td>
                    </tr>`
        }
        contenedorCarrito.innerHTML = filas
        listadoCarrito.appendChild(contenedorCarrito)

    sumarProd(carritoLS)


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
        btnComprar.innerHTML = `<button type="button" class="btn btn-danger btnComprar">Pagar</button>`
    divComprar.appendChild(btnComprar)

    btnComprar.addEventListener("click", ()=> {
        formu.className = "col-4 div__form mt-5 ms-5"
    })    

}
pagar()

//Botón para volver a la página previa y reiniciar la compra:
function volver() {
    let btnVolver = document.createElement("div")
        btnVolver.innerHTML = `<button type="button" class="btn btn-danger btnVolver" title ="Reiniciar compra"><i class="fa-solid fa-arrow-rotate-left text-light"></i></button>`
    divVolver.appendChild(btnVolver)

    btnVolver.addEventListener("click", ()=> {
        location.href = "index.html"
    })        
}
volver()


/* Eventos del Formulario */

submit.addEventListener("mouseover", ()=> {
    submit.className = "btn btn-primary"
})

submit.addEventListener("mouseout", ()=> {
    submit.className = "btn btn-danger"
})

//Aplicación de galería SweetAlert:

submit.addEventListener("click", (e)=> {
    e.preventDefault()
    console.log("Detención de evento submit")    

    //Chequeo de campos completos:

    let habilitarCompra = ((inputNombre.value =="") || (inputEmail.value =="") || (inputTelefono.value =="") || (inputFormaPago.value !="Mercado Pago") && (inputFormaPago.value !="Transferencia Bancaria")) ? true : false
    habilitarCompra ? alertaFinal() : location.href = "gracias.html" 
    debugger
    datosCompra()
    
    

})

function alertaFinal(){
    Swal.fire({
        title: 'Error',
        text: 'Te falta completar algunos campos',
        icon: 'error',
        confirmButtonText: 'Terminar de completar'
    })  

}


inputNombre.addEventListener("input", ()=> {
    console.clear()
    console.log(inputNombre.value)
})

inputEmail.addEventListener("input", ()=> {
    console.clear()
    console.log(inputEmail.value)
})

inputTelefono.addEventListener("input", ()=> {
    console.clear()
    console.log(inputTelefono.value)
})

let pagoElegido = inputFormaPago.addEventListener("change", ()=> {
    console.log(inputFormaPago.value)
})

function datosCompra() {
    cliente.push(inputNombre.value)
    cliente.push(inputEmail.value)
    cliente.push(inputTelefono.value)
    cliente.push(inputFormaPago.value)
    console.log(cliente)
    localStorage.setItem("subirCliente", JSON.stringify(cliente))  
    
}






