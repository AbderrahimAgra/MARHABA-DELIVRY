const router = require('express').Router()
const {
  livreurUser,
  clientUser,
  managerUser
} = require('../controllers/authController')

// Error Handler
const { tryCatch } = require('../middleware/tryCatch')
const { errorHandler } = require('../middleware/errorHandler')

router.get('/livreur/me', tryCatch(livreurUser))
router.get('/client/me', tryCatch(clientUser))
router.get('/manager/me', tryCatch(managerUser))

router.use(errorHandler)

module.exports = router