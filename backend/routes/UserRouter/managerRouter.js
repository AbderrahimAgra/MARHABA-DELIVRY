const router = require('express').Router()
const {
  managerUser,
  addcategory,
  findcategory,
  deletcategory
} = require('../../controllers/userController/managerController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/manager/me', tryCatch(managerUser))
router.post('/manager/category', tryCatch(addcategory))
router.get('/manager/findcategory', tryCatch(findcategory))
router.delete('/manager/me', tryCatch(deletcategory))

router.use(errorHandler)

module.exports = router