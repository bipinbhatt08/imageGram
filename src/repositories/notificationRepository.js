import Notification from "../models/notificationModel.js"

export const createNotification = async({creator,receivers,targetModel,targetId,message})=>{
    const response = await Notification.create({
        creator,
        receivers,
        targetModel,
        targetId,
        message
    })
    return response
}


