// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to pasteleria equipo 15 API');
});

/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/usuarios' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo usuarios.js,
* la función require está importando este archivo */
router.use('/usuarios', require('./usuarios'));
router.use('/clientes', require('./clientes'));
router.use('/tamanios', require('./tamanios'));
router.use('/categorias', require('./categorias'));
router.use('/postres', require('./postres'));
router.use('/compras', require('./compras'));

// exportamos nuestro nuevo router
module.exports = router;