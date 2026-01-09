import { createUser } from "../repositories/userRepository.js"

export const signUpUserService = async(user)=>{

    // we did not use any kind of findUserByemail and validate email is unique or there is no user with the provided email exist.. Cause we have unique:true  for email in our user schema. 
    // If we do that would be unnecessary db call so we don't do that


    

    // modifying / hashing password is busniess logic

    
    const newUser = await createUser(user)
    
    return newUser
}