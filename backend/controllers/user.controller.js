import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const maxAge = 24*60*60;
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

const signupUser = async (req, res, next) => {
    const newUser = req.body;
    try{
        const savedUser = await User.create(newUser);
        const token = createToken(savedUser._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
        res.status(200).json({success: true, msg: savedUser._id});
    }
    catch(err){
        next(err);
    }
}

const loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    const errArray = [];

    if(!email || !password){
        if(!email){
            errArray.push({path: "email", kind: "required"});
        }
        if(!password){
            errArray.push({path: "password", kind: "required"});
        }
        res.status(400).json({success: false, msg: errArray});
    }

    try{
        const userFound = await User.findOne({ email })
        if(userFound){
            const auth = await bcrypt.compare(password, userFound.password);
            if(auth){
                const token = createToken(userFound._id);
                res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
                res.status(200).json({success: true, msg: `Logged in, ${userFound._id}`});
            }
            else{
                errArray.push({path: "password", kind: "incorrect"});
                res.status(400).json({success: false, msg: errArray});
            }
        }
        else{
            errArray.push({path: "email", kind: "unregistered"});
            res.status(400).json({success: false, msg: errArray});
        }
    }
    catch(err){
        res.status(400).json({success: false, msg: err});
    }
}

const getUser = async (req, res, next) => {
    const user = await User.findById(req.userId);
    res.json({success: true, user: user});
}

const logoutUser = async (req, res, next) => {
    res.cookie('jwt', '', {
        maxAge: 1
    });

    res.status(200).json({
        success: true
    });
}

export {signupUser, loginUser, getUser, logoutUser};