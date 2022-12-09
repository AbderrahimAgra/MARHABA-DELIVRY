const router = require('express').Router()
const {
  managerUser,
  addcategory,
  findcategory,
  deletcategory,
  updatecategory,
  updateuser,
  listclient,
  listlivreur

} = require('../../controllers/userController/managerController')

// Error Handler
const { tryCatch } = require('../../middleware/tryCatch')
const { errorHandler } = require('../../middleware/errorHandler')

router.get('/manager/me', tryCatch(managerUser))
router.post('/manager/addcategory', tryCatch(addcategory))
router.get('/manager/findcategory', tryCatch(findcategory))
router.delete('/manager/deletcategory/:id', tryCatch(deletcategory))
router.put('/manager/updatecategory/:id', tryCatch(updatecategory))
router.put('/manager/updateuser/:id', tryCatch(updateuser))

router.get('/manager/listclient', tryCatch(listclient))
router.get('/manager/listlivreur', tryCatch(listlivreur))



router.use(errorHandler)

module.exports = router