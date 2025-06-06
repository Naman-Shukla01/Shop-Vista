import User from "../models/userModel.js";
import crypto from "crypto"

const login = async (req, res) => {
    try{ 
    let {name, email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(302).json({ message: "User not found"});
    
    if(user.password === password){
        let token = crypto.randomBytes(20).toString("hex");

            user.token = token;
            await user.save();
            console.log("Yes")
            return res.status(200).json({token: token}); 
    }
     throw new Error("Password Incorrect")
    } catch(err) {
        res.status(500).json({message: `Something went wrong ${err}`});
    }
}

const signup = async (req, res) => {
    try{ 
    let {name, email, password} = req.body;

    const exists = await User.findOne({email});
    if(exists) return res.status(302).json({ message: "User already exists"});

    let newUser = new User({name: name, email: email, password: password});
    await newUser.save();
    res.redirect("/login")
     
    } catch(err) {
        res.status(500).json({message: `Something went wrong ${err.message}`});
    }
}


export { signup, login};