import React,{useEffect, useState} from 'react'
import Navbar2 from '../Navbar2'
import axios from 'axios'
import SecondBar from '../SecondBar'

// const jwt = JSON.parse(localStorage.getItem('user')) || null
// const config = {
//   headers: { Authorization: `Bearer ${jwt.data.token}` }
// };
const IncomingMessage = () => {
const kullanici = JSON.parse(localStorage.getItem('user'))
//kullanici.data._id

  const [items,setItems]=useState([])

  
  const getItems= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/sgk/${kullanici.data._id}`)
      
      setItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }


  const downloadFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/student/internship/download/${id}` , {responseType:'blob'})
  
       const user = await axios.get(`http://localhost:3000/api/users/${id}`)
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${user.data.username}`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }

  
  

  useEffect(()=>{
    getItems()
  },[])

  return (
    <>
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
      <div>
        {items && items.map((item)=>(
          <div key={item._id} style={{marginLeft:'10px'}}>
            <h3>SGK FILE</h3>
            <button onClick={()=>downloadFile(item.studentId)}>Download file</button>
            
          </div>
        )

        )}
      </div>
      
    </>
  )
}

export default IncomingMessage