import express from "express"
import { likeThePost } from "../../controllers/likeController.js"
import { isAuthenticated } from "../../middleware/isAuthenticated.js"

const router = express.Router()

router.post('/posts/:id',isAuthenticated,likeThePost)

export default router