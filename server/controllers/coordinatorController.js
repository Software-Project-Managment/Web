const CoordinatorInternshipModel = require('../models/CoordinatorInternshipModel')
const path = require('path')


const addFile= async (req,res,next)=>{
    try {
        const {id} = req.body
        const file = req.file.filename
        const coordStaj = await CoordinatorInternshipModel.create({CoordinatorID:id,fileName:file});
        await coordStaj.save()
       
        res.status(200).json({coordStaj})

    } catch (error) {
        next(error)
    }


}



const getFile= async (req,res,next)=>{
    try {
        const files = await CoordinatorInternshipModel.find()
        res.status(200).json(files)
    } catch (error) {
        next(error)
    }
}


const downloadFile = async(req,res,next)=>{
    const {id} = req.params
    
    const file = await CoordinatorInternshipModel.findOne({CoordinatorID:id})
    if(!file){
        return next(createError(404,"No item found"))
    }
    const downloadedFile = file.fileName
    const filePath = path.join(__dirname,`../uploads/coordinatorIF/${downloadedFile}`)
    res.download(filePath)

}

module.exports={
    addFile,
    getFile,
    downloadFile
}

