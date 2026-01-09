import {z} from 'zod'

const zodSignUpSchema = z.object({ 
    username: z
    .string()
    .min(5,{message:"Username should be at least 5 character long."}),
    email: z
    .string()
    .min(1,{message: "Email is required."})
    .email({ message: "Valid email is required." })
}
)

export default zodSignUpSchema