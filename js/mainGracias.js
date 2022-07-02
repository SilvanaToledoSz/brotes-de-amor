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



//Aplicación de galería Luxon:

function fecha(){
    const hoy = DateTime.now()
    console.log( hoy.toString() )
    fechaHoy.innerHTML = `Fecha de compra: ${hoy.toLocaleString(DateTime.DATE_SHORT)}` 
    const suma = hoy.plus({ days: 2 })
    fechaEntrega.innerHTML = `Fecha de entrega: ${suma.toLocaleString(DateTime.DATE_SHORT)}` 
}
fecha()