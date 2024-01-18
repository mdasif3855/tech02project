import { useState } from "react";
import {UseAuthcontext} from "./UseAuthcontext"


export const Uselogin =()=>{
    const [error,setError] = useState(null)
    const [isLoading,setisloading] =useState('')
    const{dispatch} = UseAuthcontext()
    const login = async(email,password)=>{
        setisloading(true)
        setError(null)
        const response = await fetch('/api/user/login',
        {method :'POST',
        headers: {'content-Type': 'application/json'},
        body : JSON.stringify({email,password})
    })
     const json = await response.json()
     if (!response.ok){
        setisloading(false)
        setError(json.error)
     }
     if(response.ok){
        //save the user jwt token to the local storage
        localStorage.setItem('user',JSON.stringify(json))
        //update the auth context
        dispatch({type : 'LOGIN',payload : json})
        //update the loading state
        setisloading(false)
     }

    }
    return {login,isLoading,error}
}