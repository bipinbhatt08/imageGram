import express from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import { createComment } from "../../controllers/commentController.js";
import { validate } from "../../validators/zodValidator.js";
import zodCommentSchema from "../../validators/zodCommentSchema.js"
const router = express.Router()

router.post('/',isAuthenticated,validate(zodCommentSchema),createComment)

export default router