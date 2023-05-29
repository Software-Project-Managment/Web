const internshipFileModel = require('../models/internshipFileModel')
const transcriptModel = require('../models/transcriptModel')
const messageModel = require('../models/messageModel')
const SGKModel = require('../models/SgkModel')
const reportTemplateModel = require('../models/reportTemplateModel')
const notificaitonModel = require('../models/notificationModel')
const path = require('path')
const createError = require('../utils/createError')

const upload =  async (req,res,next)=>{
    try {
        const {id} = req.body
        const {imza} = req.body
        const {name} = req.body
        const {surname} = req.body
        const {no} = req.body
        const file = req.file.filename
       
        const stajFormu = await internshipFileModel.create({studentId:id,studentName:name,studentSurname:surname,studentNo:no,stajFormuUrl:file,imza:imza});

        await stajFormu.save()
        res.status(200).json({stajFormu})

    } catch (error) {
        next(error)
    }
}

const getFiles = async (req,res,next)=>{
    try {
        const files = await internshipFileModel.find({})
        res.status(200).json(files)
    } catch (error) {
        next(error)
    }

}

const getFileByID = async (req,res,next)=>{
    const {id} = req.params
    try {
        const files = await internshipFileModel.find({_id:id})
        res.status(200).json(files)
    } catch (error) {
        next(error)
    }
}

const getSGKByStudentID = async (req,res,next)=>{
    const {id} = req.params
    try {
        const files = await SGKModel.find({studentId:id})
        res.status(200).json(files)
    } catch (error) {
        next(error)
    }
}

const updateApprove = async(req,res,next)=>{
    const {id} = req.params
    try {
        const file = await internshipFileModel.findByIdAndUpdate(id,{approve:true})
        await file.save()
        res.status(200).json(file)
    } catch (error) {
        next(error)
    }
}

const getApprovedFiles = async (req,res,next)=>{
    
    try {
        const files = await internshipFileModel.find({approve:true})
        res.status(200).json(files)
    } catch (error) {
        next(error)
    }

}
const downloadFile = async(req,res,next)=>{
    const {id} = req.params
    
    const file = await internshipFileModel.findOne({studentId:id})
    if(!file){
        return next(createError(404,"No item found"))
    }
    const downloadedFile = file.stajFormuUrl
    const filePath = path.join(__dirname,`../uploads/internshipFiles/${downloadedFile}`)
    res.download(filePath)

}

const downloadSGKFile = async(req,res,next)=>{
    const {id} = req.params
    
    const file = await SGKModel.findOne({studentId:id})
    if(!file){
        return next(createError(404,"No item found"))
    }
    const downloadedFile = file.SGKUrl
    const filePath = path.join(__dirname,`../uploads/SGKFiles/${downloadedFile}`)
    res.download(filePath)

}

const uploadTranscript =  async (req,res,next)=>{
    try {
        const {id} = req.body
        const {name} = req.body
        const {surname} = req.body
        const {no} = req.body
        const file = req.file.filename
       
        const transcriptFormu = await transcriptModel.create({studentId:id,studentName:name,studentSurname:surname,studentNo:no,transcriptFormuUrl:file});

        await transcriptFormu.save()
        res.status(200).json({transcriptFormu})

    } catch (error) {
        next(error)
    }
}

const uploadSGK = async(req,res,next)=>{
    try {
        const {id} = req.body
        const {name} = req.body
        const {surname} = req.body
        const {no} = req.body
        const file = req.file.filename
       
        const SGKFormu = await SGKModel.create({studentId:id,studentName:name,studentSurname:surname,studentNo:no,SGKUrl:file});

        await SGKFormu.save()
        res.status(200).json({SGKFormu})

    } catch (error) {
        next(error)
    }
}

const getTranscript = async (req,res,next)=>{
    try {
        const transcripts = await transcriptModel.find()
        res.status(200).json(transcripts)
    } catch (error) {
        next(error)
    }

}

const downloadTranscript = async(req,res,next)=>{
    const {id} = req.params
    
    const transcript = await transcriptModel.findOne({studentId:id})
    if(!transcript){
        return next(createError(404,"No item found"))
    }
    const downloadedFile = transcript.transcriptFormuUrl
    const filePath = path.join(__dirname,`../uploads/transcriptFiles/${downloadedFile}`)
    res.download(filePath)

}


const uploadMessage =  async (req,res,next)=>{
    try {
        if(req.file){
        const {gonderenID} = req.body
        const {aliciID} = req.body
        const {subject} = req.body
        const {message} = req.body
        const file = req.file.filename
       
        const messageFormu = await messageModel.create({gonderen:gonderenID,alici:aliciID,subject:subject,message:message,messageFileUrl:file});

        await messageFormu.save()
        res.status(200).json({messageFormu})
        }else{
        const {gonderenID} = req.body
        const {aliciID} = req.body
        const {subject} = req.body
        const {message} = req.body
      
       
        const messageFormu = await messageModel.create({gonderen:gonderenID,alici:aliciID,subject:subject,message:message});

        await messageFormu.save()
        res.status(200).json({messageFormu})
        }
        

    } catch (error) {
        next(error)
    }
}

const getMessages = async (req,res,next)=>{
    const {aliciID} = req.params
    try {
        const messages = await messageModel.find({alici:aliciID})
        res.status(200).json(messages)
    } catch (error) {
        next(error)
    }

}

const downloadMessageFile = async(req,res,next)=>{
    const {gonderenID} = req.params
    
    const messageFile = await messageModel.findOne({gonderen:gonderenID})
    if(!messageFile){
        return next(createError(404,"No item found"))
    }
    const downloadedFile = messageFile.messageFileUrl
    const filePath = path.join(__dirname,`../uploads/messageFiles/${downloadedFile}`)
    res.download(filePath)

}

const uploadReportTemplate =  async (req,res,next)=>{
    try {
        const {id} = req.body
        const {name} = req.body
        const {surname} = req.body
        const {no} = req.body
        const file = req.file.filename
       
        const reportTemplateFormu = await reportTemplateModel.create({studentId:id,studentName:name,studentSurname:surname,studentNo:no,reportTemplateUrl:file});

        await reportTemplateFormu.save()
        res.status(200).json({reportTemplateFormu})

    } catch (error) {
        next(error)
    }
}

const getReportTemplate = async (req,res,next)=>{
    try {
        const templates = await reportTemplateModel.find()
        res.status(200).json(templates)
    } catch (error) {
        next(error)
    }

}

const downloadReportTemplate = async(req,res,next)=>{
    const {id} = req.params
    
    const template = await reportTemplateModel.findOne({studentId:id})
    if(!template){
        return next(createError(404,"No item found"))
    }
    const downloadedFile = template.reportTemplateUrl
    const filePath = path.join(__dirname,`../uploads/reportTemplateFiles/${downloadedFile}`)
    res.download(filePath)

}

//GET NOTIFICATION
const getNotifications = async (req,res,next)=>{
    const {aliciID} = req.params
    try {
        const notifications = await notificaitonModel.find({alici:aliciID})
        res.status(200).json(notifications)
    } catch (error) {
        next(error)
    }

}

//UPLOAD NOTIFICATION
const uploadNotification =  async (req,res,next)=>{
    try {
        
        const {name} = req.body
        const {aliciID} = req.body
        const {subject} = req.body
     
      
       
        const notification = await notificaitonModel.create({gonderen:name,alici:aliciID,subject:subject});

        await notification.save()
        res.status(200).json(notification)
        
        

    } catch (error) {
        next(error)
    }
}
module.exports={
    upload,
    getFiles,
    downloadFile,
    uploadTranscript,
    getTranscript,
    downloadTranscript,
    uploadMessage,
    getMessages,
    downloadMessageFile,
    getApprovedFiles,
    getFileByID,
    updateApprove,
    uploadSGK,
    getSGKByStudentID,
    downloadSGKFile,
    uploadReportTemplate,
    getReportTemplate,
    downloadReportTemplate,
    getNotifications,
    uploadNotification
}