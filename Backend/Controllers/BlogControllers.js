const Blogmodel = require('../Models/Blogmodel')
const mongoose = require('mongoose')

//get all blogs

const GetBlogs = async (req,res)=>{
//    const user_id = req.user._id
  
    // console.log(user_id)
    const allblogs = await Blogmodel.find({}).sort({createdAt : -1})
    res.status(200).json(allblogs)
}


//get a single blog
const SingleBlog = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "NO SUCH FILE FOUND"})
    }
    const ablog = await Blogmodel.findById(id)
    if(!ablog){
        return res.status(404).json({error : "NO SUCH FILE FOUND"})
    }
    res.status(200).json(ablog)
}


//create a new blog
const CreateBlog = async(req,res) => {
    const { title, desc } = req.body
   
    let emptyFields = []

    if(!title) {
      emptyFields.push('title')
    }
    if(!desc) {
      emptyFields.push('desc')
    }
   
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    try {
        // const{userid}  = req.user._id
        const blog = await Blogmodel.create({title,desc})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({err : error.message})
    }
}


//delete a blog
const deleteblog = async(req,res)=> {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "NO SUCH FILE FOUND"})
    }
const dltblog = await Blogmodel.findOneAndDelete({_id:id})
if(!dltblog){
    return res.status(404).json({error : "NO SUCH FILE FOUND"})
}
res.status(200).json(dltblog)
}


//update a blog

const updateblog = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "NO SUCH FILE FOUND"})
    }
const updateblog = await Blogmodel.findOneAndUpdate({_id:id},{
    ...req.body} )
if(!updateblog){
    return res.status(404).json({error : "NO SUCH FILE FOUND"})
}
res.status(200).json(updateblog)
}
module.exports = {CreateBlog,SingleBlog,GetBlogs , deleteblog,updateblog};