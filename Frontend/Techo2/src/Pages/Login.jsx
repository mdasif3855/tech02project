import React, { useState } from 'react'
import {Uselogin} from '../Hooks/Uselogin'
const Login = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const {login,isLoading,error} = Uselogin()
    const handlesubmit =async (e)=>{
         e.preventDefault()
          await login(email,password)
    }
  return (
    <div className=''>
        <form className='flex flex-col px-20 p-10 bg-slate-100 gap-5 text-2xl font-medium' onSubmit={handlesubmit}>
            <div> Login</div>
            <label>Email</label>
            <input type='text' onChange={(e)=>setemail(e.target.value)}/>
            <label>Password</label>
            <input type='text' onChange={(e)=>setpassword(e.target.value)}/>
            <button disabled={isLoading} className='bg-lime-500 p-10'> Login</button>
            {error && <div className='text-red-700'> {error} </div>}
        </form>
    </div>
  )
}

export default Login