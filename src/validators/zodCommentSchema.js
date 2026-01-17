import z from 'zod'

const commentSchema = z.object({
    content: z
    .string({
        error: "content is required."
    }),
    post: z 
    .string({
        error: "post id is required"
    }),
    parent: z
    .string().optional()
})

export default commentSchema