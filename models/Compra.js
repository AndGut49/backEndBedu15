// Compra.js
/** Clase que representa una solicitud de compra de postres */
class Compra {
    constructor(id, idCliente, idPostre, cantidad, formaPago, fechaCompra) {
        this.id = id;
        this.idCliente = idCliente;
        this.idPostre = idPostre;
        this.cantidad = cantidad;
        this.formaPago = formaPago;
        this.fechaCompra = fechaCompra;
    }
}
module.exports = Compra;
