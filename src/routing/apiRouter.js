// this apiROuter will be triggered when any request starting with /api comes in .
import express from 'express'
import v1Router from './v1/v1Router.js'

const router = express.Router()

router.use('/v1',v1Router)// if the remaining url i.e. after the /api starts with /v1, then the request is forwarded to the v1Router



export default router