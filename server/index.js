import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import {loginValidation, registerValidation} from "./validation.js";
import * as UserController from './controllers/UserController.js'
import handleValidationErrors from "./utils/handleValidationErrors.js";
import checkAuth from "./utils/checkAuth.js"
import UserScheme from "./models/User.js";

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected succesfully'))
    .catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

app.listen(process.env.PORT || 5555 , (err)=> {
    if(err){
        console.log(err)
    }

    console.log('SERVER OK')
})