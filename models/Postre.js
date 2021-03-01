/*Clase Postre

Creando clase tiene un id, nombre, precio, stock, 
calificcion (del 1 al 5)*/

class Postre {
    constructor(id, nombre, precio, stock, calificacion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.calificacion = calificacion;
    }
}

module.exports = Postre;