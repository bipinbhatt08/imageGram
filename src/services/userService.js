import { changePassword, createUser, findAllUsers, findUser, findUserByEmail } from "../repositories/userRepository.js"
import ApiError from "../utils/apiErrorHandler.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/jwt.js"

export const getUserProfileService = async(id)=>{
    const user = await findUser(id)
    if(!user){
        throw new ApiError(404,"No user found")
    }
    return user
}

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
export const getUsersService = async(filter={})=>{
    const response = await findAllUsers(filter)
    return response
}

export const changePasswordService = async({user,currentPassword,newPassword})=>{

    // let's check they know their password'
    const userDetails = await findUserByEmail(user.email)
    console.log(userDetails)
    console.log(currentPassword)
    const isPasswordCorrect = bcrypt.compareSync(currentPassword,userDetails.password)
    if(!isPasswordCorrect){
        throw new ApiError(400,"Incorrect password")
    }
    const isPassSame = bcrypt.compareSync(newPassword,userDetails.password)
    if(isPassSame){
        throw new ApiError(400,"New password can not be same as old password.")
    }
    const response = await changePassword({id:userDetails._id,password:newPassword})
    return response
}