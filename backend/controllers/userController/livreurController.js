const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const User = require('../../models/userModel')
const Role = require('../../models/roleModel')
const Orders = require('../../models/orderModel')
const Status = require('../../models/statusModel')
const { role } = require('../../models')


const livreurUser = async (req, res) => {
  const token = storage('token')
  const token_user = await jwt.verify(token, process.env.SECRET)
  const user = await User.findById(token_user.id)
  const role_user = await Role.findById(user.role)
  if (role_user.name != "livreur") throw Error("You can't to access in this page")
  res.json({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: role_user.name,
    phone: user.phone
  })
}

const getCommand = async (req, res) => {
  const token = storage('token')
  const token_user = await jwt.verify(token, process.env.SECRET)
  const user = await User.findById(token_user.id)

  const allCommand = await Orders.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "client",
        foreignField: "_id",
        as: "client"
      }
    },
    {
      $unwind: "$client"
    },

    {
      $lookup: {
        from: "status",
        localField: "status",
        foreignField: "_id",
        as: "status"
      }
    },
    {
      $unwind: "$status"
    },
    {
      $match: { livereur: user._id }
    }
  ])

  if(allCommand) res.json(allCommand)
  else res.send('Command is not a show')

}

const getStatus = async (req, res) => {
  const status = await Status.find()
  if (status) res.json(status)
  else throw Error('Status is Empty')
}

const updateStatus = async (req, res) => {
  const id = req.params.id
  const { body } = req
  const data = await Orders.findOneAndUpdate({ _id: id }, { status: body.status })
  if (data) res.json(data)
  else throw Error('Status Livreur Not Updated')
}

module.exports = {
  livreurUser,
  getCommand,
  getStatus,
  updateStatus
}