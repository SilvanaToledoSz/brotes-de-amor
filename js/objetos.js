class Planta {
    constructor(id, nombre, valorNeto, medida, stock, precioUnidades, imgs, descripcion) {
        this.id = parseInt(id)
        this.nombre = nombre.toUpperCase();
        this.valorNeto = parseFloat(valorNeto)
        this.medida = medida;
        this.stock = parseInt(stock);
        this.vendido = false;       
        this.precioUnidades = parseInt(precioUnidades);
        this.imgs = imgs
        this.descripcion = descripcion        
    }    
    
    productoVendido() {
        this.vendido = true;
    }

}









