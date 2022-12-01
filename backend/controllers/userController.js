const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const storage = require('local-storage')
const User = require('../models/userModel')
const Role = require('../models/roleModel')
const mainMail = require('../middleware/mailer')

const registerUser = async (req, res) => {
  const { first_name, last_name, phone, email, password, confirm_password } = req.body

  if (first_name === '' || last_name === '' || phone === '' || email === '' || password === '' || confirm_password === '') throw Error('Please fill all the fields')
  if (password !== confirm_password) throw Error('Password not matched')

  const userExists = await User.findOne({ email })
  const phoneExists = await User.findOne({ phone })

  if (userExists) { throw Error('User already Exists') }
  else {
    if (phoneExists) throw Error('Phone the User already Exists')
    else {
      // Password Hash 
      const salt = await bcrypt.genSalt(10)
      const password_Hash = await bcrypt.hash(password, salt)
      const role = "638807a430f9616bb0b039c9"

      const user = await User.create({
        first_name,
        last_name,
        phone,
        email,
        password: password_Hash,
        role,
        verification: false,
        isBanned: false
      })

      if (user) {
        mainMail.main('verify-email', email)
        throw Error('Check Your Email')
      }

      if (!user) throw Error('Invalid User Data')
    }
  }
}

const verifyEmail = async (req, res) => {
  const verify_email = await jwt.verify(req.params.token, process.env.SECRET)

  const verifyUser = await User.findOne({ email: verify_email.email })
  if (verifyUser && verifyUser.verification === true) throw Error('You Are Registed')

  const verification_email = await User.updateOne({ email: verify_email.email }, { $set: { verification: true } })
  if (verification_email) throw Error('Verification Updated')
  if (!verification_email) throw Error("You can't to active your account")
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (email === '' || password === '') throw Error('Please Fill All The Fields')

  const user = await User.findOne({ email })

  if (!user) throw Error('Email or password is incorrect')
  if (!user.verification) throw Error('Check Your Email To Active Your Account')

  const correctPassword = await bcrypt.compare(password, user.password)

  if (user && correctPassword) {
    const role = await Role.findById({ _id: user.role })
    const token = generateToken(user.id)
    storage('token', token)
    res.json({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: role.name,
      token: token
    })
  }
  else {
    throw Error('Invalid Creadtials')
  }
}

const resePassword = async (req, res) => {
  const { last_password, nouveau_password, confirm_password } = req.body

  if(last_password === '' || nouveau_password === '' || confirm_password === '') throw Error('Please Fill All The Fields')
  if(nouveau_password != confirm_password) throw Error('Password Not Matched')

  res.json({
    last_password,
    nouveau_password,
    confirm_password
  })
}

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '30d'
  })

  return token
}

module.exports = {
  registerUser,
  verifyEmail,
  loginUser,
  resePassword
}