import bcrypt from 'bcrypt'
import UserModel from '../models/User.js'
import jwt from 'jsonwebtoken'

export const register = async(req, res) => {
    try{
        const password = req.body.password

        if(password.length < 5){
            res.status(500).json({
                message: 'Пароль должен быть минимум 5 символов'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            telegramName: req.body.telegramName,
            passwordHash: hash
        })

        const existingUser = await UserModel.findOne({telegramName: doc.telegramName})
        if (existingUser) {
            res.status(501).json({
                message: 'Такой пользователь уже существует'
            })
        } else{
            const user = await doc.save()

            const token = jwt.sign(
                {
                    _id: user._id
                }, 'secret123',
                {
                    expiresIn: '30d'
                }
            )

            const {passwordHash, ...userData} = user._doc


            res.json({
                ...userData,
                token
            })
        }


    } catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
}

export const login = async(req, res) => {
    try{
        const user = await UserModel.findOne({telegramName: req.body.telegramName})

        if(!user){
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if(!isValidPass){
            return res.status(400).json({
                message: 'Неверный логин или пароль'
            })
        }

        const token = jwt.sign(
            {
                _id: user._id
            }, 'secret123',
            {
                expiresIn: '30d'
            }
        )

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData,
            token
        })

    } catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось авторизоваться'
        })
    }
}

export const getMe = async(req, res) => {
    try{
        const user = await UserModel.findById(req.userId)

        if(!user){
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }

        const {passwordHash, ...userData} = user._doc

        res.json(userData)
    } catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Нет доступа'
        })
    }
}