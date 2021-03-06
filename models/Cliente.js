class Cliente {
    constructor(idCliente, nombre, apellidoPaterno, apellidoMaterno, direccion, cp, correo, password) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.direccion = direccion;
        this.cp = cp;
        this.correo = correo;
        this.password = password;
    }
}

module.exports = Cliente;