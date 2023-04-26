const colors = require('colors')
const { mongooseConnection } = require('./db')
const { DummyBlogs } = require('./data')

// Configuration
require('dotenv').config()
mongooseConnection()

//Models
const BlogModel = require('../models/Blog')

// Import Data Seeder:
const importData = async () => {
  try {
    //Destroy All
    await BlogModel.deleteMany()

    // Imports Blogs
    const blogsArray = await BlogModel.create(DummyBlogs)

    console.log('Data Inserted'.magenta.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// Destroy Data Seeder:
const destroyData = async () => {
  try {
    await BlogModel.deleteMany()

    console.log('Data Destroyed Successfully'.rainbow.bold)
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold)
    process.exit(1)
  }
}

// Manage Seeder Command:
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
