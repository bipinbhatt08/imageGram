import mongoose from 'mongoose'
import User from '../schema/user.js'

export const createUser = async(user)=>{
    const newUser = await User.create(user)
    return newUser
}


export const findUserByEmail = async(email)=>{
    const user = await User.findOne({email})
    return user
}

export const findAllUsers = async()=>{
    const users = await User.find()
    return users
}

export const findUser = async(id)=>{
    if(!mongoose.Types.ObjectId.isValid(id)) return null
    const user = await User.findById(id).select('-password')
    return user
}