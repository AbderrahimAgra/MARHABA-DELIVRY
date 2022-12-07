const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const User = require('../../models/userModel')
const Role = require('../../models/roleModel')
const { role } = require('../../models')

const managerUser = async (req, res) => {
  const token = storage('token')
  const token_user = await jwt.verify(token, process.env.SECRET)
  const user = await User.findById(token_user.id)
  const role_user = await Role.findById(user.role)
  if(role_user.name != "manager") throw Error("You Can' To Access in This Page")
  res.json({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: role_user.name
  })
}

module.exports = {
  managerUser
}