import { createNotification } from "../repositories/notificationRepository"
import { getFollowersService } from "./followService"
import { getUserProfileService} from "./userService"

//receiver is an arry
export const  createNotificationService = async({creator,receivers,targetModel,targetId,message})=>{
    const response = await createNotification({creator,receivers,targetModel,targetId,message})
    return response
}