import express from 'express'
import { isAuthenticated } from '../../middleware/isAuthenticated.js'
import { checkIfFollowing, followSomeone, unFollowSomeone } from '../../controllers/followController.js'

const router = express.Router()

router.post('/:id',isAuthenticated,followSomeone)
router.get('/:id',isAuthenticated,checkIfFollowing)
router.delete('/:id',isAuthenticated,unFollowSomeone)

export default router