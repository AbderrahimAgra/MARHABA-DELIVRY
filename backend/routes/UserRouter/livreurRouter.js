const router = require('express').Router()
const {
  livreurUser,
  getCommand,
  getStatus,
  updateStatus
} = require('../../controllers/userController/livreurController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/livreur/me', tryCatch(livreurUser))
router.get('/livreur/command', tryCatch(getCommand))
router.get('/livreur/status', tryCatch(getStatus))
router.put('/livreur/update-status/:id', tryCatch(updateStatus))

router.use(errorHandler)

module.exports = router