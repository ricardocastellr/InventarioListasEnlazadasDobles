class Inventario{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    agregar(nuevo){
        // En caso de que el código sea mayor a 0.
        if(Number(nuevo.codigo) > 0){
            if(!this.primero){ // Si el primero es null
                this.primero = nuevo;
                this.ultimo = nuevo;
            }else{
                // Si el codigo del nuevo es menor al primero.
                if(Number(nuevo.codigo) < Number(this.primero.codigo))
                    this.agregarPrimero(nuevo);
                // Si el codigo del nuevo es mayor al ultimo.
                else if(Number(nuevo.codigo) > Number(this.ultimo.codigo))
                    this.agregarUltimo(nuevo);
                else{
                    let aux = this.primero;
                    /* EJEMPLO
                    aux.codigo = 90
                    aux.next.codigo = 100
                    nuevo.codigo = 99
                    */
                    // Mientras el codigo del siguiente sea menor al codigo del nuevo
                    while(Number(aux.next.codigo) < Number(nuevo.codigo))
                        aux = aux.next;
                
                    /*
                    SE CONVIERTE A 
                    aux.codigo = 90
                    aux.next.codigo = 100
                    nuevo.codigo = 99
                    */
                    nuevo.next = aux.next;
                    nuevo.before = aux;
                    aux.next.before = nuevo;
                    aux.next = nuevo;
                    /*
                    SE CONVIERTE A 
                    aux.codigo = 90
                    aux.next.before.codigo = 90 -> el anterior del siguiente(99)
                    aux.next.codigo = 99
                    aux.next.next.codigo = 100
                    En el caso de más registros le agregas un next más para ver el resultado
                    */
                }
            }
            return true;
        }else
            return false;
    }

    agregarPrimero(nuevo){
        this.primero.before = nuevo;
        nuevo.next = this.primero;
        this.primero = nuevo;
    }
    agregarUltimo(nuevo){
        this.ultimo.next = nuevo;
        nuevo.before = this.ultimo;
        this.ultimo = nuevo;
    }
    listar(){
        let aux = this.primero;
        let lista = "";
        while(aux){
            lista += aux.informacionProductoHTML();
            aux= aux.next;
        }
        return lista;
    }
    
}