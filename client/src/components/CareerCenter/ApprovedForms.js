import React,{useEffect, useState} from 'react'
import Navbar2 from '../Navbar2'
import axios from 'axios'

// const jwt = JSON.parse(localStorage.getItem('user')) || null
// const config = {
//   headers: { Authorization: `Bearer ${jwt.data.token}` }
// };
const ApprovedForms = () => {


  const [items,setItems]=useState([])
  const [file,setFile]=useState()
  const getItems= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/internship/approved`)
      
      setItems(res.data)
      
      
    } catch (error) {
      console.log(error);
    }
   
  }


  const uploadFile = async (item)=>{
    try {
      
      const data =new FormData()
    data.append("file",file)
    data.append("id",item.studentId)
    data.append("name",item.studentName)
    data.append("surname",item.studentSurname)
    data.append("no",item.studentNo)
     
  
       console.log(data);
       const res =axios.post('http://localhost:3000/student/upload/sgk',data)
       console.log(res);
       alert('file upload successful')
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
          <div key={item._id} style={{marginLeft:'10px'}}>
            <h3>{item.studentName.toUpperCase()} {item.studentSurname.toUpperCase()} {item.studentNo}</h3>
            <form action='#' >
        <div>
        <input type="file" id='file' name='file' onChange={e=>{
           setFile(e.target.files[0]);
          
        }}/>
      
        </div>
        
      </form>
          <button onClick={()=>uploadFile(item) }>Send SGK File </button>
            
          </div>
        )

        )}
      </div>
      
    </>
  )
}

export default ApprovedForms