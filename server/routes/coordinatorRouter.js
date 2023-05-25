const express = require('express')
const router = express.Router()
const coordinatorController = require('../controllers/coordinatorController')
const upload = require('../middleware/coordMulter')



router.post('/',upload.single('file'),coordinatorController.addFile)
router.get('/',coordinatorController.getFile)
router.get('/download/:id',coordinatorController.downloadFile)


module.exports=router