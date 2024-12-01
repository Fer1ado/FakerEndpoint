
import UserDTO from "../middleware/user.dto.js";
import { userManager } from "./Manager/userManager.js"; 

import passport from "passport";

class UserInterface{

     register = async (req, res, next) => {
        try {
            const response = await userManager.createUser(req.body);
            if (response.status === "failed"){
                req.session.messages = response.message
                res.redirect("/loginError")
            } else 
            req.session.messages = response.message
            res.redirect("/login");
        } catch (error) {
            next(error);
        }
    };
    
     login = async (req, res, next) => {
        try {
            const response = await userManager.login(req.body);
                if(response.status === "failed"){ 
                req.session.messages = response.message
                res.redirect("/loginError")}
                else {
            req.session.cookie.token = response.token;
            req.session.user = new UserDTO(response.user, response.token );
            req.session.token = response.token
            res.cookie('token', response.token, { httpOnly: true }).redirect("/user/profile")
            }
        } catch (error) {
            next(error);
        }
    };
    
     profile = async (req, res, next) => {
        try {
            const { first_name, last_name, email } = req.user;
            res.json({first_name, last_name, email});
        } catch (error) {
            next(error);
        } 
    };
    
     logout = async (req, res, next) => {
        try {
            //console.log(req.session)
            req.logout((err) => {
                if(err) return res.send(err)
                res.clearCookie("token").redirect("/login")
            //console.log(req.session)
            })
        } catch (error) {
            next(error);
        }
    }
    
    
     githubReg = ()=>{ passport.authenticate("github",{scope:["user:email"]})}
     githubAuth = ()=>{ passport.authenticate("github",{failureRedirect: '/loginError', successRedirect: "/user/profile", passReqToCallback: true, failureMessage: true}), async (req, res) => {res.redirect("/")}}
    
    
     googleReg = () =>{ passport.authenticate("google", {scope:["profile"]})}
     googleAuth = ()=>{ passport.authenticate("google", {assignProperty: "user", successRedirect: "/user/profile", failureRedirect: "/loginError", passReqToCallback: true}), async (req, res) => {res.redirect("/user/profile")}}

}

export const userController = new UserInterface()




class ApiUserInterface{

register = async (req, res, next) => {
        try {
            const response = await userManager.createUser(req.body);
            if (response.status === "failed"){
                req.session.messages = response.message
                res.status(400).send(response.message)
            } else 
            req.session.messages = response.message
            res.status(200).send(new UserDTO(response.newUser));
        } catch (error) {
            next(error);
        }
    };

login = async (req, res, next) => {
        try {
            const response = await userManager.login(req.body);
                if(response.status === "failed"){ 
                req.session.messages = response.message
                
                res.status(400).send(response.message)}
                else {
            req.session.cookie.token = response.token;
            req.session.user = response.user
            req.session.token = response.token
            
            res.cookie('token', response.token, { httpOnly: true }).status(200).send(new UserDTO(response.user, response.token))
            }
        } catch (error) {
            next(error);
        }
    }

logout = async (req, res, next) => {
    try {
        //console.log(req.session)
        req.logout((err) => {
            if(err) return res.status(400).send(error.message)
            res.clearCookie("token").status(200).send({status: "success", message:"logout successfull"})
        //console.log(req.session)
        })
    } catch (error) {
        next(error);
    }
}

}

export const apiUserController = new ApiUserInterface();