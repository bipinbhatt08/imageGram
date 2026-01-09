import { success } from "zod"
import { signUpUserService } from "../services/userService.js"

export const getUserById = async(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Not implemented yet"
    })
}

export const signUp = async(req,res)=>{
    try {
        const newUser = await signUpUserService(req.body)
        return res.status(201).json({
            success:true,
            message:"User created successfully.",
            data: newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error.",
            error: error.message
        })
    }
}