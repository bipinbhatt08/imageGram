// here all the post related routes  are present

// we look at the remaining url part after /posts
import express from 'express'
import { uploader } from '../../config/multerConfig.js';
import { createPost, deletePostById, getAllPosts, getPostById } from '../../controllers/postController.js';
const router = express.Router(); //router object to modulerize the routers

router.post('/',uploader.single('image'),createPost)
router.get('/',getAllPosts)
router.delete('/:id',deletePostById)
router.get('/:id',getPostById)
export default router