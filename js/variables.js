debugger

let nombreUsuario = prompt("¡Te damos la bienvenida! ¿Cómo te llamás?")

    // Si completó nombre:

    if ((nombreUsuario =="") || (nombreUsuario == null)) {
        alert("No te preocupes, no es necesario que nos digas tu nombre. Nuestras plantas disponibles el día de hoy son: ")
    }    

    // Si no completó nombre:

    if ((nombreUsuario !="") && (nombreUsuario !=null)) {
        alert("Hola " + nombreUsuario + " nuestras plantas disponibles el día de hoy son: " )
    }



        

