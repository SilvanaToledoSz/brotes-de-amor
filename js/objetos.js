class Planta {
    constructor(nombre, valorBruto, alto, ancho, peso, stock, precioUnidades) {
        this.nombre = nombre.toUpperCase();
        this.valorBruto = parseFloat(valorBruto);
        this.alto = parseFloat(alto);
        this.ancho = parseFloat(ancho);
        this.peso = parseFloat(peso);
        this.stock = parseInt(stock);
        this.vendido = false;       
        this.precioUnidades = parseInt(precioUnidades);
    }    

    valorIva() {
        this.valorBruto = parseInt(this.valorBruto * 1.21)
    }   
    productoVendido() {
        this.vendido = true;
    }

}









