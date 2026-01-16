import z from 'zod';

const likeSchema = z.object({
  onModel: z.enum(['Comment', 'Post'], {
    error: "onModel value must be a valid one."
  }),
  likeableId: z.string({
    error: "likeableId is required."
  })
  .trim()
  .min(1, {error:"likeableId must be a non-empty string"}) // ensures empty string is invalid
});

export default likeSchema;
