import {z} from 'zod'

const zodSignInSchema = z.object({ 
    email: z
    .string()
    .min(1,{message: "Email is required."})
    .email({ message: "Valid email is required." }),
    password:z
    .string()
    .min(5,{message:"Password should be at least 5 characters long."})
}
)

export default zodSignInSchema