# BackEndFundamentals Equipo 15👨‍💻👩‍💻
Proyecto de Backend Fundamentals Equipo 15

# Integrantes 😎
* Andrea Gutierrez Hernandez
* Pamela Navarro Herrera
* Rafael Alejandro Santos Trujillo
* Victos Lascares Gallardo

# Tematica del proyecto 📋
Tienda de Postres, queremos que los clientes consulten la información de diversos postres como precio, categoria, sabor, tamaño o disponibilidad con la que se cuenta. También queremos poder consultar los datos de las compras que se han realizado.
# Historias de usuario 🧑👧
1. Como usuario de tiendaPostres, quiero ver todos los postres que manejan para poder conocer su precio.
2. Como usuario de tiendaPostres, quiero ver todos los tamaños de un postre para poder elegir el mejor para cubrir mis necesidades.
3. Como usuario de tiendaPostres, quiero ver todas las categorías de los postres para ver que se ofrece en la tienda.
4. Cómo usuario de tiendaPostres, quiero buscar postres por nombre.
5. Como administrador de tiendaPostres, quiero agregar nuevos postres con sus precios, para que los clientes los puedan consultar.
6. Cómo administrador de tiendaPostres, quiero modificar postres (precios, stock, tamaños).
7. Cómo administrador de tiendaPostres, quiero poder eliminar postres.
8. Cómo administrador de tiendaPostres, quiero poder consultar todos los postres disponibles aplicando diferentes filtros (tamaño, precio etc..)

# Requerimientos y estructura del proyecto 📈
 
## ¿Qué espero que haga el proyecto? 📲💻
Esperamos que se pueda consultar la información de diferentes entidades como compras, clientes, usuarios, postres, sabores, categorias y tamaños. Esto es para simular una tienda de postres en la que se puede consultar los precios y existencia de los mismos.

## ¿Qué tipo de usuario tendrá nuestro sistema? 🕵️‍♀️🕵️‍♂️
Nuestro sistema tendrá dos tipos de usuarios:
- Cliente
- Usuario administrador

## ¿Qué acciones puede realizar cada usuario? 🙋‍♂️🙋‍♀️
- Cliente: Podrá consultar precios y existencia de los postres.
- Usuario administrador: Podrá consultar, añadir, modificar y eliminar postres, sabores, categorias y tamaños.

## ¿Qué información se necesita? 💾
Se necesita la información de todos los postres que se manejan:
- Categoría de postre
- Nombre del postre
- Sabor del postre
- Tamaño
- Precios de acuerdo al tamaño
- Disponibilidad (stock)

## ¿Cuáles son las principales entidades? 📌
Cliente
Categoria (categoria del postre)
Postre 
Sabor (sabor del postre)
Tamanio (Tamaño del postre)
Compra (Compras realizadas)
Usuario (Usuario administrador)

## ¿Qué características tiene cada entidad? 📊
- Cliente: Se refiere al usuario que quiere consultar los precios y existencia de postres correspondientes a su ciudad de procedencia. (idCliente, nombre, apellidoPaterno, apellidoMaterno, direccion, email, password)
- Categoría de postre: Se refiere al tipo de postre (Pasteles, Gelatinas, Pays, Postres, Panqués, Productos de temporada). (idCategoria, nombreCategoria)
- Postre: Se refiere a todos los postres. (idPostre,idCategoria, idSabor, idTamanio, nombre, precio, stock)
- Sabor: Se refiere al sabor del postre. (idSabor, nombreSabor)
- Tamanio: Se refiere a los tamaños en que se manejan los postres: único, individual, mini, chico y grande (idTamanio, nombreTamanio). 
- Compra: Una solicitud puede ser creada por un Cliente para adquirir alguno de los productos que haya subido un administrador (idCompra, idCliente, idPostre, cantidad, formaPago, fechaCompra).
- Usuario: Un administrador puede crear, modificar y eliminar información de productos, tamaños y precios que verá el usuario. 

## ¿Qué funcionalidades tiene cada entidad?📂
- Cliente: crearCliente, consultarClientes, consultarCliente, modificarCliente, eliminarCliente, consultarClientesLimite, consultarClientesPorAtributos consultarClientesPorCampos
- Categoría: crearCategoria, consultarCategorias, consultarCategoria, modificarCategoria, eliminarCategoria, consultarCategoriasLimite, consultarCategoriasPorNombre,
- Postre: crearPostre, consultarPostres, consultarPostre, modificarPostre, eliminarPostre, consultarPostresLimite, consultarPostresPorAtributos, consultarPostresPorCampos
- Sabor: crearSabor, consultarSabores, consultarSabor, modificarSabor, eliminarSabor, consultarSaboresLimite, consultarSaboresPorNombre
- Tamanio: crearTamanio, consultarTamanios, consultarTamanio, modificarTamanio, eliminarTamanio, consultarTamaniosLimite, consultarTamaniosPorNombre,
- Usuario administrador: crearUsuario, consultarUsuarios, consultarUsuario, modificarUsuario, eliminarUsuario, consultarUsuariosLimite, consultarUsuariosPorAtributos,consultarUsuariosPorCampos
- Compra: crearCompra, consultarCompras, consultarCompra, modificarCompra, eliminarCompra, consultarComprasLimite, consultarComprasPorAtributos, consultarComprasPorCampos

## Modelo E-R
![ScreenShot](https://photos.google.com/share/AF1QipPTFixm5Tk1AeUPi8Z2JSHM3e730r02soWDbxEDyN4D7f8uuwtnZUSVBV2znBxsdA/photo/AF1QipNAWryfLlK9-SIF1HJZjFtPMUeK5nT6YSC2yJmY?key=MHFjcjA1Q1RqZHBLUFJfdm9kaklHbTVCRWZLVy1B)
 
## Video explicativo 🎥🎞️
https://youtu.be/G4o7SDiKvr4

## API Documentada en Swagger ✔
https://app.swaggerhub.com/apis/BEDU-equipo15/tiendaPostres/1.0.0

## Link a Heroku de la API
https://tiendapostresequipo15.herokuapp.com/v1