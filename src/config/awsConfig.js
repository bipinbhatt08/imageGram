import { S3Client } from "@aws-sdk/client-s3";
import serverConfig from "./serverConfig";
const s3 = new S3Client( { 
    region: serverConfig.AWS_REGION
});
export default s3

