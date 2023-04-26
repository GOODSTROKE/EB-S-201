const router = require('express').Router()
const blogRoutes = require('./blogs')

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/blogs', blogRoutes)

// Module Exports
module.exports = router
