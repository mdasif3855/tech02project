import React, { useState } from 'react'
import { Usesignup } from '../Hooks/UseSignup'
const Signup = () => {
  const [firstname,setfirstname] = useState('')
  const [lastname,setlastname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [confirmpassword,setconfirmpassword] = useState('')
    const [phonenumber,setphonenumber] = useState('')
    const {singup,isLoading,error} =Usesignup()
    const handlesubmit =async (e)=>{
          e.preventDefault()
        // console.log(firstname,lastname,email,password,confirmpassword,phonenumber)
          await singup(firstname,lastname,email,password,confirmpassword,phonenumber)
    }
  return (
    <div className='flex justify-center '>
        <form  className='flex flex-col px-20 p-10 bg-slate-100   gap-5 text-lg  w-2/4 font-medium' onSubmit={handlesubmit}>
            <div> Signup</div>
            <label>First Name</label>
            <input type='text' onChange={(e)=>setfirstname(e.target.value)}/>
            <label>LastName</label>
            <input type='text' onChange={(e)=>setlastname(e.target.value)}/>
            <label>Email</label>
            <input type='text' onChange={(e)=>setemail(e.target.value)}/>
            <label>Password</label>
            <input type='text' onChange={(e)=>setpassword(e.target.value)}/>
            <label>confirmPassword</label>
            <input type='text' onChange={(e)=>setconfirmpassword(e.target.value)}/>
            <label>Phone Number</label>
            <input type='text' onChange={(e)=>setphonenumber(e.target.value)}/>
            <button disabled={isLoading} className='bg-lime-500 p-10'> Signup</button>
            {error && <div className='text-red-700'> {error} </div>}
        </form>
    </div>
  )
}

export default Signup