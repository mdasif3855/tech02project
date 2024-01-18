const express = require('express');
const {CreateBlog,SingleBlog,GetBlogs,deleteblog,updateblog} = require('../Controllers/BlogControllers')
const requireAuth = require('../MIddleware/RequireAuth')

const router = express.Router();
/// requires auth for all blogs
router.use(requireAuth)

//gets all blogs
router.get('/',GetBlogs )

//get a single blog
router.get('/:id',SingleBlog)

//Delete a new blog
router.delete('/:id',deleteblog)


//post a new blog
router.post('/',CreateBlog)

//update a new blog
router.patch('/:id',updateblog)

module.exports = router