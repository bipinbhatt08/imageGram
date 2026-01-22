import express from 'express'
import { isAuthenticated } from '../../middleware/isAuthenticated.js'
import { checkIfFollowing, followSomeone, getFollowers, getFollowing, unFollowSomeone } from '../../controllers/followController.js'

const router = express.Router()

router.post('/:id',isAuthenticated,followSomeone)
router.get('/:id',isAuthenticated,checkIfFollowing)
router.delete('/:id',isAuthenticated,unFollowSomeone)
router.get('/:id/followers',getFollowers)
router.get('/:id/following',getFollowing)


export default router