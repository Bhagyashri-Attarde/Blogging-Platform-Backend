const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getUserPosts
} = require('../controllers/postController');

router.get('/', getAllPosts);
router.get('/user/me', protect, getUserPosts); // For fetching only user's posts
router.post('/', protect, createPost);
router.get('/:id', getPostById);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;
