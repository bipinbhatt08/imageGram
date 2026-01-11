import { createUser } from "../repositories/userRepository.js"
import ApiError from "../utils/apiErrorHandler.js"

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