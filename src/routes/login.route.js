const { Router } = require('express');
const { controllerLogin } = require('../controllers');

const router = Router();
router.post('/', controllerLogin.login);

module.exports = router;