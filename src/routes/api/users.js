const router = require('express').Router();

const userController = require('../../controllers/users.controllers')

router.get('/', userController.getAll)

router.post('/register', userController.createUser)
router.put('/:userId/buy/:productId', userController.buyProduct)

module.exports = router;