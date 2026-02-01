import Notification from "../schema/notification.js"

export const createNotification = async({creator,receivers,targetModel,targetId,message})=>{
    
   try {
     const response = await Notification.create({
         creator,
         receivers,
         targetModel,
         targetId,
         message
     })
     return response
   } catch (error) {
    console.log("Nofitication Error:",error)
   }
}


