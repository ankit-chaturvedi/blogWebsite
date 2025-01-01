import Router from 'express'
import {handleSignup, handleBlog, createBlog} from '../controllers/controllers.js'
const router = new Router()

 router.route('/signup').post(handleSignup)
router.route('/').get(handleBlog).post(createBlog)


export default router