const express = require('express')
require('./db/dbConnection')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const studentRouter = require('./routes/studentRouter')
const coordinatorRouter = require('./routes/coordinatorRouter')
const cookieParser = require('cookie-parser')


const app = express()


app.use(cors({credentials:true , origin:'http://localhost:3001'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/student',studentRouter)
app.use('/coordinator',coordinatorRouter)

app.use((err,req,res,next)=>{
const errorStatus = err.status || 500
const errorMessage = err.message || "Something went wrong!"

return res.status(errorStatus).send(errorMessage)


})

app.listen(3000,(req,res)=>{
    
    console.log("Sistem 3000 portunda çalışıyor!!!");
})
