const express = require('express')
const router = express.Router()

const {
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
} = require('../controllers/antiqueController')

router.get('/',allProduct)


//get new form
 // router.get('/new', newForm)
router.get('/new',newForm )
 
//Edit any details of product
router.get('/:id/edit',editForm)

//Delete a single record
router.delete('/:id',deleteProduct)

//buy a single product
router.put('/:id/purchase',buyProduct)


//Update a product using id
router.put('/:id',updateProduct)

//Create the record in the database
  router.post('/',createNew)


  //seed data to show beginning product from seed model array
  router.get('/seed', seedStarterData)


  //clear data from index(delete all products)
router.get('/clear',clearStarterData )

//Show a single product
router.get('/:id',singleProduct)
  

module.exports = router
