import React,{useState} from 'react'
import Navbar2 from '../Navbar2'
import axios from 'axios'
const UploadTranscript = () => {
  const [transcript,setTranscript]=useState()
  // const [fileName, setFileName] = useState('Transcript Seçiniz');
  const user = JSON.parse(localStorage.getItem('user'))

  const handleSubmit = (e)=>{
    try {
    const data =new FormData()
    data.append("file",transcript)
    data.append("id",user.data._id)
    data.append("name",user.data.name)
    data.append("surname",user.data.surname)
    data.append("no",user.data.username)

     console.log(data);
     const res =axios.post('http://localhost:3000/student/upload/transcript',data)
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
      {/* <form action='#' >
        <div>
        <input type="file" id='file' name='file' onChange={e=>{
           setTranscript(e.target.files[0]);
           setFileName(e.target.files[0].name);
        }}/>
        <label htmlFor="stajFormu">{fileName}</label>
        </div>
        
      </form>
      <button onClick={handleSubmit} >Send</button> */}
      
      <form action='#'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <label htmlFor="file-input" style={{borderColor:"black", marginTop:"8rem" }}>
          <span style={{display:"inline-block",width:"1049px",textAlign:"center", border:"1px solid black", padding:'1rem 2rem',fontSize:"1.25cm", backgroundColor:"white", color: 'black', borderRadius: '4px', cursor: 'pointer',}}>
            Upload the Transcript
          </span>
          <input
            id="file-input"
            type="file"
            style={{ display: 'none' }}
            onChange={e=>{
              setTranscript(e.target.files[0]);
             
           }}

          />
        </label>
        
       
        <div style={{ display: 'flex', gap: '1rem' }}>
          
          <button style={{ padding: '1rem 2rem', backgroundColor: 'white',marginTop:"3cm", color: 'black', borderRadius: '4px', fontSize: '1cm' ,width:"550px",height:"150px",}} >Control</button>
          <button  onClick={handleSubmit} style={{ padding: '1rem 2rem', backgroundColor: 'white', color: 'black',marginTop:"3cm", borderRadius: '4px', fontSize: '1cm',width:"550px",height:"150px", }} >Send to Coordinator</button>
        </div>
      </div>
      </form>
    
    </>
  )
}

export default UploadTranscript