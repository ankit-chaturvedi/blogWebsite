import Router from 'express'
import {handleSignup} from '../controllers/controllers.js'
const router = new Router()

 router.route('/signup').post(handleSignup)

export default router