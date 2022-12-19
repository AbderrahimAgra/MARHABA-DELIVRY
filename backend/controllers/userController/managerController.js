const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const User = require('../../models/userModel')
const Role = require('../../models/roleModel')
const Category = require('../../models/category')
const Meal = require('../../models/meal')
const upload = require("../../outils/imageUmploder");
const { role } = require('../../models')
const removefile = require('../../outils/removeimage')
const fs = require('fs')


const managerUser = async (req, res) => {
  const token = storage('token')
  const token_user = await jwt.verify(token, process.env.SECRET)
  const user = await User.findById(token_user.id)
  const role_user = await Role.findById(user.role)
  if (role_user.name != "manager") throw Error("You Can' To Access in This Page")
  res.send(user)
}

const addcategory = async (req, res) => {
  const { name } = req.body
  if (name == '') throw Error("Please Fill The name")
  const category = await Category.findOne({ name })
  if (category) throw Error("the category deja already")
  if (!category) {
    const category_create = await Category.create({ name })
    if (category_create) {
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

  const findcategoris = await Category.find()
  if (findcategoris) {
    res.json(findcategoris)
  }
}

const deletcategory = async (req, res) => {
  const { id } = req.params.id
  const finddeleted = await Category.findOne({ id })
  if (finddeleted) {
    await finddeleted.remove()
    res.send(`${finddeleted.name} deleted succesfully`)
  }
  else throw Error('not deleted')

}

const updatecategory = async (req, res) => {
  const { id } = req.params

  const data = await Category.findOneAndUpdate({ _id: id }, { name: req.body.name })
  if (!data) res.send('not')
  res.send('updated')

}

const updateuser = async (req, res) => {
  const { id } = req.params

  const data = await User.findOne({ _id: id })
  if (data.isBanned == true) {
    await User.findOneAndUpdate({ _id: id }, { isBanned: false })
  } else {
    await User.findOneAndUpdate({ _id: id }, { isBanned: true })
  }
  res.send(data)


}

const listclient = async (req, res) => {
  const id_role = '638f45b410a60d0c0019353a'

  const findclient = await User.find({ role: id_role })
  if (findclient) {
    res.send(
      findclient
    )
  }
  else {
    throw Error('Not User to role client')
  }
}

const listlivreur = async (req, res) => {
  const id_role = '638f45b410a60d0c0019353b'

  const findclient = await User.find({ role: id_role })
  if (findclient) {
    res.send(
      findclient
    )
  }
  else {
    throw Error('Not User to role client')
  }
}

const addimage = async (req, res) => {
// res.send({
//   file: req.file.filename,
//   path: req.path
// })
// const path = req.file.path;
const findcategory = await Category.find()
         console.log(findcategory)
              const { name, description,price, category } = req.body;
              const newProduct = {
                name:name, 
                description:description,
                price:price,
                category:category,
                images:req.file.filename

              }
              console.log(newProduct);
//validation des field
            const isformfield = Object.values(newProduct).every((value)=>{
              if(value){
                return true;
              }
              else {
                return false;
              }
            })

            console.log(isformfield);
      
        
           await Meal.create(newProduct);
           console.log(newProduct);
         
           try { res.status(201).json("product is added")
      
        } catch (error) {
          throw new Error("product is not added");
          
        }
       
}
// jai un probleme file systemenje les resoudré
const deletproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Meal.findById(id);
    // removefile.removefile(result.images);
    // const directoryPath = 'C:\Users\Youcode\Desktop\MARHABA-DELIVRY\backend\images\1671028061674.png';
    try {
      fs.unlinkSync(`C:/Users/Youcode/Desktop/MARHABA-DELIVRY/backend/images/${result.images[0]}`);
        console.log('deleted from fs file');
    
    } catch (err) {
        console.log(err)
    }
    await Meal.findOneAndDelete({ _id: id });
    res.status(200).json({ code: 200, message: "Product deleted" });
  } catch (error) {
    throw new Error(error);
  }

   }

   const GetAllProduct = async(req, res) => {
    const allProduct = await Meal.find();
    try {
      if (allProduct) {
        res.send(allProduct);
      }
      else throw new Error("no product found");
    } catch (error) {
      throw new Error(error);
    }
  };
const updateproduct = async (req, res) => {
  // const {id} = req.params
  // const updateprod = {
  //   name:req.body.Categoryname, 
  //   description:req.body.description,
  //   price:req.body.price,
  //   category:req.body.category,
  // }
  // const isformfield = Object.values(updateprod).every((value)=>{
  //   if(value){
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // })
  // const finddata = awiat Meal.findById({_id:id})
  const {id} = req.params
  console.log(req.params)
  const UpdatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    categorie: req.body.categorie,
    images: req.file.filename

  };
   console.log( req.body.name)

    try {
      await Meal.findByIdAndUpdate(
        { _id: id},
        UpdatedProduct,
        
      );

      res.status(201).json({
        message: "Product updated successfully!",
      });
    } catch (error) {
      res.status(400).json({
        error: error,
      });
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
  listlivreur,

  addimage,
  deletproduct,
  GetAllProduct,
  updateproduct
}
