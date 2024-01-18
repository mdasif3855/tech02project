import React from 'react'
import { useState } from 'react'
import { UseBlogcontex } from '../Hooks/UseBlogcontex'
import {UseAuthcontext} from'../Hooks/UseAuthcontext'
import {useEffect } from 'react'
const Editpost = (id) => {
  const [title,settitle] = useState('')
    const [desc,setdesc] = useState('')
    const handlesubmit = async(e)=>{
      e.preventDefault()
      if(!user){
         
          return
      }

      const blog = {title,desc}

      const response = await fetch(`/api/blog/${id}`,{
          method : 'PATCH',body :JSON.stringify(blog),
           headers:{'Content-Type' :'application/json', 
           'Authorization': `Bearer ${user.token}` }
      })
      const json = await response.json()

      if (!response.ok){
        
      }
      if (response.ok){

       settitle('')
       setdesc('')
      
          dispatch({type: 'CREATE_BLOG',payload: json})
      }
  }
  const {Blogs,dispatch} =UseBlogcontex()
  const {user} = UseAuthcontext()
 


  useEffect(() => {

    const fetchBlogs = async (id) => {
      const response = await fetch(`/api/blog/${id}`,{headers :{
        'Authorization': `Bearer ${user.token}`
      }})
      const json = await response.json()
      if (response.ok) {
        dispatch({type:'SET_BLOGS', payload : json})
      }
    }
    if(user){
      fetchBlogs()
    }
  }, [dispatch,user])
  return (
    <div>

   <><h2 className='text-2xl text-gray-500 font-semibold'> Edit a Blog</h2><form onSubmit={handlesubmit} className='flex flex-col'>
        <label className='text-lg text-gray-500 font-semibold'> Blog Title</label>
        <input className='h-10' type='text' onChange={(e) => settitle(e.target.value)} defaultValue={Blogs.title} />
        <label className=' text-lg text-gray-500 font-semibold'> Description</label>
        <input className='h10' type='text' onChange={(e) => setdesc(e.target.value)} defaultValue={Blogs.desc} />
        <button className=' bg-cyan-500 p-4  rounded-md m-5 text-white font-medium text-lg'> Submit</button>
      
      </form></>
  
    </div>
  )
  
}

export default Editpost