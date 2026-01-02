import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique:true,
    minLength:5,
  }, 
  email: {
    type: String,
    required: true,
    unique:true,
    minLength:5,

    //custom validator
    validate: {
      validator: function(emailValue) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue); // 'v' is the value of the email field
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password:{
    type:String,
    required: true,
    minLength:5
  }
  
},{timestampst:true});
const user = mongoose.Model("User", userSchema) //create User named collection using userSchema

export default user