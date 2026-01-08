import multer from "multer";
import multerS3 from "multer-s3";
import { S3_BUCKET_NAME } from "./serverConfig.js";
import { s3 } from "./awsConfig.js";

export const uploader = multer({
    storage: multerS3({
    s3: s3,
    bucket: S3_BUCKET_NAME,
    key: function (req, file, cb) { // define file name 
      if(!file){
        console.log(file)
        cb(new Error("File not found"))
      }
      //we can validate for file type too
      console.log(file)
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
      cb(null,file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split('/')[1])
    }
  })
})// uploader is a middleware