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

    //Llamo al archivo .json donde está cargada la base de datos, aplicando una promesa:
    await fetch(bd) 
    .then( (respuesta) => respuesta.json())
    .then( (base) => {
        
        filtro()        
        mostrarCardsInterno(base)        
    })
    .catch ( (error)=> { 
        contenidoCatch()

    })
    .finally ( ()=> {
        contenidoFinaly()
    })
}


// Código interno para mostrar cards y reducir código:
function mostrarCardsInterno(id) {
    id.forEach (el => {
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
}

// Función para el botón Comprar del index
function btnComprar() {     
        btnComprarHome.addEventListener("click", ()=> {
            location.href = "comprar.html"            
        }) 
}
btnComprar()

// Función para reducir código de catch:
function contenidoCatch() {
    listadoPlantas.className = "text-center mt-2 mb-1"
    listadoPlantas.innerHTML = `<div>
                                <i class="fa-solid fa-heart-crack"></i>
                                <p class="text-center fs-6">El sitio está atravesando unos inconvenientes, <br>por favor, intentalo más tarde.</p>
                                </div>`
}

// Función para reducir el código de finaly
function contenidoFinaly() {
    spinnerHome.innerHTML = ""
    spinnerHome.className = "spinnerNO"
}

//Función que carga el array Carrito. También sube la info a LocalStorage:
async function agregarCarrito(id) {    
    await fetch(bd) 
    .then( (respuesta) => respuesta.json())
    .then( (base) => {
        let almacenarProd = base.find(pl => pl.id === id)        
        carrito.push(almacenarProd)
        localStorage.setItem("subirCarrito", JSON.stringify(carrito))        
        
        if (carrito.length > 0) {
            btnComprarHome.className = "btn btn-danger btn-sm div__btnComprar"
        }   
        carritoHeader.innerHTML = carrito.length
    })     
}

//Incorporación de librería Toastify:
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

//Filtro para los diferentes tipos de productos:
function filtro() {
    tipoPlantas.forEach( tipo => {
        const btn = document.createElement('button');
        btn.innerHTML = tipo;
        btn.classList.add('btn', 'btn-danger', 'm-2', 'btn-filtro', 'animate__animated', 'animate__fadeInUp')    
        btn.addEventListener('click', ()=> {
            if(tipo === 'Todas') {
                listadoPlantas.innerHTML = ""
                fetch(bd)
                .then((response)=> response.json())
                .then(base => {
                    mostrarCardsInterno(base)
                    })
                    .catch((err) => contenidoCatch())
                    .finally(() => contenidoFinaly())
            } else {
                fetch(bd)
                .then((response)=> response.json())
                .then(base => {
                    const plantFiltrados = base.filter(pl => pl.tipo === tipo)
                    listadoPlantas.innerHTML = ""
                    mostrarCardsInterno(plantFiltrados)
                })
                .catch((err) => contenidoCatch())
                .finally(() => contenidoFinaly())
            }
        })
        document.querySelector('#filtro').appendChild(btn)    
    })
}


