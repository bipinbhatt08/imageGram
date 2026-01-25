import { createNotification } from "../repositories/notificationRepository"
import ApiError from "../utils/apiErrorHandler"
import { getUserProfileService ,getUsersService} from "./userService"

//receiver is an arry
export const  createNotificationService = async({creator,receivers,targetModel,targetId,message})=>{
    
    // i might not need to validate thise if i use them internally anyways let me seee
    await getUserProfileService(creator)// to check if creator exists
    const existedReceivers = await getUsersService({_id:{$in:receivers}})// fetch all those users whose id is in receivers
    if(existedReceivers.length===0){
        throw new ApiError(400, "Receivers for notification are required")
    }
    const response = await createNotification({creator,receivers,targetModel,targetId,message})
    return response
}