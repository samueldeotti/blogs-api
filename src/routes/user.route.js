const { Router } = require('express');
const { controllerUser } = require('../controllers');
const { verifyToken } = require('../middlewares/verifyToken');

const router = Router();
router.post('/', controllerUser.newUser);
router.get('/', verifyToken, controllerUser.getAll);
router.get('/:id', verifyToken, controllerUser.getById);

module.exports = router;