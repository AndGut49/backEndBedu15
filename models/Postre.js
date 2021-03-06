/*Clase Postre*/

class Postre {
    constructor(idPostre,idSaborPostre, idCategoria, idTamanio, nombre, precio, stock) {
        this.idPostre = idPostre;
        this.idSaborPostre = idSaborPostre;
        this.idCategoria = idCategoria;
        this.idTamanio = idTamanio;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

module.exports = Postre;