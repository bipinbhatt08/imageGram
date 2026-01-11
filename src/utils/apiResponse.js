const ApiResponse=(data,message="success")=>{
    return {
         success: true,
         data,
         message
    }
}
export default ApiResponse