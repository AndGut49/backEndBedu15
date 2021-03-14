var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to pasteleria equipo 15 API');
});

router.use('/usuarios', require('./usuarios'));
router.use('/clientes', require('./clientes'));
router.use('/tamanios', require('./tamanios'));
router.use('/categorias', require('./categorias'));
router.use('/postres', require('./postres'));
router.use('/compras', require('./compras'));
router.use('/sabores', require('./sabores'));

module.exports = router;