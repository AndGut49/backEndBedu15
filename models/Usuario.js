class Usuario{ //Usuari
	constructor(userId, nombre, apellidoPaterno, apellidoMaterno, foto, edad, sexo, direccion, email, password, telefono){
        tbis.userId = userId; //id unico de usuario
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
	agregarUsuario(){
		// función para guardar un nuevo registro en la base de datos.
	}
    modificarUsuario(){

    }
    consultarUsuarios(){

    }
    eliminarUsuario(){

    }
    login(){
        
    }
}

module.exports = Usuario;