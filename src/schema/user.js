import mongoose from 'mongoose';
import bcrypt from 'bcrypt' 

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
  
},{timestamps:true});


// middlewares or mongoose hooks

userSchema.pre('save',function modifyPassword(){
  
  if (!this.isModified('password')) {
    return next()
  }  // just to avoid double hashing 

  const user = this
  const SALT = bcrypt.genSaltSync(9)

  const hashedPassword = bcrypt.hashSync(user.password, SALT,)

  user.password = hashedPassword

 
})

const user = mongoose.model("User", userSchema) //create User named collection using userSchema

export default user