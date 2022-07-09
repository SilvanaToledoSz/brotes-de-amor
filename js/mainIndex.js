//Función para mostrar la hora en tiempo real:
setInterval(() => {    
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString()
    }, 1000);


//Función para que se vea el spinner:
function spinnerH() {
    spinnerHome.innerHTML = `
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`
    spinnerHome.className = "col-7 text-center"
}
spinnerH()

//Configuración de setTimeout para dar tiempo al servidor a responder:
setTimeout(() => {    
    mostrarCards()     
}, 500);


// Muestra productos en el HTML
async function mostrarCards() {

    //Llamo al archivo .json local donde está cargada la base de datos, aplicando una promesa:
    await fetch(bd) 
    .then( (respuesta) => respuesta.json())
    .then( (base) => {        
        base.forEach (el => {
        let div = document.createElement("div")
        div.className = "col"
        let {imgs, nombre, medida, valorNeto, id} = el
        div.innerHTML = `<div class="card animate__animated animate__fadeInUp">                    
                            <img src="${imgs}" class="card-img-top div__img--producto">
                            <div class="card-body">
                                <h5 class="div__h5--prod">${nombre}</h5>                                
                                <p class="div__p--prod">Medida: ${medida}</p>
                                <p class="div__p--prod">Precio: $${valorNeto}</p>
                                <div class="div__contenedorCompra">
                                    <button id="boton${id}" type="button" class="btn btn-danger btn-sm div__btnCarrito" style="background-color: #D90429;"><i class="fa-solid fa-cart-shopping text-light"></i></button>
                                </div> 
                                
                            </div>
                        </div>`
            listadoPlantas.appendChild(div)

            //Vincula el botón de carrito con la carga de productos al array:
            let btnCarrito = document.getElementById(`boton${el.id}`)
            btnCarrito.addEventListener("click", ()=> {
                agregarCarrito(el.id)
                notifCarrito(el.nombre)            
            }) 
        })  
    })
    .catch ( (error)=> { 
        listadoPlantas.className = "text-center mt-2 mb-1"
        listadoPlantas.innerHTML = `<div>
                                    <i class="fa-solid fa-heart-crack"></i>
                                    <p class="text-center fs-6">El sitio está atravesando unos inconvenientes, <br>por favor, intentalo más tarde.</p>
                                    </div>`
    })
    .finally ( ()=> {
        spinnerHome.innerHTML = ""
        spinnerHome.className = "spinnerNO"
    })
}


function btnComprar() {
    let btnComprarHome = document.getElementById("btnComprarHome")      

        btnComprarHome.addEventListener("click", ()=> {
            location.href = "comprar.html"            
        }) 
}
btnComprar()

//Función que carga el array Carrito. También sube la info a LocalStorage:

async function agregarCarrito(id) {    
    await fetch(bd) 
    .then( (respuesta) => respuesta.json())
    .then( (base) => {
        let almacenarProd = base.find(pl => pl.id === id)        
        carrito.push(almacenarProd)
        localStorage.setItem("subirCarrito", JSON.stringify(carrito))   
        carritoHeader.innerHTML = carrito.length 
    }) 
}

//Incorporación de librería toastify:

function notifCarrito(prod) {
    Toastify({
        text: `Agregaste ${prod}`,
        duration: 1000,
        gravity: 'bottom',
        className: 'clase_toast',
        style: {
            background: "linear-gradient(to right, #D90429, #BA0323)",
          }
    }).showToast();
}






