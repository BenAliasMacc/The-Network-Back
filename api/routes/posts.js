const router = require('express').Router();
const { 
    getPosts, 
    createPost, 
    editPost, 
    deletePost, 
    likePost, 
    unlikePost, 
    addComment, 
    editComment, 
    deleteComment 
} = require('../controller/posts');
const multer = require('multer');
const upload = multer();

// Posts
router.get('/', getPosts);
router.post('/', createPost);
router.put('/:id', editPost);
router.delete('/:id', deletePost);

// Likes
router.patch('/like-post/:id', likePost);
router.patch('/unlike-post/:id', unlikePost);

// Comments
router.patch('/comments/:id', addComment);
router.patch('/edit-comments/:id', editComment);
router.patch('/delete-comments/:id', deleteComment);

// Upload
router.post('/upload', upload.single('file'), createPost);

module.exports = router;