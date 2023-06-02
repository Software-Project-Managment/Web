const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')




router.get('/',userController.allUsers)
router.get('/getstudents',userController.allStudents)
router.get('/getrequeststudents',userController.allRequestStudent)
//router.get('/:id',userController.getByID)
router.post('/',userController.postUser)
//router.patch('/:id',userController.patchUser)
router.delete('/:id',userController.deleteUser)

router.get('/:id',userController.findUser)

router.get('/coord',userController.findCoordinators)






module.exports=router
