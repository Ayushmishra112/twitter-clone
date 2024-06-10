import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import { json, response } from "express";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist.",
        success: false,
      });
    }
    const hiddenPassword = await bcryptjs.hash(password, 16);

    await User.create({
      name,
      username,
      email,
      password: hiddenPassword,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User does not exist with this email.",
        success: false,
      });
    }
    const MatchPassword = await bcryptjs.compare(password, user.password);
    if (!MatchPassword) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN, {
      expiresIn: "3d",
    });
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "3d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        user,
        success: true,
      })
  } catch (error) {
    console.log(error);
  }
}

export const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        user, success: true
    })
}
export const bookmark = async (req, res) => {
  try{
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);
    if(user.bookmarks.includes(tweetId)){
      await User.findByIdAndUpdate(loggedInUserId, {$pull:{bookmarks:tweetId}});
      return res.status(200).json({
        message:"Removed"
      });
    }
    else{
      await User.findByIdAndUpdate(loggedInUserId, {$push:{bookmarks:tweetId}});
      return res.status(200).json({
        message:"saved"
      });
    }
  }
  catch(error){
    console.log(error);
  }
}
export const getProfile = async (req, res) => {
  try {
      const id = req.params.id;
      const user = await User.findById(id).select("-password");
      return res.status(200).json({
          user,
      })
  } catch (error) {
      console.log(error);
  }
}

export const strangersData = async (req,res) =>{ 
  try {
       const {id} = req.params;
       const strangers = await User.find({_id:{$ne:id}}).select("-password");
       if(!strangers){
          return res.status(401).json({
              message:"Currently do not have any users."
          })
       };
       return res.status(200).json({
          strangers
      })
  } catch (error) {
      console.log(error);
  }
}
export const follow = async(req,res)=>{
  try {
      const loggedInUserId = req.body.id; 
      const userId = req.params.id; 
      const loggedInUser = await User.findById(loggedInUserId);//patel
      const user = await User.findById(userId);//keshav
      if(!user.followers.includes(loggedInUserId)){
          await user.updateOne({$push:{followers:loggedInUserId}});
          await loggedInUser.updateOne({$push:{following:userId}});
      }else{
          return res.status(400).json({
              message:"Already following."
          })
      };
      return res.status(200).json({
          message:`${loggedInUser.name} just followed to ${user.name}`,
          success:true
      })
  } catch (error) {
      console.log(error);
  }
}
export const unfollow = async (req,res) => {
  try {
      const loggedInUserId = req.body.id; 
      const userId = req.params.id; 
      const loggedInUser = await User.findById(loggedInUserId);//patel
      const user = await User.findById(userId);//keshav
      if(loggedInUser.following.includes(userId)){
          await user.updateOne({$pull:{followers:loggedInUserId}});
          await loggedInUser.updateOne({$pull:{following:userId}});
      }else{
          return res.status(400).json({
              message:`User has not followed yet`
          })
      };
      return res.status(200).json({
          message:`Succesfully unfollowed - ${user.name}`,
          success:true
      })
  } catch (error) {
      console.log(error);
  }
}



