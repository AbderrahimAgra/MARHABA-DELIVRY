const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const storage = require('local-storage')



const loginUser = (req, res) => {
  res.send('user logged')
}

module.exports = {
  loginUser
}