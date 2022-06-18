// Muestra productos en el html

function mostrarCards() {
    plantas.forEach (el => {
        let div = document.createElement("div")
        div.className = "col"
        div.innerHTML = `<div class="card">                    
                            <img src="${el.imgs}" class="card-img-top div__img--producto">
                            <div class="card-body">
                                <h5 class="div__h5--prod">${el.nombre}</h5>                                
                                <p class="div__p--prod">Medida: ${el.medida}</p>
                                <p class="div__p--prod">Precio: $${el.valorNeto}</p>
                                <div class="div__contenedorCompra">
                                    <button id="boton${el.id}" type="button" class="btn btn-danger btn-sm div__btnCarrito" style="background-color: #D90429;"><i class="fa-solid fa-cart-shopping text-light"></i></button>
                                </div> 
                            </div>
                        </div>`
        listadoPlantas.appendChild(div)

        let btnCarrito = document.getElementById(`boton${el.id}`)        

        btnCarrito.addEventListener("click", ()=> {
            lateralCarrito.className = "col-5 div__col--carrito"
        })

        btnCarrito.addEventListener("click", ()=> {
            agregarCarrito(el.id)
            
        })


    })
}

mostrarCards()

function agregarCarrito(id) {    
    let almacenarProd = plantas.find(pl => pl.id === id)        
    carrito.push(almacenarProd)
    mostrarCarrito(almacenarProd)
    cantidadCarrito ()

}

function mostrarCarrito(almacenarProd) {
    let contenedorCarrito = document.createElement("div")
    contenedorCarrito.className = "div__contenedorCarrito"
    contenedorCarrito.innerHTML = `<div class="div_carrito"> ${almacenarProd.nombre} | $ ${almacenarProd.valorNeto} | ${almacenarProd.medida}  |  <button id="borrar${almacenarProd.id}" type="button" class="btn" >
                                    <i class="fa-solid fa-trash"></i></button> </div>`
    listadoCarrito.appendChild(contenedorCarrito)

    let borrarProd = document.getElementById(`borrar${almacenarProd.id}`)
    borrarProd.addEventListener("click", ()=> {
        borrarProd.parentElement.remove()
        carrito = carrito.filter(prod => prod.id !== almacenarProd.id)
        cantidadCarrito ()
    })

}

function cantidadCarrito (){
    contadorProd.innerText = carrito.length
    valorTotal.innerText = carrito.reduce((acumulador,pl)=> acumulador + pl.valorNeto , 0)
    
}

function pagar() {
    let btnComprar = document.createElement("div")
        btnComprar.innerHTML = `<button type="button" class="btn btn-danger">Pagar</button>`
    divComprar.appendChild(btnComprar)

    btnComprar.addEventListener("click", ()=> {
        formu.className = "col-12 div__form mt-5"
    })  
    


}
pagar()



/* Eventos del Formulario */

submit.addEventListener("mouseover", ()=> {
    submit.className = "btn btn-primary"
})

submit.addEventListener("mouseout", ()=> {
    submit.className = "btn btn-danger"
})

submit.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault()
    console.log("Detención de evento submit")
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


let cantPago = inputCantPago.addEventListener("keydown", (e)=> {
    console.log(e.key)
})

