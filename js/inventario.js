class Inventario{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    agregar(nuevo){
        // En caso de que no exista el código y el código sea mayor a 0.
        if(this.buscar(Number(nuevo.codigo)) == null && Number(nuevo.codigo) > 0){
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

    listarInverso(){
        let aux = this.ultimo;
        let lista = "";
        while(aux){
            lista += aux.informacionProductoHTML();
            aux = aux.before;
        }
        return lista;
    }

    buscar(codigo){
        let aux = this.primero;
        while(aux != null){
            if(Number(aux.codigo) == Number(codigo))
                return aux;
            else 
                aux = aux.next;
        }
        return null;
    }

    eliminar(codigo){
        codigo = Number(codigo);
        if(this.buscar(codigo)==null){
            return false;
        }else{
            let aux = this.primero;
            if(this.primero.codigo == codigo)
                this.eliminarPrimero();
            else if(this.ultimo.codigo == codigo)
                this.eliminarUltimo();
            else{
                while(aux.next.codigo != codigo)
                    aux=aux.next;
                    aux.next = aux.next.next;
                    aux.next.anterior = aux;
            }
            return true;
        }
    }

    eliminarPrimero(){
        let aux = this.primero;
        if(this.primero.before){
            this.primero.before = null;
        }else if(this.ultimo == aux){
            this.ultimo = null;
        }else{
            this.primero = aux.next;
            this.primero.before = null;
        }
        this.primero = aux.next;
    }

    eliminarUltimo(){
        this.ultimo.before.next = null;
        this.ultimo = this.ultimo.before;
    }
}
