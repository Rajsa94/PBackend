const express = require('express')
const app = express();
const port = process.env.Port || 4000;
require('dotenv').config()
const passport = require('passport')
var session = require('express-session')
const MongoDbStore = require('connect-mongo')

// userlogin funsnality define
app.use(session({
    secret: 'keybord cat',
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
        mongoUrl: "mongodb+srv://Rathore:Ra9680879504%23@cluster0.1dhc6u9.mongodb.net/Resume",


    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

const passportInit = require('./config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user

    next()

})

app.use(express.static("uploads"))
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



const route = require('./router/route')
app.use(route)



app.listen(port, () => {
    console.log(`rajsa is connected to backend ${port}`)
})

