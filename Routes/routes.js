//import express
const express = require('express')
//import userController js file
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const multerConfig = require('../Middlewares/multerMiddleware')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

//create router for express app using Router()
const router = new express.Router()

//define different routes for server app
//register
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)
//addproject
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
//getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.getAllUserProjects)
//gethomeproject
router.get('/home/projects',projectController.getHomeProjects)
//getallproject
router.get('/projects/all',jwtMiddleware,projectController.getallprojects)
//editproject
router.put('/project/edit/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

// export router
module.exports = router