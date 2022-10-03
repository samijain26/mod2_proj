const express = require('express')
const router = express.Router()
const antiqueSeed = require('../models/antiqueSeed')
const antiqueModel = require('../models/antiqueModel')
//const multer = require('multer')
const path = require('path')


//  var storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//     callback(null, 'images')
//  },
//  filename: (req, file, callback) => {
//     console.log(file)
//     var filetype = file.mimetype;
//     var fileformate = filetype.split("/")[1];
//     callback(null, Date.now() + path.extname(file.originalname) );
//  }
// });
// const upload = multer({ storage: storage });
// const {allAntiques,
// } = require('../controllers/antiqueController')

//index
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
//router.get('/', allAntiques)

//get new form

// router.get('/new', newForm)


router.get('/new', (req,res) =>{
    res.render('antique/New')
})


//create new log
router.post('/', (req, res) => {
    
  console.log(req.body)
    antiqueModel.create(req.body, (error, createdModel) => {
      if (error) {
        res.status(400).json({ error })
      } else {
        res.status(200)
        //res.send(req.body)
         res.redirect('/antique')
      }
    })
  })
// router.post('/',upload.single('image'),(req,res)=>{
    
//     const Product = new Product({
//          name:req.body.name,
    
//          description: req.body.description,
    
//         origin: req.body.origin,
//          price:req.body.price,
       
//          image: req.file.path,
    
//     })
        
    
    //    product
    //       .save()
    //       .then(post => {
    //         if (!post) {
    //           return req.flash('error', 'Unable to add data!!!');
    //         }
    //         req.flash('success', 'Added data successfully');
    //       })
    //       .catch(err => {
    //         return req.flash('error', 'Unable to add article!!!');
    //       });
    
    //     res.redirect('/antique');
    //   },
    // );
//     console.log(req.body)
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

router.get('/Index',(req,res) =>{
    res.send('index route')
})


module.exports = router
