//import user model
const users =  require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//register
exports.register = async (req,res)=>{
    console.log("Inside register function");
    const {username,email,password} = req.body
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    try{
    //check already existing user - findOne()
    const existingUser =  await users.findOne({email})
    if(existingUser){
        res.status(406).json("User already exist.. Please Login!!!")
    }else{
        //register user
        const newUser =  new users({
            username,email,password,image:"",github:"",linkedin:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}

//login
exports.login = async (req,res)=>{
    console.log("Inside login function");
    const {email,password} = req.body
    try{
        //check user exist
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            //generate token
           const token = jwt.sign({userId:existingUser._id},"superSecretKey123")
            res.status(200).json({
                existingUser,
                role:"user",
                token
            })
        }else{
            res.status(404).json("Incorrect Email / Password")
        }
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}