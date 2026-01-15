import express from "express"
import { getLikesOnPost, likeThePost, UnlikeThePost } from "../../controllers/likeController.js"
import { isAuthenticated } from "../../middleware/isAuthenticated.js"

const router = express.Router()

router.post('/posts/:id',isAuthenticated,likeThePost)
router.delete('/posts/:id',isAuthenticated,UnlikeThePost)
router.get('/posts/:id',getLikesOnPost)

export default router