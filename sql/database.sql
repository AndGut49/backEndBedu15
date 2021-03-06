--ESTOS SON LOS DATOS DEL POSTWORK
-- CREATE TABLE sabor(idSabor INT PRIMARY KEY NOT NULL, nombreSabor VARCHAR(20) NOT NULL);

-- CREATE TABLE categoria(idCategoria INT PRIMARY KEY NOT NULL, nombreCategoria VARCHAR(20) NOT NULL);

-- CREATE TABLE administrador(idAdministrador INT PRIMARY KEY NOT NULL, username VARCHAR(15) NOT NULL, nombre VARCHAR(15) NOT NULL, apellidoPaterno VARCHAR(20) NOT NULL, apellidoMaterno VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL, password VARCHAR(11) NOT NULL);

-- CREATE TABLE tamanio(idTamanio INT PRIMARY KEY NOT NULL, nombreTamanio VARCHAR (15));

-- CREATE TABLE postre(idPostre INT PRIMARY KEY NOT NULL, idSabor INT NOT NULL, idTamanio INT NOT NULL, idCategoria INT NOT NULL, nombre VARCHAR(30) NOT NULL, precio FLOAT NOT NULL, stock INT NOT NULL, FOREIGN KEY (idSabor) REFERENCES sabor(idSabor), FOREIGN KEY(idTamanio) REFERENCES tamanio(idTamanio), FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria));

-- CREATE TABLE cliente(idCliente INT PRIMARY KEY NOT NULL, nombre VARCHAR(15) NOT NULL, apellidoPaterno VARCHAR(20) NOT NULL, apellidoMaterno VARCHAR(20) NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(11) NOT NULL);

-- CREATE TABLE compra(idCompra INT PRIMARY KEY NOT NULL, idCliente INT NOT NULL, idPostre INT NOT NULL, cantidad INT NOT NULL, formaPago INT, fechaPago DATE, FOREIGN KEY(idCliente) REFERENCES cliente(idCliente), FOREIGN KEY(idPostre) REFERENCES postre(idPostre));

--ESTOS SON LOS DATOS CORREGIDOS:
create database tiendaPostres;
use tiendaPostres;
CREATE TABLE sabor(idSabor INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nombreSabor VARCHAR(20) NOT NULL);
CREATE TABLE categoria(idCategoria INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nombreCategoria VARCHAR(20) NOT NULL);
CREATE TABLE tamanio(idTamanio INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nombreTamanio VARCHAR (15));
CREATE TABLE postre(idPostre INT PRIMARY KEY NOT NULL AUTO_INCREMENT, idSabor INT NOT NULL, idTamanio INT NOT NULL, idCategoria INT NOT NULL, nombre VARCHAR(30) NOT NULL, precio FLOAT NOT NULL, stock INT NOT NULL, FOREIGN KEY (idSabor) REFERENCES sabor(idSabor), FOREIGN KEY(idTamanio) REFERENCES tamanio(idTamanio), FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria));
CREATE TABLE cliente(idCliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nombre VARCHAR(30) NOT NULL, apellidoPaterno VARCHAR(20) NOT NULL, apellidoMaterno VARCHAR(20) NOT NULL, direccion VARCHAR(200) NOT NULL, cp CHAR(5), email VARCHAR(100) NOT NULL, password VARCHAR(11) NOT NULL);
CREATE TABLE compra(idCompra INT PRIMARY KEY NOT NULL AUTO_INCREMENT, idCliente INT NOT NULL, idPostre INT NOT NULL, cantidad INT NOT NULL, formaPago INT, fechaPago DATE, FOREIGN KEY(idCliente) REFERENCES cliente(idCliente), FOREIGN KEY(idPostre) REFERENCES postre(idPostre));
CREATE TABLE usuario(idUsuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nombre VARCHAR(30) NOT NULL, apellidoPaterno VARCHAR(20) NOT NULL, apellidoMaterno VARCHAR(20) NOT NULL, foto VARCHAR(200), edad INT NOT NULL, sexo CHAR (1), direccion VARCHAR(200) NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(11) NOT NULL, telefono VARCHAR (10));
