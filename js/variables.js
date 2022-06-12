
let usuario = prompt("Hola ¿cómo te llamas?")


// Condicional si coloca el nombre
if ((usuario !="") && (usuario != null)) {
    

            // Consultamos cuál producto quiere       

            function buscarProducto() {
                //debugger       
                let productoElegido = prompt("¿Cuál producto del catálogo te gustó") 

                if ((productoElegido !="") && (productoElegido != null)) {
                    

                    // Implementación de método find sobre el array plantas

                    let resultado = plantas.find (p => p.nombre === productoElegido.toUpperCase())
                        console.table(resultado)


                        // Confirmamos si tenemos stock

                        if (resultado.stock > 0) {

                            alert("Quedan disponibles "+ resultado.stock +" unidades. \nEl valor sin IVA es: " + resultado.valorBruto)

                            // Aplico el valor IVA:

                            resultado.valorIva()

                            console.log(resultado.valorBruto)

                            alert("El precio con IVA incluido es "+ resultado.valorBruto)

                                // Pregunto cuántas unidades va a comprar

                                let productoUnidades = parseInt(prompt("¿Cuántas unidades querés comprar?"))

                                    // Chequeo que no pidan más unidades de las que hay disponibles

                                    if ((productoUnidades <= resultado.stock)) {

                                        function nroUnidades() {
                                            resultado.precioUnidades = parseInt(resultado.valorBruto * productoUnidades)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${productoUnidades} unidades es $ ${resultado.precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            console.log(avanzarCompra)
                                            

                                            if (avanzarCompra == true) {


                                                //Registro que el producto fue vendido
                                                resultado.productoVendido()

                                                console.log(resultado.vendido)


                                                //Cargo el producto vendido al carrito

                                                // Implementación de método filter sobre el array plantas

                                                function agregarCarrito() {

                                                    const carritoFinal = plantas.filter(p => p.vendido == true)
                                                    console.table(carritoFinal)

                                                    // Pregunto si quiere comprar algo más
                                                    let comprar = confirm(usuario + " ¿querés comprar algo más?" )

                                                    if (comprar == false) {
                                                        
                                                        // Implementación de método reduce sobre el array plantas

                                                        function sumarTodo() {
                                                            let totalFinal = carritoFinal.reduce( (totalizar, p) => totalizar + parseInt(p.precioUnidades), 0)
                                                            console.log(totalFinal)

                                                            // CIERRE DE COMPRA

                                                            alert(`CONFIRMACIÓN DE COMPRA: \nNombre: ${usuario} \nImporte Final: $ ${totalFinal} \n\n¡Muchas gracias, vuelva prontos!`)
                                                            
                                                        } 
                                                        
                                                        sumarTodo()

                                                        

                                                    } else {
                                                        buscarProducto() 
                                                    }
                                                }
                                                agregarCarrito()
                                            }
                                    } else {
                                        alert("No contamos con esa cantidad")
                                    }
                        } else {
                            alert("No quedan disponibles unidades. Muchas gracias por tu interés.")
                        }   
                }  else {
                    alert("Ingrese un dato válido")
                }
            } 
            buscarProducto()     
} else {
    alert("Si no ingresás el nombre, no podrás comprar en esta web. Actualizá la página si querés volver a intentarlo.")
}

