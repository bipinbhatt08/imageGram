import z from "zod";
const changePasswordSchema = z.object({
    currentPassword: z
    .string("Current password is required."),
    newPassword:z
    .string("New password is required.")
    .min(5,"Password should be at least 5 characters long.")
    ,
    confirmNewPassword:  z
    .string("Confirm password is required")
    .min(5,"Password should be at least 5 characters long.")
    
        
})
.refine((data) => data.currentPassword !== data.newPassword ,"New password cannot be same as old password")
.refine((data)=>data.newPassword === data.confirmNewPassword,"Passwords don't match")
export default changePasswordSchema