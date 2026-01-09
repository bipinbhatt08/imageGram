import express from 'express'
import {  getUserById, signUp } from '../../controllers/userController.js'
import { validate } from '../../validators/zodValidator.js'
import zodSignUpSchema from '../../validators/zodSignUpSchema.js'

const router = express.Router()

router.get('/:id',getUserById)
router.post('/signup',validate(zodSignUpSchema),signUp)

export default router