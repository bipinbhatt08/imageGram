
import { signInUserService, signUpUserService, getUserProfileService, changePasswordService} from "../services/userService.js"
import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/apiResponse.js"

export const getUserProfile = async(req,res)=>{
    const id = req.params.id
    const user = await getUserProfileService(id)
    return res.status(200).json(ApiResponse(user,"User signed in successfully."))

}

export const signUp = asyncHandler(async(req,res)=>{ 
    const newUser = await signUpUserService(req.body)
    return res.status(201).json(ApiResponse(newUser,"User created successfully."))
})

export const signIn = asyncHandler(async(req,res)=>{
    const response = await signInUserService(req.body)
    return res.status(200).json(ApiResponse(response,"User signed in successfully."))
}) 

export const changePassword = asyncHandler(async(req,res)=>{
    const {user} = req
    const {currentPassword,newPassword} = req.body
    const response = await changePasswordService({user,currentPassword,newPassword})
    return res.status(200).json(ApiResponse(null,"Password changed successfully"))
})