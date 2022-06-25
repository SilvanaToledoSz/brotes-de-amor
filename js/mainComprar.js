function bajarCarrito() {    

    let contenedorCarrito = document.createElement("div")
    let filas = ""
    let carritoLS = JSON.parse(localStorage.getItem("subirCarrito"))
        for (item of carritoLS) {
            filas += `
                    <div>${item.nombre} | ${item.valorNeto} | ${item.medida} |  <button id="borrar${item.id}" type="button" class="btn" >
                    <i class="fa-solid fa-trash"></i></button>
                    </div>`
        }
    contenedorCarrito.innerHTML = filas
    listadoCarrito.appendChild(contenedorCarrito)

    carritoHeader.innerHTML = carritoLS.length 

    contadorProd.innerText = carritoLS.length
    valorTotal.innerText = carritoLS.reduce((acumulador,pl)=> acumulador + pl.valorNeto , 0)  

    let borrarProd = document.getElementById(`borrar${item.id}`)
    borrarProd.addEventListener("click", ()=> {
        borrarProd.parentElement.remove()
        carritoLS = carritoLS.filter(prod => prod.id !== item.id)
        contadorProd.innerText = carritoLS.length
        valorTotal.innerText = carritoLS.reduce((acumulador,pl)=> acumulador + pl.valorNeto , 0)
        
    })

   
        
    
    
}

bajarCarrito()


function pagar() {
    let btnComprar = document.createElement("div")
        btnComprar.innerHTML = `<button type="button" class="btn btn-danger">Pagar</button>`
    divComprar.appendChild(btnComprar)

    btnComprar.addEventListener("click", ()=> {
        formu.className = "col-5 div__form mt-5"
    })    

}
pagar()

function volver() {
    let btnVolver = document.createElement("div")
        btnVolver.innerHTML = `<button type="button" class="btn btn-danger">Volver</button>`
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

submit.addEventListener("click", (e)=> {
    e.preventDefault()
    console.log("Detención de evento submit")
    location.href = "gracias.html"
    
})


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

