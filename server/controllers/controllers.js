
import user from '../schema/user.schema.js'

const handleSignup = async (req,res,next)=>{
    const {username, password} = req.body
    if(!username || !password){
           return  res.status(401).send('Username or password is required')
    }
    try{
        await user.create({ username, password})
        res.status(201).send('User created')
        console.log('successfully created')
    }
    catch (error){
        console.error(error)
        res.send(error)
    }
}

export {handleSignup}