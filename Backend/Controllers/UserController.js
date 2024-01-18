const User = require('../Models/Usermodel')
const jwt = require('jsonwebtoken')
const createToken = (_id)=>{
  return  jwt.sign({_id},process.env.SECRET,{expiresIn :"1d"})
}

//login user
const Loginuser = async(req,res)=>{
const {email,password} = req.body
try {
    const usr = await User.login(email,password)
    // create token
    const token = createToken()
    res.status(200).json({email,token})
} catch (error) {
    res.status(400).json({error : error.message})
}
}


//Signup user
const Signupuser = async(req,res)=>{
    const {firstname,lastname,email,password,confirmpassword,phonenumber} = req.body
    try {
        const usr = await User.signup(firstname,lastname,email,password,confirmpassword,phonenumber)
        //create Token
        const token = createToken(usr._id)
        res.status(200).json({token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {Loginuser,Signupuser}

