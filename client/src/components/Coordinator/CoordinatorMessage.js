import {useState,useEffect} from 'react'
import SecondBar from '../SecondBar'
import axios from 'axios'


const CoordinatorMessage = () => {
    const [messages,setMessages] = useState([])
    const [sender,setSender] = useState('')
    const [selectedMessage,setSelectedMessage] = useState(false)
    const [show,setShow] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
 const getMessages = async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/message/${user.data._id}`)
      
      setMessages(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }
  const getSender = async (idx)=>{
    try {
        const sender = await axios.get(`http://localhost:3000/api/users/${messages[idx].gonderen}`)
        
        return setSender(sender.data)
      
        
      } catch (error) {
        return  console.log(error);
      }
  }
  const handleButtonClick = (message) => {
    setSelectedMessage(message);
    setShow(!show)
  };
  useEffect(()=>{
    getMessages()
    
    
  },[])
  for (let index = 0; index < messages.length; index++) {
    getSender(index)
    
  }
 
    // /student/message/:aliciID  getMessage
    // /student/message/download/:id downloadMessageFile
  return (
    <>
    <SecondBar userType="coordinator"/>
    {messages && messages.map((message,idx)=>(
          <div key={idx}>
              <div style={{
            height:"100px",
            marginLeft:"30vw",
            marginTop:"30px",
            width:'30vw',
            display:'flex',
            flexDirection:"row",
            alignItems:'center',
            justifyContent:"space-between"
        }} >
          
            <p  >{sender.name} {sender.surname} </p>
            <p  >{message.subject}</p>
            <div >
                <button  onClick={()=>handleButtonClick(idx)}>Read Message</button>
                
            </div>
           
            
            
        </div>
        {selectedMessage === idx && show && <p style={{textAlign:"center" , marginRight:"150px" , color:'red' }}>{message.message}</p>}
          </div>
          
        
        
    ))}
    
    </>
  )
}

export default CoordinatorMessage