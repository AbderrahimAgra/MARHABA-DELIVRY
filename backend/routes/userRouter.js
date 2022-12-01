const router = require('express').Router()
const { 
  registerUser,
  verifyEmail,
  loginUser,
  resePassword
} = require('../controllers/userController')

const { tryCatch } = require('../middleware/tryCatch')
const { errorHandler } = require('../middleware/errorHandler')

router.post('/register', tryCatch(registerUser))
router.get('/verify-email/:token', tryCatch(verifyEmail))
router.post('/login', loginUser)
router.post('/reset-password', tryCatch(resePassword))

router.use(errorHandler)

module.exports = router