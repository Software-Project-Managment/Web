import React,{useEffect, useState} from 'react'
import SecondBar from '../SecondBar'
import axios from 'axios'
import UpperMessage from './UpperMessage'

const Message = () => {
  const [selectedCoord,setselectedCoord]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')
  const [file,setFile]=useState('')
  const [coords,setCoords]=useState([])
  const user = JSON.parse(localStorage.getItem('user'))
 
 

  
  const getCoordinators= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/api/users`)
      
      setCoords(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  const handleSubmit = (e)=>{
    try {
    const data =new FormData()
  
    data.append("gonderenID",user.data._id)
    data.append("aliciID",selectedCoord)
    data.append("subject",subject)
    data.append("message",message)
    if(file){
      data.append("file",file)
    }
    
  
    
     console.log(data);
     const res =axios.post('http://localhost:3000/student/upload/message',data)
     console.log(res);
     alert('Message has been sent')
   
    } catch (error) {
      console.log(error);
    }
    

  }
  useEffect(()=>{
    getCoordinators()
  },[])
  return (
    
    <>
     <UpperMessage />
   <SecondBar userType="student" />
   
   <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/assets/logo.png")',
          backgroundSize: "500px 500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      ></div>
      <div style={{marginLeft:"500px" ,marginTop:'1px',}}>
      <h4 >NEW MESSAGE</h4>
      <form action='#'  >
        <div>
          <div>
          <label htmlFor='a'>Contacts</label>
        <select style={{
              width: '20%',
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "20px"
          }} id='a' value={selectedCoord} onChange={(e)=>setselectedCoord(e.target.value)}>
            <option value="" key="1">Select</option>
            { coords && coords.map((coord)=>(
              <option value={coord._id} key={coord._id}>{coord.name}{coord.surname} </option>
            ))}
          
        </select>
          </div>

          <div>
          <label htmlFor='subject'>Subject</label>
          <input style={{
              width: '20%',
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "20px"
          }} type="text"  id='subject' name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
          </div>


          <div>
          <label htmlFor='message'>Message</label>
          <input style={{
              width: '20%',
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginBottom: "20px"
          }} type="text"  id='message' name='message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          </div>

          <div>
        <input type="file" id='file' name='file' onChange={e=>{
           setFile(e.target.files[0]);
          
        }}/>
      
        </div>

      
      
        
        </div>
        
      </form>
      
      </div>
     
      <button onClick={handleSubmit} style={{marginLeft:"50px"}} >Send</button>
     
    </>
  )
}

export default Message