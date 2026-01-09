import { z } from 'zod'; // ESM

const zodPostSchema = z.object({
  caption: z
    .string({ message: "Caption is required." })
    .min(1, { message: "Caption is required." })

  /*
    We validate only the caption using Zod.

    multipart/form-data cannot be validated before Multer parses the request.
    Since files are uploaded to S3 only after parsing, validating them with Zod
    is not appropriate.

    Zod is meant for validating data (text/JSON),
    while file validation belongs to the transport layer
    and is handled manually after Multer.
  */
});



export default zodPostSchema
