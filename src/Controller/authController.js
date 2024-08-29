import express from 'express'
import User from '../Model/usersModel.js'

export const login = async(req,res) => {
    const {email, password} = req.body
    try{
        const user  = await User.findOne({email})
        if(user.password === password)
        {

            res.json('login successfully')
        }
        else
        {
            res.json('User not found')
        }
    }
    catch(err){
        res.json('Enter Correct Data')
    }
}

export const signUp = async(req,res) => {
    const {email, password, confirmPwd} = req.body
    try{
    if(email && password && confirmPwd)
    {
        const existingUser  = await User.findOne({email})
        if(!existingUser)
        {
            if(password === confirmPwd)
            {
                const newUser = new User ({email,password})
                await newUser.save()
                res.json('Registered Successfully')
            }
            else
            {
                res.json('Cfm Pwd & Pwd not matched')
            }
        }
        else if(existingUser)
        {
            res.json('User Already Exist')
        }
    }
    else
    {
        res.json('Enter Missing Data')
    }
    }
    catch(err){
        res.json('error')
    }
}