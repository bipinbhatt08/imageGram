import express from 'express'
import postRouter from './postRouter.js'
import userRouter from './userRouter.js'

const router = express.Router()

router.use('/posts',postRouter )// if the remaining url i.e. after the /api/v1  starts with /posts, then the request is forwarded to the postRouter

router.use('/users',userRouter)

export default router