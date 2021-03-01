/*Clase Postre

Creando clase tiene un id, nombre, precio, stock, 
calificcion (del 1 al 5)*/

//En este modelo harían falta los atributos de tamaño y sabor para poder incluir el precio. Se incluyen como comentario.
class Postre {
    constructor(id, nombre, precio, stock, calificacion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.calificacion = calificacion;
        //this.tamaño = tamaño;
        //this.sabor = sabor;
    }
}

module.exports = Postre;