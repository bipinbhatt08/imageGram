import { createUser, findUserByEmail } from "../repositories/userRepository.js"
import ApiError from "../utils/apiErrorHandler.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/jwt.js"
import { email } from "zod"
export const signUpUserService = async(user)=>{

    // we did not use any kind of findUserByemail and validate email is unique or there is no user with the provided email exist.. Cause we have unique:true  for email in our user schema. 
    // If we do that would be unnecessary db call so we don't do that
    // modifying / hashing password is busniess logic
    
    try {
        const newUser = await createUser(user)
        return newUser
    } catch (error) {
        // i am 
        if(error.name === "MongoServerError" && error.code === 11000){
            throw new ApiError(400,"User with the same email or username already exists.")
        }
        throw error
    }

}
export const signInUserService = async(userDetails)=>{
    
    try{
        //1 . check  if there is a valid user with the email
        const user = await findUserByEmail(userDetails.email)
        if(!user){
            throw new ApiError(404,"User not found.")
        }
        // 2. compare the password
        const isPasswordValid = bcrypt.compareSync(userDetails.password,user.password)
        if(!isPasswordValid){
            throw new ApiError(401,"Unauthorized")
        }
        const token = generateToken({email:userDetails.email,_id:user._id, username:user.username})
        return token

    }catch(error){
        throw error
    }

}
export const checkIfUserExistsService = async(userDetails)=>{
     const user = await findUserByEmail(userDetails.email)
     return user
}