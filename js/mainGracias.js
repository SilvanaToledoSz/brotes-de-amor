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