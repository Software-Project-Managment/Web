import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const useLogin=()=>{

const[error,setError]=useState(null)
const[isLoading,setIsLoading]=useState(null)
const {dispatch}=useAuthContext()
const history = useNavigate()

 const login =async (username,password,type,role)=>{
    setIsLoading(true)
    setError(null)

    if(type==="student"){
        try {
          const res = await axios.post('http://localhost:3000/api/auth/login',{
            username,password,role
          },{withCredentials: true})
          if(res){
            console.log(res.data);
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(res))

            //update the auth context
            dispatch({type:'LOGIN',payload:res})
            
            setIsLoading(false)
            
            history('/student')
          }
         
          
        } catch (error) {
          setError(error.response.data)
          setIsLoading(false)
          console.log(error.response.data);
        }
      }
      if(type==="coordinator"){
        try {
          const res = await axios.post('http://localhost:3000/api/auth/login',{
            username,password,role
          },{withCredentials: true})
          if(res){
            console.log(res.data);
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(res))

            //update the auth context
            dispatch({type:'LOGIN',payload:res})
            
            setIsLoading(false)
            
            history('/coordinator')
          }
         
          
        } catch (error) {
          setError(error.response.data)
          setIsLoading(false)
          console.log(error.response.data);
        }
      }
      if(type==="career"){
        try {
          const res = await axios.post('http://localhost:3000/api/auth/login',{
            username,password,role
          },{withCredentials: true})
          if(res){
            console.log(res.data);
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(res))

            //update the auth context
            dispatch({type:'LOGIN',payload:res})
            
            setIsLoading(false)
            
            history('/career')
          }
         
          
        } catch (error) {
          setError(error.response.data)
          setIsLoading(false)
          console.log(error.response.data);
        }
      }

      if(type==="admin"){
        try {
          const res = await axios.post('http://localhost:3000/api/auth/login',{
            username,password,role
          },{withCredentials: true})
          if(res){
            console.log(res.data);
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(res))

            //update the auth context
            dispatch({type:'LOGIN',payload:res})
            
            setIsLoading(false)
            
            history('/admin')
          }
         
          
        } catch (error) {
          setError(error.response.data)
          setIsLoading(false)
          console.log(error.response.data);
        }
      }

      
}
return {login,isLoading,error}


}
