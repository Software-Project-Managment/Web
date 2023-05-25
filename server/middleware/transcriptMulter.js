const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join( "uploads/transcriptFiles"))
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() +path.extname(file.originalname));
    }

})


const fileFilter= (req,file,cb)=>{

    if(
        file.mimetype == "image/jpeg" || 
        file.mimetype == "image/png" || 
        file.mimetype == "application/pdf" 
    ){cb(null,true)}
    else{
        cb(null,false)
    }


}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

module.exports=upload