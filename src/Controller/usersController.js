import User from '../Model/usersModel.js'

export const addUser = async(req,res) => {
    
    const{num, email, password} = req.body
    if(num && email && password)
    {
        try{
            await User.create ({
                num,
                email,
                password
            })
            console.log('User is successfully created')
            res.json("User is successdully created")
        }
        catch(err)
        {
            res.json('failed to add data')
        }
    }
    else
    {
        res.json('Enter Complete Data')
    }
}

export const getAllUser = async(req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err){
        res.json('Failed to retrieve users')
    }
}