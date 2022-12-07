const router = require('express').Router()
const {
  managerUser
} = require('../../controllers/userController/managerController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/manager/me', tryCatch(managerUser))

router.use(errorHandler)

module.exports = router