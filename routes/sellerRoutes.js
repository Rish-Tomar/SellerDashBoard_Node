import express from 'express';
import { sellerURl } from '../controller/homeController.js';
import { addCategory } from '../controller/sellerDashboardController.js';

const Router= express.Router()

Router.get('/:id',sellerURl)
Router.post('/add-category/:id',addCategory)

export default Router