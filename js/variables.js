debugger

let usuario = prompt("Hola ¿cómo te llamas?")


// Condicional si coloca el nombre

if ((usuario !="") && (usuario != null)) {

    // Consultamos si quiere comprar

    let comprar = confirm("hola" + usuario + " querés comprar algo?" )

        // Condicional si quiere comprar

        if (comprar == true) {

            // Consultamos cuál producto quiere
            
            let productoElegido = prompt("¿Cuál producto del catálogo te gustó")                

                // Valido que el nombre ingresado esté entre los productos ofrecidos

                if ((productoElegido.toUpperCase() == planta1.nombre) || (productoElegido.toUpperCase() == planta2.nombre) || (productoElegido.toUpperCase() == planta3.nombre) || (productoElegido.toUpperCase() == planta4.nombre) || (productoElegido.toUpperCase() == planta5.nombre) || (productoElegido.toUpperCase() == planta6.nombre)) {

                    // Le confirmo si tenemos stock

                    switch (productoElegido.toUpperCase()) {

                        case planta1.nombre:
                            
                            if (planta1.stock > 1) {
                                alert("Nos quedan " + planta1.stock + " unidades . Podés avanzar con la compra")

                            } else if (planta1.stock == 1) {
                                alert("Nos queda " + planta1.stock + "  unidad. ¡Estás de suerte!")

                            } else if (planta1.stock == 0) {
                                alert("Nos queda " + planta1.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            break;

                        case planta2.nombre:
                        
                            if (planta2.stock > 1) {
                                alert("Nos quedan " + planta2.stock + " unidades . Podés avanzar con la compra")

                            } else if (planta2.stock == 1) {
                                alert("Nos queda " + planta2.stock + "  unidad. ¡Estás de suerte!")

                            } else if (planta2.stock == 0) {
                                alert("Nos queda " + planta2.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            break;

                        case planta3.nombre:
                        
                            if (planta3.stock > 1) {
                                alert("Nos quedan " + planta3.stock + " unidades . Podés avanzar con la compra")

                            } else if (planta3.stock == 1) {
                                alert("Nos queda " + planta3.stock + "  unidad. ¡Estás de suerte!")

                            } else if (planta3.stock == 0) {
                                alert("Nos queda " + planta3.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            break;

                        case planta4.nombre:
                        
                            if (planta4.stock > 1) {
                                alert("Nos quedan " + planta4.stock + " unidades . Podés avanzar con la compra")

                            } else if (planta4.stock == 1) {
                                alert("Nos queda " + planta4.stock + "  unidad. ¡Estás de suerte!")

                            } else if (planta4.stock == 0) {
                                alert("Nos queda " + planta4.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                        break;

                        case planta5.nombre:
                        
                            if (planta5.stock > 1) {
                                alert("Nos quedan " + planta5.stock + " unidades . Podés avanzar con la compra")

                            } else if (planta5.stock == 1) {
                                alert("Nos queda " + planta5.stock + "  unidad. ¡Estás de suerte!")

                            } else if (planta5.stock == 0) {
                                alert("Nos queda " + planta5.stock + ". No tenemos stock. Muchas gracias vuelva prontos.")

                            }
                            break;

                        case planta6.nombre:
                        
                            if (planta6.stock > 1) {
                                alert("Nos quedan " + planta6.stock + " unidades . Podés avanzar con la compra")

                            } else if (planta6.stock == 1) {
                                alert("Nos queda " + planta6.stock + "  unidad. ¡Estás de suerte!")

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
