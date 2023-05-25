import React,{useState} from 'react'
import Navbar2 from '../Navbar2'
import axios from 'axios'



// const jwt = JSON.parse(localStorage.getItem('user'))
// const config = {
//   headers: { Authorization: `Bearer ${jwt.data.token}` }
// };
const CoordinatorUploadInt = () => {
  const [file,setFile]=useState()
  const [fileName, setFileName] = useState('Staj Formu Seçiniz');
  const user = JSON.parse(localStorage.getItem('user'))

  const handleSubmit = (e)=>{
    try {
      
    const data =new FormData()
    data.append("file",file)
    data.append("id",user.data._id)
   

     console.log(data);
     const res =axios.post('http://localhost:3000/coordinator/',data)
     console.log(res);
     alert('file upload successful')
    } catch (error) {
      console.log(error);
    }
    

  }
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
      <form action='#' >
        <div>
        <input type="file" id='file' name='file' onChange={e=>{
           setFile(e.target.files[0]);
           setFileName(e.target.files[0].name);
        }}/>
        <label htmlFor="stajFormu">{fileName}</label>
        </div>
        
      </form>
      <button onClick={handleSubmit} >Send</button>
    </>
  )
}

export default CoordinatorUploadInt