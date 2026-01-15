import express from "express"
import { getLikesOnPost, likeThePost } from "../../controllers/likeController.js"
import { isAuthenticated } from "../../middleware/isAuthenticated.js"

const router = express.Router()

router.post('/posts/:id',isAuthenticated,likeThePost)
router.get('/posts/:id',getLikesOnPost)

export default router