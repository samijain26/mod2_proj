 const antiqueModel = require('../models/antiqueModel')
 const antiqueSeed = require('../models/antiqueSeed')


// @desc get all products
// @router GET /antique/index file
// @access public
const allProduct = (req,res) =>{
    //res.send("hi")
   
        antiqueModel.find({}, (error, foundModel) => {
          if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.render('antique/Index', { antiqueModel: foundModel })
          }
        })
 }
// desc get new form
// @route GET /antique/new
// @access public
const newForm = (req,res) =>{
    res.render('antique/New')
}

// @desc creating new product in db
// @route POST /antique
// @access public
const createNew = (req,res)=>{
    antiqueModel.create(req.body, (err, createdModel) => {
        if (err) {
            res.status(400).json(err)
        } else {//res.send("image loaded")
            
            res.status(200).redirect('/antique')
        }
    })
  }
//show a single product when clicked 
//route GET /antique/show
const singleProduct = (req,res) =>{
    
    antiqueModel.findById(req.params.id, (error,foundModel) =>{
        if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.render('antique/Show' , { antique : foundModel})
          }
  
    })
  }
//delete a single record using id
//route DELETE '/antique'
const deleteProduct = (req,res) =>{
    
    antiqueModel.findByIdAndDelete(req.params.id, (error,deletedModel) =>{
        if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.redirect('/antique')
          }
  
    })
  }
//to edit a single product
//ROUTE GET /antique/edit

const editForm = (req,res) =>{
    antiqueModel.findById(req.params.id, (error,foundModel) =>{
      if (error) {
          res.status(400).json({ error })
        } else {
          res.status(200)
          res.render('antique/Edit' , { antique : foundModel})
        }
  
  })
  }

  //find by id and update single record
  // route PUT '/antique/:id
const updateProduct = (req,res) =>{

    antiqueModel.findByIdAndUpdate(req.params.id,req.body,(error,foundModel) =>{
      if (error) {
          res.status(400).json({ error })
        } else {
          res.status(200)
          res.redirect(`/antique/${req.params.id}`)
        }
  
  })
  
  }

  //PURchase a product
  //ROUTE PUT  /antique/:id

  const buyProduct = (req,res) =>{
    //res.send('purchase')
  
    antiqueModel.findByIdAndUpdate(req.params.id, { $inc : {quantity:-1}},(error,foundModel) =>{
      if (error) {
          res.status(400).json({ error })
        } else {
          res.status(200)
  
          res.redirect(`/antique/${req.params.id}`)
        }
  
  })
  
  }

  //Starter seed code for product in Index
  const seedStarterData = (req,res) =>{
    antiqueModel.deleteMany({}, (error, deletedModel) => {
      if (error) {
          res.status(400).json(error)
      } else {
          //console.log('deleted data.')
          
          // Data has been successfully deleted
          // Now use seed data to repopulate the database
          antiqueModel.create(antiqueSeed, (err, createdModel) => {
            console.log(antiqueSeed)
              if (error) {
                  res.status(400).json(error)
              } else {
                  res.status(200).redirect('/antique')
              }
          })
      }
  })
}

//clear starter seed data
const clearStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    antiqueModel.deleteMany({}, (error, deletedModel) => {
        if (error) {
            res.status(400).json(error)
        } else {
          res.status(200).redirect('/antique')
                }
              })
    }
  

module.exports = {
  allProduct,
  buyProduct,
  newForm,
  createNew,
  singleProduct,
  deleteProduct,
  editForm ,
  updateProduct,
  seedStarterData,
  clearStarterData
 
}