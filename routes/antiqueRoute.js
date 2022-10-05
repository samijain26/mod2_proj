const express = require('express')
const router = express.Router()
const antiqueSeed = require('../models/antiqueSeed')
const antiqueModel = require('../models/antiqueModel')
//const multer = require('multer')
//const path = require('path')


//  var storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//     callback(null, './public/images')
//  },
//  filename: (req, file, callback) => {
//     console.log(file)
//     var filetype = file.mimetype;
//     var fileformate = filetype.split("/")[1];
//     callback(null, Date.now() + path.extname(file.originalname) );
//  }
// });
//} = require('../controllers/antiqueController')
//const antiqueModel = require('../models/antiqueModel')

//router.get('/', allAntiques)
router.get('/',(req,res) =>{
    //res.send("hi")
   
        antiqueModel.find({}, (error, foundModel) => {
          if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.render('antique/Index', { antiqueModel: foundModel })
          }
        })
 })


//get new form
 // router.get('/new', newForm)
router.get('/new', (req,res) =>{
    res.render('antique/New')
})
 
//Edit any details of product
router.get('/:id/edit',(req,res) =>{
  antiqueModel.findById(req.params.id, (error,foundModel) =>{
    if (error) {
        res.status(400).json({ error })
      } else {
        res.status(200)
        res.render('antique/Edit' , { antique : foundModel})
      }

})
})
router.delete('/:id',(req,res) =>{
    
  antiqueModel.findByIdAndDelete(req.params.id, (error,deletedModel) =>{
      if (error) {
          res.status(400).json({ error })
        } else {
          res.status(200)
          res.redirect('/antique')
        }

  })
})

// const buyItem = (req, res) => {
//   Item.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 }  }, (err, foundItem) => {
//     if (err) {
//       res.status(400).json(err)
//     } else {
//       res.status(200).redirect(`/products/${req.params.id}`)
//     }
//   })
//   }
router.put('/:id/purchase',(req,res) =>{
  //res.send('purchase')

  antiqueModel.findByIdAndUpdate(req.params.id, { $inc : {quantity:-1}},(error,foundModel) =>{
    if (error) {
        res.status(400).json({ error })
      } else {
        res.status(200)

        res.redirect(`/antique`)
      }

})

})

router.put('/:id',(req,res) =>{

  antiqueModel.findByIdAndUpdate(req.params.id,req.body,(error,foundModel) =>{
    if (error) {
        res.status(400).json({ error })
      } else {
        res.status(200)
        res.redirect(`/antique/${req.params.id}`)
      }

})

})

// router.post('/',upload.single('image'),(req,res)=>{
  router.post('/',(req,res)=>{
    antiqueModel.create(req.body, (err, createdModel) => {
        if (err) {
            res.status(400).json(err)
        } else {//res.send("image loaded")
            
            res.status(200).redirect('/antique')
        }
    })
  })

  router.get('/seed', (req,res) =>{
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
})

router.get('/clear', (req, res) => {
  // Delete all remaining documents (if there are any)
  antiqueModel.deleteMany({}, (error, deletedModel) => {
      if (error) {
          res.status(400).json(error)
      } else {
        res.status(200).redirect('/antique')
              }
            })
  })





  
  
   router.get('/:id',(req,res) =>{
    console.log('antiqueModel')
    antiqueModel.findById(req.params.id, (error,foundModel) =>{
        if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            console.log('show route')
            //res.send('show page')
            res.render('antique/Show' , { antique : foundModel})
          }
  
    })
  })
  





//create new log
// router.post('/', (req, res) => {
    
//   console.log(req.body)
//     antiqueModel.create(req.body, (error, createdModel) => {
//       if (error) {
//         res.status(400).json({ error })
//       } else {
//         res.status(200)
//         //res.send(req.body)
//          res.redirect('/antique')
//       }
//     })
//   })


   
    
    // const antiqueModel1 = new antiqueModel({
    //      name:req.body.name,
    
    //      description: req.body.description,
    //      image: req.file.path,
    //     origin: req.body.origin,
    //      price:req.body.price,
       
      
    
    // })
        
    
    //    antiqueModel1
    //       .save()
        //   .then(post => {
        //     if (!post) {
        //       return res.send('error', 'Unable to add data!!!');
        //     }
        //     req.send('success', 'Added data successfully');
        //   })
        //   .catch(err => {
        //     return res.status(404).send('error', 'Unable to add data!!!');
        //   });
    
       // res.redirect('/antique');
     
    //console.log(req.body)
    // antiqueModel.create(Product, (error, createdPiece) => {
    //     if (error) {
    //       res.status(400).json({ error })
    //     } else {
    //       res.status(200)
    //       res.redirect('/antique')
    //     }
    //   })
    // })
    
//    // res.send(req.file)
// })

// router.post('/', (req,res) =>{
//     console.log(req.body)
//     res.send(req.body)
// })

//Index route

// router.get('/Index',(req,res) =>{
//     res.send('index route')
// })


module.exports = router
