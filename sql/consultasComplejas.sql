use tiendapostres;
-- 1 para saber el nombre del cliente y el nombre del pastel que compró
SELECT cliente.nombre, cliente.apellidoPaterno, cliente.apellidoMaterno, postre.nombre FROM cliente 
INNER JOIN compra ON (cliente.idCliente = compra.idCliente) 
INNER JOIN postre  ON (postre.idPostre=compra.idPostre) 
WHERE compra.idCompra = 1;
-- 2 para ver las compras que se hicieron en determinada fecha
SELECT * FROM compra WHERE fechaPago = '2020-12-21';
-- 3 para ver todos los datos de un postre
SELECT postre.idPostre, sabor.nombreSabor, tamanio.nombreTamanio, categoria.nombreCategoria, postre.nombre, postre.precio, postre.stock FROM sabor
INNER JOIN postre ON (sabor.idSabor = postre.idSabor)
INNER JOIN tamanio ON (tamanio.idTamanio = postre.idTamanio)
INNER JOIN categoria ON (categoria.idCategoria = postre.idCategoria)
WHERE postre.nombre = "Imposible";
-- 4 para saber que postres tienen stock mayor que 10
SELECT * FROM postre WHERE stock > 10;
-- 5 para saber que postres valen menos de 100
SELECT * FROM postre WHERE precio < 100;