const { postService } = require('../services');

const newPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await postService.newPost({ 
    title, 
    content,
    categoryIds,
    userId: id, 
  });

  return res.status(status).json(data);
};

module.exports = {
  newPost,
};