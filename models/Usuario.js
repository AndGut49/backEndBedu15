class Usuario{ //Usuario
	constructor(idUsuario, nombre, apellidoPaterno, apellidoMaterno, foto, edad, sexo, direccion, email, password, telefono){
        this.idUsuario = idUsuario; //id unico de usuario
		this.nombre = nombre; // nombre del usuario
        this.apellidoPaterno = apellidoPaterno; //apellido paterno del usuario
        this.apellidoMaterno = apellidoMaterno; //apellido materno del usuario
        this.foto = foto; //foto del usuario
		this.edad = edad; // edad del usuario
		this.sexo = sexo; // sexo del usuario
		this.direccion = direccion; // direccion del usuario
        this.email = email; //email del usuario
        this.password = password; //contraseña para logearse
        this.telefono = telefono; //telefono
	}
}

module.exports = Usuario;