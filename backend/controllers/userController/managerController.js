const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const User = require('../../models/userModel')
const Role = require('../../models/roleModel')
const Category = require('../../models/category')
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

const addcategory = async (req, res) => {
    const {name} = req.body
    if(name == '') throw Error("Please Fill The name")
    const category = await Category.findOne({name})
    if(category) throw Error("the category deja already")
    if(!category){
        const category_create = await Category.create({name})
        if(category_create){
          res.json({ 
            name: name,
            message: "created category"
          })
        }

   //!------------------------------------------------autre methode create---------------------------------
      // const created_category = new Category({
      //   name:name
      // })
      // await created_category.save()
      //  res.json({
      //    mesage:" category created"
      //  })
  
    }

}

const findcategory = async (req, res) => {
   const findcategoris = await Category.findOne()
   if(findcategoris){
    res.json(findcategoris)
   }
}

const deletcategory = async (req, res) => {
  const {id} = req.params.id
  const finddeleted = await Category.findOne({id})
  if(finddeleted){ 
    await finddeleted.remove()
    res.send(`${finddeleted.name} deleted succesfully`)
  }
  else throw Error('not deleted')

}
const updatecategory = async (req, res) => {
  const {id} = req.params
  
    const data =  await Category.findOneAndUpdate({_id:id},{name: req.body.name})
    if(!data) res.send('not')
    res.send('updated')

}
const updateuser = async (req, res) => {
  const {id} = req.params

    const data =  await User.findOne({_id:id})
    if(data.isBanned==true){
      await User.findOneAndUpdate({_id:id},{isBanned: false})
    }else{
       await User.findOneAndUpdate({_id:id},{isBanned: true})
    }
    res.send(data)
    

}

const listclient = async (req, res) => {

    const id_role = '638f45b410a60d0c0019353a'
    const findclient = await User.find({role: id_role})
    if(findclient){
      res.send(
     findclient
      )
    }
    else{
      throw Error ('Not User to role client')
    }
}

const listlivreur = async (req, res) => {

  const id_role = '638f45b410a60d0c0019353b'
  const findclient = await User.find({role: id_role})
  if(findclient){
    res.send(
   findclient
    )
  }
  else{
    throw Error ('Not User to role client')
  }
}



module.exports = {
  managerUser,
  addcategory,
  findcategory,
  deletcategory,
  updatecategory,
  updateuser,
  listclient,
  listlivreur
}