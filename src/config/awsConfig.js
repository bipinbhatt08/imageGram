import { S3Client } from "@aws-sdk/client-s3";
import { AWS_REGION } from "./serverConfig.js";
export const s3 = new S3Client( { 
    region: AWS_REGION,
});

