import { useState } from "react";
import {UseAuthcontext} from "./UseAuthcontext"


export const Usesignup =()=>{
    const [error,setError] = useState(null)
    const [isLoading,setisloading] =useState('')
    const{dispatch} = UseAuthcontext()
    const singup = async(firstname,lastname,email,password,confirmpassword,phonenumber)=>{
        setisloading(true)
        setError(null)
        const response = await fetch('/api/user/signup',
        {method :'POST',
        headers: {'content-Type': 'application/json'},
        body : JSON.stringify({firstname,lastname,email,password,confirmpassword,phonenumber})
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
    return {singup,isLoading,error}
}