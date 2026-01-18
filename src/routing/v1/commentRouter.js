import express from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import { createComment, deleteComment, getCommentsOnPost, getReplies } from "../../controllers/commentController.js";
import { validate } from "../../validators/zodValidator.js";
import zodCommentSchema from "../../validators/zodCommentSchema.js"
const router = express.Router()

router.post('/',isAuthenticated,validate(zodCommentSchema),createComment)
router.get('/post/:id',getCommentsOnPost)
router.get('/post/:id/replies',getReplies)
router.delete('/:id',isAuthenticated,deleteComment)
export default router