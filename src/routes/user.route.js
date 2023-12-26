const { Router } = require('express');
const { controllerUser } = require('../controllers');

const router = Router();
router.post('/', controllerUser.newUser);

module.exports = router;