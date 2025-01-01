
import user from '../schema/user.schema.js'
import blog from '../schema/blog.schema.js'
import mongoose from "mongoose";


const handleSignup = async (req,res)=>{
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

const handleBlog = async (req, res) =>{

    try{
        const response = await blog.find({})
        res.json(response)
    }
    catch (err){
        console.log(err)
        res.json({ status:" Aborted", err: err})
    }

}

const createBlog = async  (req, res) =>{
    const {title, img, content} = req.body
    if(!title || !img || !content){
        return res.json("values missing")
    }
    try{
        const newPost = await blog.create({title, img, content})
        res.json("successfully created new blog")
    }
    catch (err){
        console.log(err)
    }
}

export {handleSignup, handleBlog, createBlog}