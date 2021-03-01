// Compra.js
/** Clase que representa una solicitud de compra de postres */
class Compra {
    constructor(id, idCliente, categoriaPostre, nombrePostre, tamañoPostre, saborPostre, cantidad, tipoDePago) {
      this.id = id;
      this.idCliente = idCliente;
      this.categoriaPostre = categoriaPostre;
      this.nombrePostre = nombrePostre;
      this.tamañoPostre = tamañoPostre;
      this.saborPostre = saborPostre;
      this.cantidad = cantidad;
      this.tipoDePago = tipoDePago;
    }
  
  }
  
  module.exports = Compra;