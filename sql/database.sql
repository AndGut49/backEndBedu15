CREATE TABLE sabor(idSabor INT PRIMARY KEY NOT NULL, nombreSabor VARCHAR(20) NOT NULL);

CREATE TABLE categoria(idCategoria INT PRIMARY KEY NOT NULL, nombreCategoria VARCHAR(20) NOT NULL);

CREATE TABLE administrador(idAdministrador INT PRIMARY KEY NOT NULL, username VARCHAR(15) NOT NULL, nombre VARCHAR(15) NOT NULL, apellidoPaterno VARCHAR(20) NOT NULL, apellidoMaterno VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL, password VARCHAR(11) NOT NULL);

CREATE TABLE tamanio(idTamanio INT PRIMARY KEY NOT NULL, nombreTamanio VARCHAR (15));

CREATE TABLE postre(idPostre INT PRIMARY KEY NOT NULL, idSabor INT NOT NULL, idTamanio INT NOT NULL, idCategoria INT NOT NULL, precio FLOAT NOT NULL, stock INT NOT NULL, FOREIGN KEY (idSabor) REFERENCES sabor(idSabor), FOREIGN KEY(idTamanio) REFERENCES tamanio(idTamanio), FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria));

CREATE TABLE cliente(idCliente INT PRIMARY KEY NOT NULL, username VARCHAR(15) NOT NULL, nombre VARCHAR(15) NOT NULL, apellidoPaterno VARCHAR(20) NOT NULL, apellidoMaterno VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL, password VARCHAR(11) NOT NULL);

CREATE TABLE compra(idCompra INT PRIMARY KEY NOT NULL, idCliente INT NOT NULL, idPostre INT NOT NULL, cantidad INT NOT NULL, formaPago INT, fechaPago DATE, FOREIGN KEY(idCliente) REFERENCES cliente(idCliente), FOREIGN KEY(idPostre) REFERENCES postre(idPostre));