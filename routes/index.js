import express from 'express';
import homeRoutes from './homeRoutes.js'
import sellerRoutes from './sellerRoutes.js'
const Router= express.Router()

Router.use('/',homeRoutes)
Router.use('/seller',sellerRoutes)

export default Router