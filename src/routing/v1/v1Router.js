import express from 'express'
import postRouter from './postRouter.js'
import userRouter from './userRouter.js'
import likeRouter from './likeRouter.js'
import commentRouter from './commentRouter.js'
import followRouter from './followRouter.js'

const router = express.Router()

router.use('/posts',postRouter )// if the remaining url i.e. after the /api/v1  starts with /posts, then the request is forwarded to the postRouter

router.use('/users',userRouter)

router.use('/likes', likeRouter)

router.use('/comments',commentRouter)

router.use('/follows',followRouter)

export default router