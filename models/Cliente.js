class Cliente {
    constructor(id, nombre, apellido, direccion, cp, correo, pago) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.cp = cp;
        this.correo = correo;
        this.pago = pago; //Considerar que este atributo vaya en la clase compra.
    }
}

module.exports = Cliente;