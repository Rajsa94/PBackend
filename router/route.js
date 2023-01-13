const express = require('express')
const route = express.Router()
const userControler = require('../controler/userControler')
const multer = require("multer")


require('../db/db')
route.use(express.json())
route.use(express.urlencoded({ extended: false }))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  });
  
  // this code will handle file types like jpeg, jpg, and png
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  
  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5 // define limit 5mb max file upload size
    },
    fileFilter: fileFilter
  });
route.use(express.static("../uploads"))


route.get('/', userControler.get)
route.post('/contact', userControler.Contact)
route.post('/project',upload.single('image'), userControler.Project)
route.post('/exprience', userControler.Exprience)
route.post('/register', userControler.Register)
route.post('/login', userControler.postlogin)
route.get('/logout', userControler.Logout)


route.get('/getexprience', userControler.getExprience)
route.get('/getproject', userControler.getProject)
route.get('/getcontact', userControler.getContact)

module.exports = route;