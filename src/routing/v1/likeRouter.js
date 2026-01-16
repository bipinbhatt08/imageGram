import express from "express"
import { getLikes, likeLikeable, unlikeLikeable } from "../../controllers/likeController.js"
import { isAuthenticated } from "../../middleware/isAuthenticated.js"
import { validate } from "../../validators/zodValidator.js"
import likeSchema from "../../validators/zodLikeSchema.js"

const router = express.Router()

router.post('/',isAuthenticated,validate(likeSchema),likeLikeable)
router.delete('/',isAuthenticated,validate(likeSchema),unlikeLikeable)
router.get('/',getLikes)

export default router