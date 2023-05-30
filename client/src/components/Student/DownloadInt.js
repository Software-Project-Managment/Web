import React,{useEffect, useState} from 'react'
import Navbar2 from '../Navbar2'
import axios from 'axios'

// const jwt = JSON.parse(localStorage.getItem('user')) || null
// const config = {
//   headers: { Authorization: `Bearer ${jwt.data.token}` }
// };
const DownloadInt = () => {


  const [items,setItems]=useState([])
  
  const getItems= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/coordinator`)
      
      setItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }


  const downloadFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/coordinator/download/${id}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${items[0].fileName}`
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
    <Navbar2/>
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
          <div key={item._id} style={{backgroundColor:"Whitesmoke",width:"1000px",height:"400px",position:"absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)", marginLeft:'10px' }}>
            <h3>{item.fileName}</h3>  
            <div style={{position:"absolute",top:"0"}}>
            <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Stotb-RTT7VJ0HEp63plPaqZ8MTmE7XWJCi8p4I&s'  style={{ width:"70px",height:"70px",marginLeft:"58rem"}} />
            <button style={{marginLeft:"57.5rem"}} onClick={()=>downloadFile(item.CoordinatorID)}>Download file</button>
            </div>
         
          </div>
        )

         ) }
       
        
      </div>
      
    </>
  )
}

export default DownloadInt