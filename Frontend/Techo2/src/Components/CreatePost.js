import React, { useState } from 'react'
import { UseBlogcontex } from '../Hooks/UseBlogcontex'
import {UseAuthcontext} from'../Hooks/UseAuthcontext'
const CreatePost = () => {
    const{dispatch} = UseBlogcontex()
    const {user} = UseAuthcontext()
    const [title,settitle] = useState('')
    const [desc,setdesc] = useState('')
    const [err,seterr] = useState('')
    const [emptyFields, setEmptyFields] = useState([])
    const handlesubmit = async(e)=>{
        e.preventDefault()
        if(!user){
            seterr('You must be logged in')
            return
        }

        const blog = {title,desc}

        const response = await fetch('/api/blog/',{
            method : 'POST',body :JSON.stringify(blog),
             headers:{'Content-Type' :'application/json', 
             'Authorization': `Bearer ${user.token}` }
        })
        const json = await response.json()

        if (!response.ok){
            seterr(json.err)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok){

         settitle('')
         setdesc('')
            seterr(null)
            setEmptyFields([])
            dispatch({type: 'CREATE_BLOG',payload: json})
        }
    }


  return (
    <div className=' bg-slate-50 '>
        <h2 className='text-2xl text-gray-500 font-semibold'> Post a Blog</h2>
        <form onSubmit={handlesubmit} className='flex flex-col'>
<label className='text-lg text-gray-500 font-semibold'> Blog Title</label>
<input className={`h-10 ${emptyFields.includes('title') ? 'error' : ''}`}  type='text' onChange={(e)=> settitle(e.target.value)} value={title}   /> 
<label className=' text-lg text-gray-500 font-semibold'> Description</label>
<input className={`h-10 ${emptyFields.includes('desc') ? 'error' : ''}`} type='text' onChange={(e)=> setdesc(e.target.value)} value={desc}/>
<button className=' bg-cyan-500 p-4  rounded-md m-5 text-white font-medium text-lg'> Submit</button> 
{err && <div className=''>{err} </div>}
        </form>
    </div>
  )
}

export default CreatePost