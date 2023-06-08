import express from 'express';
import { home ,login,loginUser,register, signup} from '../controller/homeController.js';

const Router= express.Router()

Router.get('/',home)
Router.get('/register',register)
Router.post('/signup',signup)
Router.get('/login',login)
Router.post('/login-user',loginUser)
export default Router