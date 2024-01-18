import React from 'react'
import { Link } from 'react-router-dom'
import { Uselogout } from '../Hooks/Uselogout'
import { UseAuthcontext } from '../Hooks/UseAuthcontext'
const Navbar = () => {
  const {logout}= Uselogout()
  const {user} = UseAuthcontext()
  const handleclick =()=>{ 
       logout()
  }
  return (
    <div className='flex p-10 px-20 justify-between bg-slate-200 '>
        <div className=' text-lg font-bold  flex text-indigo-700 '> IM NAV BAR</div>
        <div className=' flex text-lg gap-2 font-medium'> 
        {user && (
        <><div>{user.email}</div><div> <button onClick={handleclick}> Logout</button></div></>
        )}
          
          {!user && (
          <><Link to="/login"> Login</Link><Link to="/signup"> Signup</Link></>
          )}

        </div>
    </div>
  )
}

export default Navbar