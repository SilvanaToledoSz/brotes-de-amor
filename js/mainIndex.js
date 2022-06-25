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
            agregarCarrito(el.id)
            
        })

        let btnComprarHome = document.getElementById("btnComprarHome")      

        btnComprarHome.addEventListener("click", ()=> {
            location.href = "comprar.html"
            
        }) 

        

    })
}

mostrarCards()

function agregarCarrito(id) {    
    let almacenarProd = plantas.find(pl => pl.id === id)        
    carrito.push(almacenarProd)
    localStorage.setItem("subirCarrito", JSON.stringify(carrito))   
    carritoHeader.innerHTML = carrito.length  
}





/* function recuperoLS() {
    carrito = JSON.parse(localStorage.getItem("subirCarrito"))
}
recuperoLS()
 */

