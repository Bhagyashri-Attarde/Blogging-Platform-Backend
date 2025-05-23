

const { Post, User } = require('../models');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content, UserId: req.user.id });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: { model: User, attributes: ['username'] }
    });

    const mappedPosts = posts.map(post => ({
      ...post.toJSON(),
      author: post.User ? { username: post.User.username } : null,
    }));

    res.json(mappedPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: { model: User, attributes: ['username'] }
    });

    if (!post) return res.status(404).json({ message: 'Post not found' });

    const mappedPost = {
      ...post.toJSON(),
      author: post.User ? { username: post.User.username } : { username: 'Unknown' },
    };

    res.json(mappedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post || post.UserId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    const { title, content } = req.body;
    await post.update({ title, content });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post || post.UserId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { UserId: req.user.id },
      include: { model: User, attributes: ['username'] }
    });

    const mappedPosts = posts.map(post => ({
      ...post.toJSON(),
      author: post.User ? { username: post.User.username } : { username: 'Unknown' },
    }));

    res.json(mappedPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
