const { Router } = require('express');
const { controllerCategory } = require('../controllers');
const { verifyToken } = require('../middlewares/verifyToken');

const router = Router();
router.post('/', verifyToken, controllerCategory.newCategory);
router.get('/', verifyToken, controllerCategory.getAll);

module.exports = router;