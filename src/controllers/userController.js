import { success } from "zod"
import { signInUserService, signUpUserService } from "../services/userService.js"
import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/apiResponse.js"

export const getUserById = async(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Not implemented yet"
    })
}

export const signUp = asyncHandler(async(req,res)=>{ 
    const newUser = await signUpUserService(req.body)
    return res.status(201).json(ApiResponse(newUser,"User created successfully."))
})

export const signIn = asyncHandler(async(req,res)=>{
    const response = await signInUserService(req.body)
    return res.status(200).json(ApiResponse(response,"User signed in successfully."))
}) 