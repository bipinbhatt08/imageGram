import mongoose from "mongoose"

const notificationSchema = mongoose.Schema({
    creator:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    targetModel:{
        type: String,
        enum:["Post","Like","Follow","Comment"],
        required:true
    },
    targetId:{
        type:mongoose.Types.ObjectId,
        refPath:'targetModel'
    },
    message:{
        type: String,
        required: true
    },
    receivers:[{
        type:mongoose.Types.ObjectId,
        ref: 'User'
    }],
    readBy:[{
        type:mongoose.Types.ObjectId,
        ref: 'User',
        default:[]
    }]

},{timestamps:true})

const Notification = mongoose.model('Notification',notificationSchema)
export default Notification