import React from 'react'
import CreatePost from '../Components/CreatePost'
import {useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { UseBlogcontex } from '../Hooks/UseBlogcontex'
import Deletebutton from '../Components/Deletebutton';

import {UseAuthcontext} from'../Hooks/UseAuthcontext'
import { Link } from 'react-router-dom';

const Home = () => {


  const {Blogs,dispatch} =UseBlogcontex()
  const {user} = UseAuthcontext()
  useEffect(() => {

    const fetchBlogs = async () => {
      const response = await fetch('/api/blog',{headers :{
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
    <section className=' '>
      <div className='flex p-10 mx-auto px-20 text-3xl font-medium text-white bg-indigo-600'>The Home Page</div>
            <div className=' grid grid-cols-2'>
            <div className=' p-10 bg-slate-50'>
        {Blogs && Blogs.map((blog) => (
        <><div className='px-10 text-3xl font-medium text-cyan-600 ' key={blog._id}> {blog.title} </div>
        <div className='px-10 font-normal text-gray-700'>{blog.desc} </div>
        <Deletebutton id ={blog._id}> <MdDelete/> </Deletebutton>
        <Link  id ={blog._id} to='/editpost'>  <CiEdit/></Link>
   
        </>
        
        
        ))}
      </div>
<CreatePost></CreatePost></div>
      </section>
  )
}

export default Home



