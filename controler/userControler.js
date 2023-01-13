const express = require('express')
const multer = require("multer")
const bcrypt = require("bcrypt")
const passport = require('passport')
const userProduct = require("../Schena/userSchema")
const contactUser = require("../Schena/contactShema")
const projectUser = require("../Schena/projectSchema")
const exprienceUser = require("../Schena/exprienceSchema")


const securePassword = async(password)=>{
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        
        return passwordHash;
    } catch (error) {
        console.log(error.message)
    }
}

const get = async (req,res)=>{
    res.status(200).json({msg : "i am the best"})
}
const Contact = async(req,res)=>{
   try {
       const {name, email, phone, message} = req.body
       

    if (!name || !email || !phone || !message) {
        res.json({msg : "plz fill all entries"})
    }
    const user = new contactUser({name, email, phone, message})
    const productRegister = await user.save()
    if (productRegister) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
           
            
          });
        }
   } catch (error) {
    console.log(error.message)
   }
}
const Project = async(req,res)=>{
    try {
        const {title, desc, tech, sourceurl, previewurl} = req.body
        const image = req.file.filename
        
        
 
     const user = new projectUser({title, desc, tech, sourceurl, previewurl ,image})
     const productRegister = await user.save()
     if (productRegister) {
         res.status(201).json({
             _id: user._id,
             
           });
         }
    } catch (error) {
     console.log(error.message)
    }
 }
 const Exprience = async(req,res)=>{
    try {
        const {post , company, desc , date} = req.body
        
 
     const user = new exprienceUser({post , company, desc , date})
     const productRegister = await user.save()
     if (productRegister) {
         res.status(201).json({
            _id: user._id,
            title: user.title,
            company: user.company,
             
           });
         }
    } catch (error) {
     console.log(error.message)
    }
 }
 const Register = async(req,res)=>{
    try {
        const password = await securePassword(req.body.password)
        
        const {name, email,} = req.body
        
        
 
     if (!name || !email || !password ) {
         res.json({msg : "plz fill all entries"})
     }
     const user = new userProduct({name, email, password})
     const productRegister = await user.save()
     if (productRegister) {
         res.status(201).json({
             _id: user._id,
             name: user.name,
             email: user.email,
            
             
           });
         }
    } catch (error) {
     console.log(error.message)
    }
 }
 const postlogin = (req, res, next) => {
    const { email, password } = req.body
    // Validate request 
    if (!email || !password) {
        
        return res.status(400).json({ error: "Email already Exits" })

    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            


            return next(err)
        }
        if (!user) {
            

            return res.status(400).json({ error: "Email already Exits" })

        }
        req.logIn(user, (err) => {
            if (err) {
                


                return next(err)
            }

            return res.status(200).json({ message: "you are done" })
        })
    })(req, res, next)
}
const Logout = (req, res) => {
    try {
        req.session.destroy();
        return res.redirect("/login")
    } catch (error) {
        console.log(error.message)
    }
}

const getExprience = async (req, res) => {
    const notes = await exprienceUser.find({ });
    
    res.json(notes);
  };
  const getProject = async (req, res) => {
    const notes = await projectUser.find({ });
    res.json(notes);
  };
  const getContact = async (req, res) => {
    const notes = await contactUser.find({ });
    res.json(notes);
  };

module.exports = {
    get,
    Contact,
    Project,
    Exprience,
    Register,
    postlogin,
    Logout,
    getExprience,
    getProject,
    getContact
}