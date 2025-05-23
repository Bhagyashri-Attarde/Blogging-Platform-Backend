const { Post } = require('../models');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.getUserPosts = async (req, res) => {
  const posts = await Post.findAll({ where: { userId: req.user.id } });
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    userId: req.user.id
  });
  res.status(201).json(post);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.userId !== req.user.id) return res.status(403).json({ message: "Forbidden" });

  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.userId !== req.user.id) return res.status(403).json({ message: "Forbidden" });

  await post.destroy();
  res.json({ message: "Post deleted" });
};
