class Cliente {
    constructor(idCliente, nombre, apellidoPaterno, apellidoMaterno, direccion, cp, email, password) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.direccion = direccion;
        this.cp = cp;
        this.email = email;
        this.password = password;
    }
}

module.exports = Cliente;