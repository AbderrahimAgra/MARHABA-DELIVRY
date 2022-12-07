const router = require('express').Router()
const {
  clientUser
} = require('../../controllers/userController/clientController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/client/me', tryCatch(clientUser))

router.use(errorHandler)

module.exports = router