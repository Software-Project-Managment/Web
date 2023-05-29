const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const upload = require('../middleware/multer')
const uploadMessage = require('../middleware/messageMulter')
const transcriptMulter = require('../middleware/transcriptMulter')
const SGKMulter = require('../middleware/sgkMulter')
const reportTemplateMulter = require('../middleware/reportTemplateMulter')





router.post('/upload/internship',upload.single('file'),studentController.upload)
router.get('/internship',studentController.getFiles)
router.post('/internship/approved/:id',studentController.updateApprove)
router.get('/internship/approved',studentController.getApprovedFiles)
router.get('/internship/download/:id',studentController.downloadFile)

router.post('/upload/transcript',transcriptMulter.single('file'),studentController.uploadTranscript)
router.get('/transcript',studentController.getTranscript)
router.get('/transcript/download/:id',studentController.downloadTranscript)

//REPORT TEMPLATE
router.post('/upload/reporttemplate',reportTemplateMulter.single('file'),studentController.uploadReportTemplate)
router.get('/reporttemplate',studentController.getReportTemplate)
router.get('/reporttemplate/download/:id',studentController.downloadReportTemplate)

router.post('/upload/message',uploadMessage.single('file'),studentController.uploadMessage)
router.get('/message/:aliciID',studentController.getMessages)
router.get('/message/download/:id',studentController.downloadMessageFile)


router.post('/upload/sgk',SGKMulter.single('file'),studentController.uploadSGK)
router.get('/sgk/:id',studentController.getSGKByStudentID)
router.get('/sgk/download/:id',studentController.downloadSGKFile)






module.exports=router