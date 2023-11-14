//import express
const express = require('express')
//import userController js file
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const multerConfig = require('../Middlewares/multerMiddleware')

//create router for express app using Router()
const router = new express.Router()

//define different routes for server app
//register
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)
//addproject
router.post('/projects/add',multerConfig.single('projectImage'),projectController.addProject)


// export router
module.exports = router