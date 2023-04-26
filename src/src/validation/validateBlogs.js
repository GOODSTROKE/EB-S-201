const createHttpError = require('http-errors')

const CreateBlogValidation = (req, res, next) => {
  const { title, text, author, category } = req.body

  // BLOG TITLE IS REQUIRED AND MUST BE A STRING
  if (title === undefined || typeof title !== 'string' || !title.length > 40) {
    return next(
      createHttpError(
        422,
        'Blog title is required, it must be a string and must be within 40 char only!'
      )
    )
  }

  // TEXT IS REQUIRED AND MUST BE A STRING
  if (text === undefined || typeof text !== 'string') {
    return next(
      createHttpError(422, 'Blog text is required and must be a string!')
    )
  }

  // AUTHOR IS REQUIRED AND MUST BE A STRING
  if (author === undefined || typeof author !== 'string') {
    return next(
      createHttpError(422, 'Author is required and must be a string!')
    )
  }

  // CATEGORIES IS OPTIONAL AND MUST BE AN ARRAY OF STRINGS AND MAX CONTAINS 10 ENTRIES
  if (category && !Array.isArray(category)) {
    return next(createHttpError(422, 'Categories must be and array!'))
  }

  // IF ALL ARE OKEAY
  next()
}

const UpdateBlogValidation = (req, res, next) => {
  const { title, text, author, category } = req.body

  // BLOG TITLE IS REQUIRED AND MUST BE A STRING
  if (typeof title !== 'string' || !title.length > 40) {
    return next(
      createHttpError(
        422,
        'Blog title must be a string and must be within 40 char only!'
      )
    )
  }

  // TEXT IS REQUIRED AND MUST BE A STRING
  if (typeof text !== 'string') {
    return next(
      createHttpError(422, 'Blog text is required and must be a string!')
    )
  }

  // AUTHOR IS REQUIRED AND MUST BE A STRING
  if (typeof author !== 'string') {
    return next(
      createHttpError(422, 'Author is required and must be a string!')
    )
  }

  // CATEGORIES IS OPTIONAL AND MUST BE AN ARRAY OF STRINGS AND MAX CONTAINS 10 ENTRIES
  if (category.length && !Array.isArray(category) && !category.length > 10) {
    return next(
      createHttpError(
        422,
        'Categories must be and array and must have less than 10 entries!'
      )
    )
  }

  category.forEach((category) => {
    if (typeof author !== 'string') {
      return next(createHttpError(422, 'Categories must be Strings'))
    }
  })

  // IF ALL ARE OKEAY
  next()
}

module.exports = { CreateBlogValidation, UpdateBlogValidation }
