const miInv = new Inventario();

//Boton agregar.
const agregar = document.getElementById("btnAgregar");
agregar.addEventListener("click",(e)=>{
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const costo = document.getElementById("costo").value;

    document.getElementById("codigo").value = ``;
    document.getElementById("nombre").value = ``;
    document.getElementById("cantidad").value = ``;
    document.getElementById("costo").value = ``;
    
    const producto = new Producto(codigo, nombre, cantidad, costo);
    if(miInv.agregar(producto))
        document.getElementById("acciones").innerHTML +=
        `<h3>Producto agregado de manera exitosa.</h3>`;
    else
        document.getElementById("acciones").innerHTML +=
        `<h3>El código del producto ya existe en el inventario o no ingresó un código.</h3>`;
    

    e.preventDefault(); //Cancela el evento.
});

//Boton listado.
const listar = document.getElementById("btnListar")
listar.addEventListener("click", (e) => {
    if(miInv.listar())
        document.getElementById("listado").innerHTML = `${miInv.listar()}`;
    else
        document.getElementById("acciones").innerHTML +=
        `<h3>No hay productos en el almacen.</h3>`;

    e.preventDefault(); //Cancela el evento.
});

//Boton listado inverso.
const listarInverso = document.getElementById("btnListarInverso")
listarInverso.addEventListener("click", (e) => {
    if(miInv.listarInverso())
        document.getElementById("listado").innerHTML = `${miInv.listarInverso()}`;
    else
        document.getElementById("acciones").innerHTML +=
        `<h3>No hay productos en el almacen.</h3>`;
        
    e.preventDefault(); //Cancela el evento.
});

//Boton eliminar.
const eliminar = document.getElementById("btnEliminar")
eliminar.addEventListener("click", (e) => {
    const producto = miInv.eliminar(document.getElementById("delCodigo").value);
    document.getElementById("delCodigo").value = ``;
    if(producto == true){
        document.getElementById("acciones").innerHTML +=
        `<h3>El producto se eliminó con exito.</h3>`;
        document.getElementById("listado").innerHTML = ``;
    }
    else{
        document.getElementById("acciones").innerHTML +=
        `<h3>El producto que desea eliminar no existe.</h3>`;
        document.getElementById("listado").innerHTML = ``;
    }


    e.preventDefault(); //Cancela el evento.
});

//Boton buscar.
const buscar = document.getElementById("btnBuscar")
buscar.addEventListener("click", (e) => {
    const producto = miInv.buscar(document.getElementById("busCodigo").value);
    document.getElementById("busCodigo").value = ``;
    if(producto != null){
        document.getElementById("acciones").innerHTML += 
        `<h3>El producto se encontró con exito.</h3>`;
        return `${producto.informacionProductoHTML()}`;
    }
    else{
        document.getElementById("acciones").innerHTML += 
        `<h3>El producto que desea buscar no existe.</h3>`;
        document.getElementById("listado").innerHTML = ``;
    }
    e.preventDefault(); //Cancela el evento.
});