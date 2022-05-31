class Planta {
    constructor(nombre, valorBruto, alto, ancho, peso, stock) {
        this.nombre = nombre.toUpperCase();
        this.valorBruto = parseFloat(valorBruto);
        this.alto = parseFloat(alto);
        this.ancho = parseFloat(ancho);
        this.peso = parseFloat(peso);
        this.stock = parseInt(stock);
        this.vendido = false;
        
    }

    // Arrooja el valor de IVA del producto

    valorIva () {
        return this.valorBruto * 0,21;
    }

    mostrarIva () {
        alert("El valor IVA del producto " + this.nombre + " es " + this.valorIva ())
    }

    // Arroja el valor del producto con el IVA incluido

    sumaIva () {
        return this.valorBruto * 1.21;
    }

    mostrarPrecio () {
        alert("El valor de venta del producto " + this.nombre + " es " + this.precioVenta)
    }    
    
}