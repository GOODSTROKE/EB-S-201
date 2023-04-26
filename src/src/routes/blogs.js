// External Modules:
const router = require('express').Router()

// Controller:
const { create, updateOne } = require('../controllers/blogs')
const {
  CreateBlogValidation,
  UpdateBlogValidation,
} = require('../validation/validateBlogs')

//Routes:
router.post('/create-one', CreateBlogValidation, create)

router.put('/update-one/:blog', UpdateBlogValidation, updateOne)
// Exports
module.exports = router
