// External Modules:
const createError = require('http-errors')

// Internal Modules:
const BlogModel = require('../models/Blog')

/**
 * @description Create single Data
 * @Route [POST]- /api/v1/blogs
 * @Access protected - [*]
 * @returns {Object} - Created Object
 */
const create = async (req, res, next) => {
  try {
    let newData = new BlogModel(req.body)
    await newData.save()
    res.status(200).json(newData)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Update Single Data
 * @Route [PUT]- /api/blogs/:blog
 * @Access protected - [*]
 * @returns {Object} - Updated Object
 */
const updateOne = async (req, res, next) => {
  try {
    let query = { _id: req.params.blog }
    let options = { new: true }
    const data = await BlogModel.findOneAndUpdate(query, req.body, options)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error.message))
  }
}

// Module Exports:
module.exports = {
  create,
  updateOne,
}
