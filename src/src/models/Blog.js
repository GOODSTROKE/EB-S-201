// Required Packeges
let mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    category: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const Blog = mongoose.model('Blog', blogSchema)

// Export User Model
module.exports = Blog
