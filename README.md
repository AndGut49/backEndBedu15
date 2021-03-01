# BackEndFundamentals Equipo 15👨‍💻👩‍💻
Proyecto de Backend Fundamentals Equipo 15

# Integrantes 😎
* Andrea Gutierrez
* Pamela Navarro
* Rafael Santos
* Victos Lascares

# Tematica del proyecto 📋
Tienda de Postres en una ciudad
Queremos que los clientes consulten la información de diversos postres como precio o disponibilidad que ofrece una tienda en cierta ciudad.

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
Esperamos que los clientes de una Tienda de Postres puedan consultar los precios y existencia de los postres que se ofrecen.

## ¿Qué tipo de usuario tendrá nuestro sistema? 🕵️‍♀️🕵️‍♂️
Nuestro sistema tendrá dos tipos de usuarios:
- Cliente
- Usuario administrador

## ¿Qué acciones puede realizar cada usuario? 🙋‍♂️🙋‍♀️
- Cliente: Podrá consultar precios y existencia de los postres.
- Usuario administrador: Podrá añadir, modificar y eliminar precios y existencias de todos los productos.

## ¿Qué información se necesita? 💾
Se necesita la información de todos los productos que se manejan:
- Categoría de postre
- Nombre del postre
- Tamaño
- Precios de acuerdo al tamaño
- Disponibilidad (stock)

## ¿Cuáles son las principales entidades? 📌
Cliente
Categoría de postre
Postre
Tamaño
Solicitud de Compra
Usuario administrador

## ¿Qué características tiene cada entidad? 📊
- Cliente: Se refiere al usuario que quiere consultar los precios y existencia de postres correspondientes a su ciudad de procedencia. (id, nombre, apellido, correo, contraseña)
- Categoría de postre: Se refiere al tipo de postre (Pasteles, Gelatinas, Pays, Postres, Panqués, Productos de temporada). (id, nombreCategoria)
- Postre: Se refiere a todos los postres. (id, nombrePostre, precio, stock, calificacion)
- Tamaño: Se refiere a los tamaños en que se manejan los postres: único, individual, mini, chico y grande (id, nombreTamaño). 
- Solicitud de Compra: Una solicitud puede ser creada por un Cliente para adquirir alguno de los productos que haya subido un administrador.
- Usuario administrador: Un administrador puede crear, modificar y eliminar información de productos, tamaños y precios que verá el usuario. 

## ¿Qué funcionalidades tiene cada entidad?📂
- Cliente: agregarCliente, actualizarDatosCliente, eliminarCliente y consultarCliente
- Categoría: agregarCategoria, actualizarCategoria, modificarCategoria y eliminarCategoria
- Postre: agregarPostre, modificarPostre, eliminarPostre, obtenerPostre, obtenerPostres y listaPostres
- Tamaño: agregarTamaño, modificarTamaño, eliminarTamaño, obtenerTamaños 
- Usuario administrador: agregarUsuario, modificarUsuario, consultarUsuarios, eliminarUsuario y login
- Compra: crearCompra, modificarCompra, obtenerCompras y eliminarCompra
 

