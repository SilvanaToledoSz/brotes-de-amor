debugger

let usuario = prompt("Hola ¿cómo te llamas?")


// Condicional si coloca el nombre
if ((usuario !="") && (usuario != null)) {

    // Consultamos si quiere comprar
    let comprar = confirm("Hola " + usuario + " querés hacer una compra?" )

        // Condicional si quiere comprar
        if (comprar == true) {

            // Consultamos cuál producto quiere            
            let productoElegido = prompt("¿Cuál producto del catálogo te gustó")                

                // Valido que el nombre ingresado esté entre los productos ofrecidos
                if ((productoElegido.toUpperCase() == planta1.nombre) || (productoElegido.toUpperCase() == planta2.nombre) || (productoElegido.toUpperCase() == planta3.nombre) || (productoElegido.toUpperCase() == planta4.nombre) || (productoElegido.toUpperCase() == planta5.nombre) || (productoElegido.toUpperCase() == planta6.nombre)) {

                    // Le confirmo si tenemos stock
                    switch (productoElegido.toUpperCase()) {

                        case planta1.nombre:
                            
                            if (planta1.stock >= 1) {
                                alert("Nos quedan " + planta1.stock + " unidades . Podés avanzar con la compra")

                                //Informo el precio sin iva
                                alert(`El precio sin IVA es ${planta1.valorBruto}`)
                                
                                //Creo función para calcular valor IVA
                                
                                let precioIva = 0
                                
                                function valorIva() {
                                    precioIva = parseInt(planta1.valorBruto * 1.21)
                                }

                                //Invoco la función
                                valorIva()
                                
                                //Informo el valor con IVA
                                alert(`El precio con IVA incluido es ${precioIva}`)

                                //Consulto cuántas unidades quiere
                                let cantidad = parseInt(prompt(`¿Cuántas unidades querés de ${productoElegido}?`))

                                    //Chequeo que haya suficiente stock

                                    if (cantidad <= planta1.stock) {
                                        

                                        //Creo función para multiplicar valor por unidades
                                        let precioUnidades = 0
                                
                                        function nroUnidades() {
                                            precioUnidades = parseInt(precioIva * cantidad)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${cantidad} unidades es ${precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            if (avanzarCompra == true) {


                                                // Consulto forma de pago

                                                formaPago = prompt(`¡Excelente ${usuario}. Nuestras formas de pago son: Efectivo (sin interés) o Mercado Pago (con interés del 35%) ¿Cuál prefieres?`)

                                                switch (formaPago.toUpperCase()) {


                                                    case "EFECTIVO":
                                                    
                                                    alert(`¡Excelente ${usuario}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDom = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDom == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioUnidades, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioUnidades, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioUnidades}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }

                                                    break;
                                                    
                                                case "MERCADO PAGO":

                                                    let precioMP = 0

                                                    // Creo la funcion para calcular el costo por Mercado Pago
                                                    function costoMP() {
                                                        precioMP = parseFloat(precioUnidades * porcentajeMP)
                                                    }

                                                    //Invoco la función
                                                    costoMP()

                                                    alert(`El valor final con el valor de Mercado Pago incluido es: ${precioMP}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDomMP = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDomMP == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioMP, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioMP, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioMP}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }
                                                    
                                                    break;

                                                    default:
                                                    alert("No contamos con esa forma de pago.")
                                                    break;

                                                }
                                            
                                            } else {
                                                alert("No hay problema. ¡Te esperamos otro día!")
                                            }
                                    } else {
                                        alert("No disponemos de esa cantidad. Muchas gracias vuelva prontos.")
                                    }
                            } else if (planta1.stock == 0) {
                                alert("Nos queda " + planta1.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }

                            break;

                        case planta2.nombre:
                            
                            if (planta2.stock >= 1) {
                                alert("Nos quedan " + planta2.stock + " unidades . Podés avanzar con la compra")

                                //Informo el precio sin iva
                                alert(`El precio sin IVA es ${planta2.valorBruto}`)
                                
                                //Creo función para calcular valor IVA
                                
                                let precioIva = 0
                                
                                function valorIva() {
                                    precioIva = parseInt(planta2.valorBruto * 1.21)
                                }

                                //Invoco la función
                                valorIva()
                                
                                //Informo el valor con IVA
                                alert(`El precio con IVA incluido es ${precioIva}`)

                                //Consulto cuántas unidades quiere
                                let cantidad = parseInt(prompt(`¿Cuántas unidades querés de ${productoElegido}?`))

                                    //Chequeo que haya suficiente stock

                                    if (cantidad <= planta2.stock) {
                                        

                                        //Creo función para multiplicar valor por unidades
                                        let precioUnidades = 0
                                
                                        function nroUnidades() {
                                            precioUnidades = parseInt(precioIva * cantidad)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${cantidad} unidades es ${precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            if (avanzarCompra == true) {


                                                // Consulto forma de pago

                                                formaPago = prompt(`¡Excelente ${usuario}. Nuestras formas de pago son: Efectivo (sin interés) o Mercado Pago (con interés del 35%) ¿Cuál prefieres?`)

                                                switch (formaPago.toUpperCase()) {


                                                    case "EFECTIVO":
                                                    
                                                    alert(`¡Excelente ${usuario}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDom = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDom == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioUnidades, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioUnidades, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioUnidades}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }

                                                    break;
                                                    
                                                case "MERCADO PAGO":

                                                    let precioMP = 0

                                                    // Creo la funcion para calcular el costo por Mercado Pago
                                                    function costoMP() {
                                                        precioMP = parseFloat(precioUnidades * porcentajeMP)
                                                    }

                                                    //Invoco la función
                                                    costoMP()

                                                    alert(`El valor final con el valor de Mercado Pago incluido es: ${precioMP}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDomMP = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDomMP == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioMP, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioMP, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioMP}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }
                                                    
                                                    break;

                                                    default:
                                                    alert("No contamos con esa forma de pago.")
                                                    break;

                                                }
                                            
                                            } else {
                                                alert("No hay problema. ¡Te esperamos otro día!")
                                            }
                                    } else {
                                        alert("No disponemos de esa cantidad. Muchas gracias vuelva prontos.")
                                    }
                            } else if (planta2.stock == 0) {
                                alert("Nos queda " + planta2.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            
                            break;
                            
                        case planta3.nombre:
                        
                            if (planta3.stock >= 1) {
                                alert("Nos quedan " + planta3.stock + " unidades . Podés avanzar con la compra")

                                //Informo el precio sin iva
                                alert(`El precio sin IVA es ${planta3.valorBruto}`)
                                
                                //Creo función para calcular valor IVA
                                
                                let precioIva = 0
                                
                                function valorIva() {
                                    precioIva = parseInt(planta3.valorBruto * 1.21)
                                }

                                //Invoco la función
                                valorIva()
                                
                                //Informo el valor con IVA
                                alert(`El precio con IVA incluido es ${precioIva}`)

                                //Consulto cuántas unidades quiere
                                let cantidad = parseInt(prompt(`¿Cuántas unidades querés de ${productoElegido}?`))

                                    //Chequeo que haya suficiente stock

                                    if (cantidad <= planta3.stock) {
                                        

                                        //Creo función para multiplicar valor por unidades
                                        let precioUnidades = 0
                                
                                        function nroUnidades() {
                                            precioUnidades = parseInt(precioIva * cantidad)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${cantidad} unidades es ${precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            if (avanzarCompra == true) {


                                                // Consulto forma de pago

                                                formaPago = prompt(`¡Excelente ${usuario}. Nuestras formas de pago son: Efectivo (sin interés) o Mercado Pago (con interés del 35%) ¿Cuál prefieres?`)

                                                switch (formaPago.toUpperCase()) {


                                                    case "EFECTIVO":
                                                    
                                                    alert(`¡Excelente ${usuario}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDom = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDom == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioUnidades, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioUnidades, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioUnidades}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }

                                                    break;
                                                    
                                                case "MERCADO PAGO":

                                                    let precioMP = 0

                                                    // Creo la funcion para calcular el costo por Mercado Pago
                                                    function costoMP() {
                                                        precioMP = parseFloat(precioUnidades * porcentajeMP)
                                                    }

                                                    //Invoco la función
                                                    costoMP()

                                                    alert(`El valor final con el valor de Mercado Pago incluido es: ${precioMP}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDomMP = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDomMP == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioMP, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioMP, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioMP}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }
                                                    
                                                    break;

                                                    default:
                                                    alert("No contamos con esa forma de pago.")
                                                    break;

                                                }
                                            
                                            } else {
                                                alert("No hay problema. ¡Te esperamos otro día!")
                                            }
                                    } else {
                                        alert("No disponemos de esa cantidad. Muchas gracias vuelva prontos.")
                                    }
                            } else if (planta3.stock == 0) {
                                alert("Nos queda " + planta3.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            
                            break;

                        case planta4.nombre:
                    
                            if (planta4.stock >= 1) {
                                alert("Nos quedan " + planta4.stock + " unidades . Podés avanzar con la compra")

                                //Informo el precio sin iva
                                alert(`El precio sin IVA es ${planta4.valorBruto}`)
                                
                                //Creo función para calcular valor IVA
                                
                                let precioIva = 0
                                
                                function valorIva() {
                                    precioIva = parseInt(planta4.valorBruto * 1.21)
                                }

                                //Invoco la función
                                valorIva()
                                
                                //Informo el valor con IVA
                                alert(`El precio con IVA incluido es ${precioIva}`)

                                //Consulto cuántas unidades quiere
                                let cantidad = parseInt(prompt(`¿Cuántas unidades querés de ${productoElegido}?`))

                                    //Chequeo que haya suficiente stock

                                    if (cantidad <= planta4.stock) {
                                        

                                        //Creo función para multiplicar valor por unidades
                                        let precioUnidades = 0
                                
                                        function nroUnidades() {
                                            precioUnidades = parseInt(precioIva * cantidad)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${cantidad} unidades es ${precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            if (avanzarCompra == true) {


                                                // Consulto forma de pago

                                                formaPago = prompt(`¡Excelente ${usuario}. Nuestras formas de pago son: Efectivo (sin interés) o Mercado Pago (con interés del 35%) ¿Cuál prefieres?`)

                                                switch (formaPago.toUpperCase()) {


                                                    case "EFECTIVO":
                                                    
                                                    alert(`¡Excelente ${usuario}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDom = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDom == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioUnidades, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioUnidades, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioUnidades}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }

                                                    break;
                                                    
                                                case "MERCADO PAGO":

                                                    let precioMP = 0

                                                    // Creo la funcion para calcular el costo por Mercado Pago
                                                    function costoMP() {
                                                        precioMP = parseFloat(precioUnidades * porcentajeMP)
                                                    }

                                                    //Invoco la función
                                                    costoMP()

                                                    alert(`El valor final con el valor de Mercado Pago incluido es: ${precioMP}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDomMP = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDomMP == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioMP, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioMP, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioMP}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }
                                                    
                                                    break;

                                                    default:
                                                    alert("No contamos con esa forma de pago.")
                                                    break;

                                                }
                                            
                                            } else {
                                                alert("No hay problema. ¡Te esperamos otro día!")
                                            }
                                    } else {
                                        alert("No disponemos de esa cantidad. Muchas gracias vuelva prontos.")
                                    }
                            } else if (planta4.stock == 0) {
                                alert("Nos queda " + planta4.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            
                            break;

                        case planta5.nombre:
                
                            if (planta5.stock >= 1) {
                                alert("Nos quedan " + planta5.stock + " unidades . Podés avanzar con la compra")

                                //Informo el precio sin iva
                                alert(`El precio sin IVA es ${planta5.valorBruto}`)
                                
                                //Creo función para calcular valor IVA
                                
                                let precioIva = 0
                                
                                function valorIva() {
                                    precioIva = parseInt(planta5.valorBruto * 1.21)
                                }

                                //Invoco la función
                                valorIva()
                                
                                //Informo el valor con IVA
                                alert(`El precio con IVA incluido es ${precioIva}`)

                                //Consulto cuántas unidades quiere
                                let cantidad = parseInt(prompt(`¿Cuántas unidades querés de ${productoElegido}?`))

                                    //Chequeo que haya suficiente stock

                                    if (cantidad <= planta5.stock) {
                                        

                                        //Creo función para multiplicar valor por unidades
                                        let precioUnidades = 0
                                
                                        function nroUnidades() {
                                            precioUnidades = parseInt(precioIva * cantidad)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${cantidad} unidades es ${precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            if (avanzarCompra == true) {


                                                // Consulto forma de pago

                                                formaPago = prompt(`¡Excelente ${usuario}. Nuestras formas de pago son: Efectivo (sin interés) o Mercado Pago (con interés del 35%) ¿Cuál prefieres?`)

                                                switch (formaPago.toUpperCase()) {


                                                    case "EFECTIVO":
                                                    
                                                    alert(`¡Excelente ${usuario}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDom = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDom == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioUnidades, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioUnidades, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioUnidades}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }

                                                    break;
                                                    
                                                case "MERCADO PAGO":

                                                    let precioMP = 0

                                                    // Creo la funcion para calcular el costo por Mercado Pago
                                                    function costoMP() {
                                                        precioMP = parseFloat(precioUnidades * porcentajeMP)
                                                    }

                                                    //Invoco la función
                                                    costoMP()

                                                    alert(`El valor final con el valor de Mercado Pago incluido es: ${precioMP}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDomMP = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDomMP == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioMP, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioMP, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioMP}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }
                                                    
                                                    break;

                                                    default:
                                                    alert("No contamos con esa forma de pago.")
                                                    break;

                                                }
                                            
                                            } else {
                                                alert("No hay problema. ¡Te esperamos otro día!")
                                            }
                                    } else {
                                        alert("No disponemos de esa cantidad. Muchas gracias vuelva prontos.")
                                    }
                            } else if (planta5.stock == 0) {
                                alert("Nos queda " + planta5.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            
                            break;

                        case planta6.nombre:
            
                            if (planta6.stock >= 1) {
                                alert("Nos quedan " + planta6.stock + " unidades . Podés avanzar con la compra")

                                //Informo el precio sin iva
                                alert(`El precio sin IVA es ${planta6.valorBruto}`)
                                
                                //Creo función para calcular valor IVA
                                
                                let precioIva = 0
                                
                                function valorIva() {
                                    precioIva = parseInt(planta6.valorBruto * 1.21)
                                }

                                //Invoco la función
                                valorIva()
                                
                                //Informo el valor con IVA
                                alert(`El precio con IVA incluido es ${precioIva}`)

                                //Consulto cuántas unidades quiere
                                let cantidad = parseInt(prompt(`¿Cuántas unidades querés de ${productoElegido}?`))

                                    //Chequeo que haya suficiente stock

                                    if (cantidad <= planta6.stock) {
                                        

                                        //Creo función para multiplicar valor por unidades
                                        let precioUnidades = 0
                                
                                        function nroUnidades() {
                                            precioUnidades = parseInt(precioIva * cantidad)
                                        }

                                        //Invoco la función
                                        nroUnidades()
                                        
                                        //Informo precio total
                                        alert(`El precio total por ${cantidad} unidades es ${precioUnidades}`)

                                            //Consulto si quiere avanzar con la compra

                                            let avanzarCompra = confirm("¿Confirmás la compra?")  

                                            if (avanzarCompra == true) {


                                                // Consulto forma de pago

                                                formaPago = prompt(`¡Excelente ${usuario}. Nuestras formas de pago son: Efectivo (sin interés) o Mercado Pago (con interés del 35%) ¿Cuál prefieres?`)

                                                switch (formaPago.toUpperCase()) {


                                                    case "EFECTIVO":
                                                    
                                                    alert(`¡Excelente ${usuario}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDom = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDom == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioUnidades, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioUnidades, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioUnidades}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }

                                                    break;
                                                    
                                                case "MERCADO PAGO":

                                                    let precioMP = 0

                                                    // Creo la funcion para calcular el costo por Mercado Pago
                                                    function costoMP() {
                                                        precioMP = parseFloat(precioUnidades * porcentajeMP)
                                                    }

                                                    //Invoco la función
                                                    costoMP()

                                                    alert(`El valor final con el valor de Mercado Pago incluido es: ${precioMP}. Ofrecemos un servicio de envío a domicilio. Se realiza 24 hs habiles posteriores a la compra y su valor es $ ${valorEnvio}`)

                                                    // Consulto si quiere que lo enviemos a domicilio
                                                    
                                                    let envioDomMP = confirm(`¿Quisieras que enviemos tu compra a domicilio?`)
                                                        
                                                        if(envioDomMP == true) {
                                                            
                                                        // Creo la función para sumar envío a domicilio
                                                        const precioFinal = (a,b) => a + b
                                                        
                                                        alert(`El precio final con envío a domicilio incluido es ${precioFinal(precioMP, valorEnvio)}`)

                                                        //Consultamos dirección a al cual hacer el envío

                                                        let direccionEnvio = prompt(`${usuario} por favor, indicanos la dirección a la cual hacer el envío:`)
                                                        

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Envío a domicilio: ${direccionEnvio}
                                                        Precio Final: $ ${precioFinal(precioMP, valorEnvio)}
                                                        
                                                        ¡Muchas  gracias, vuelva prontos!`)
                                                        
                                                    
                                                    } else {
                                                        
                                                        alert(`No hay problema, podés pasar a buscarlo por el local. `)

                                                        // CIERRE DE COMPRA

                                                        alert(`CONFIRMACIÓN DE COMPRA:
                                                        Nombre: ${usuario}
                                                        Producto: ${productoElegido}
                                                        Unidades: ${cantidad}
                                                        Forma de pago: ${formaPago}
                                                        Retira en local: ${direccionLocal}
                                                        Precio Final: $ ${precioMP}
                                                        ¡Muchas  gracias, vuelva prontos!`)

                                                    }
                                                    
                                                    break;

                                                    default:
                                                    alert("No contamos con esa forma de pago.")
                                                    break;

                                                }
                                            
                                            } else {
                                                alert("No hay problema. ¡Te esperamos otro día!")
                                            }
                                    } else {
                                        alert("No disponemos de esa cantidad. Muchas gracias vuelva prontos.")
                                    }
                            } else if (planta6.stock == 0) {
                                alert("Nos queda " + planta6.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            
                            break;

                        default:
                            alert("Se produjo error")
                            break;

                    }
                  
                        
                } else {
                    alert ("no contamos con ese producto")
                }

                    










        } else {
            alert("Tranqui podés seguir mirando")
        } 


} else {
    alert("Si no ingresás el nombre, no podrás comprar en esta web. Actualizá la página si querés volver a intentarlo.")
}

        

/*         if (comprar == true) {
            alert("qué querés comprar")

            

        } else {
            alert("Muchas gracias vuelva prontos")
        }
} else {

} */

/* 
let productoElegido = prompt("Ingresá el nombre del producto que querés comprar") */


/* alert( productoElegido.toUpperCase() ) */

/* if ( productoElegido.toUpperCase() == planta1.nombre ) {
    alert( "hola" )
} else {
    alert ("chau")
}
        
 */
