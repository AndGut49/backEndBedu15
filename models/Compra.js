// Compra.js
/** Clase que representa una solicitud de compra de postres */
class Compra {
    constructor(idCompra, idCliente, idPostre, cantidad, formaPago, fechaCompra) {
        this.idCompra = idCompra;
        this.idCliente = idCliente;
        this.idPostre = idPostre;
        this.cantidad = cantidad;
        this.formaPago = formaPago;
        this.fechaCompra = fechaCompra;
    }
}
module.exports = Compra;
