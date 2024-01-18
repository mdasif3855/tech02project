const  mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator')
const Schema  = mongoose.Schema
const UserSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email :{
        type :String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phonenumber : {
        type : String,
        required : true
    }
},  { timestamps: true }
)
//static signup
UserSchema.statics.signup = async function (firstname,lastname,email,password,confirmpassword,phonenumber) {
   //validation 
   if (!firstname ||!lastname ||!phonenumber || !email || !password){
    throw Error("All Fields Must Filled")
   }
if(!validator.isEmail(email)){
    throw Error("Email is not valid!")
}
if(!validator.isStrongPassword(password)){
    throw Error('Password is not strong!')
}
if(password !== confirmpassword){
    throw Error('confirm password not match!')
}

 
        const exists = await this.findOne({ email });
        if (exists) {
            throw Error('EMAIL ALREADY EXISTS...');
        }
        // Add password strength validation here
      
const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await this.create({firstname,lastname, email, password: hash,phonenumber });

        return user;
    
}

// login

UserSchema.statics.login = async function(email,password){
   //validation 
   if (!email || !password){
    throw Error("All Fields Must Filled")
   }
   const user = await this.findOne({email})
   if (!user){
    throw Error('Incorrect Email Id')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Wrong Password')
    }
    return user
}


module.exports = mongoose.model("techo2user",UserSchema)