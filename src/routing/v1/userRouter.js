import express from 'express'
import {  changePassword, getUserProfile, signIn, signUp } from '../../controllers/userController.js'
import { validate } from '../../validators/zodValidator.js'
import zodSignUpSchema from '../../validators/zodSignUpSchema.js'
import zodSignInSchema from '../../validators/zodSignInSchema.js'
import changePasswordSchema from '../../validators/zodChangePassSchema.js'
import { isAuthenticated } from '../../middleware/isAuthenticated.js'

const router = express.Router()

router.get('/:id',getUserProfile)
router.post('/signup',validate(zodSignUpSchema),signUp)
router.post('/signin',validate(zodSignInSchema),signIn)
router.patch('/changepassword',validate(changePasswordSchema),isAuthenticated,changePassword)
export default router