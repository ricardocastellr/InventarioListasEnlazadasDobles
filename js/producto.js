class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.next = null;
    }
    informacionProductoHTML(){
        return document.getElementById("listado").innerHTML = 
        `<h3>CÓDIGO: ${this.codigo}.</h3>
        <h4>Nombre: ${this.nombre}.<br>
        Cantidad: ${this.cantidad}.<br>
        Costo: $${this.costo}.</h4>
        <p>-----------------------------------------</p>`;
    }
    informacionProducto(){
        return `${this.codigo} - ${this.nombre} - ${this.cantidad} - ${this.costo}`
    }
}
