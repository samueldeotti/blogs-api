const { Router } = require('express');
const { controllerPost } = require('../controllers');
const { verifyToken } = require('../middlewares/verifyToken');
const { verifyPost } = require('../middlewares/verifyPots');

const router = Router();
router.post('/', verifyToken, verifyPost, controllerPost.newPost);

module.exports = router;