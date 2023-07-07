const router = require('express').Router();

const productsController = require('../../controllers/productos.controller')

router.get('/', productsController.getProducts);
router.get('/:idproducto', productsController.getById)

router.post('/', productsController.createProduct);


router.put('/:idproducto', productsController.editProduct)

router.delete('/:idproducto', productsController.deleteProduct)





module.exports = router;