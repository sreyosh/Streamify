import User from "../models/userModel.js";
import bycryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

export const Login= async(req,res)=>{
try {
    
    const { email, password} = req.body;
    if(!email || !password){
        return res.status(401).json({
            message:"Invalid data",
            success:false
        })
    }

    const user=await User.findOne({email});
    if(!user){
        return res.status(401).json({
         message:"invalid email or password",
         success:false


        })
    }

    const isMatch=await bycryptjs.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({
            message:"invalid email or password",
            success:false
        })
    }
const tokenData={

   id:user._id 
}
    const token=await jwt.sign(tokenData,"tttuuupppaaaiii",{expiresIn:"1d"});
    return res.status(200).cookie("token",token,{httpOnly:true}).json({
        message:`welcome back ${user.fullName}`,user,
        success:true
    })


} catch (error) {
    console.log(error);
}
}
export const Logout=async (req,res)=>{
return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
    message:"user logged out",
    success:true
})

}
export const Register = async (req,res) =>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

        const hashpassword=await bycryptjs.hash(password,16);

        await User.create({
            fullName,
            email,
            password:hashpassword
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
}