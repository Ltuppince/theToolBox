const path = require('path')
const router = require('express').Router()
const userRoutes = require('./users')
// const userLoginRoutes = require('./usersLogin')

// User routes
router.use('/users', userRoutes)
// router.use('/users/login', userLoginRoutes)

module.exports = router;