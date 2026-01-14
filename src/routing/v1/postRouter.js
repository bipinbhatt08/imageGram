// here all the post related routes  are present

// we look at the remaining url part after /posts
import express from 'express'
import { uploader } from '../../config/multerConfig.js';
import { createPost, deletePostById, getAllPosts, getAllPostsOfUser, getPostById, updatePostById } from '../../controllers/postController.js';
import { validate } from '../../validators/zodValidator.js';
import zodPostSchema from '../../validators/zodPostSchema.js';
import { isAuthenticated } from '../../middleware/isAuthenticated.js';
const router = express.Router(); //router object to modulerize the routers

router.post('/',isAuthenticated,uploader.single('image'),validate(zodPostSchema),createPost)
router.get('/',getAllPosts)
router.get('/user/:id',getAllPostsOfUser)
router.delete('/:id',isAuthenticated,deletePostById)
router.get('/:id',getPostById)
router.put('/:id',isAuthenticated,uploader.single('image'),updatePostById)
export default router