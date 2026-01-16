import express from "express"
import { getLikes, likeLikeable, unlikeLikeable } from "../../controllers/likeController.js"
import { isAuthenticated } from "../../middleware/isAuthenticated.js"

const router = express.Router()

router.post('/',isAuthenticated,likeLikeable)
router.delete('/',isAuthenticated,unlikeLikeable)
router.get('/',getLikes)

export default router