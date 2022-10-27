class Inventario{
    constructor(){
        this.primero  = null;
    }

    agregar(producto){
        if(this.buscar(producto.codigo) == null && Number(producto.codigo) > 0){
            if(this.primero == null)
                this.primero = producto;
            else
                this.agregarFinal(producto,this.primero);
            
            return true;
        }else 
            return false;
    }

    agregarFinal(producto,nodo){
        if(nodo.next == null)
            nodo.next = producto;
        else
            this.agregarFinal(producto,nodo.next);
    }

    insertar(posicion, nuevo){
        if(this.buscar(nuevo.codigo) == null && Number(nuevo.codigo) > 0){
            let aux = this.primero;
            if (posicion == 1) { // En caso de ser la primera posición
                this.primero = nuevo;
                this.primero.next = aux;
            } else { // Cualquier otra posición
                let i = 2;
                while (i != posicion) {
                    if (aux.next != null) {
                        aux = aux.next;
                        i++;
                    }else
                        break;   
                }
                if (i == posicion) { // En caso de ser la segunda posición
                    nuevo.next = aux.next;
                    aux.next = nuevo;
                }else // No se ha encontrado ninguna posición donde se pueda colocar el nuevo producto
                    return false;
                
            }
            return true;
        }else
            return false;
    }

    eliminar(codigo){
        if(this.buscar(codigo) == null)
            return false;
        else{ 
            codigo = Number(codigo);
            if(Number(this.primero.codigo) == codigo) // En caso de ser la primera posición
                this.primero = this.primero.next;
            else{                            //Cualquier otra posición.
                let aux = this.primero;
                let temp;
                while(aux.next != null){
                    temp = aux.next;
                    if(Number(temp.codigo) == codigo)
                        aux.next = aux.next.next;
                    else
                        aux = aux.next;
                }
            }    
        }
        return true;
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

    listar(){
        if(this.primero == null){
            return null;
        }else{
            let productos = "";
            let aux = this.primero
            while(aux != null){
                productos += aux.informacionProductoHTML();
                aux = aux.next;
            }
            return productos;
        }
    }

    listarInverso() {
        if(this.primero == null)
            return null;
        else{
            let productos = "";
            productos = this.recorrerInverso(this.primero);
            return productos;
        }
    }
    
      recorrerInverso(nodo){
        if(nodo.next == null)
          return `${nodo.informacionProductoHTML()}` // En caso de solo existir una posición.
    
        return `${this.recorrerInverso(nodo.next)}  ${nodo.informacionProductoHTML()}`
      }
}