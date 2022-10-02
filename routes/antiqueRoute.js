const express = require('express')
const router = express.Router()
const antiqueSeed = require('../models/antiqueSeed')
const antiqueModel = require('../models/antiqueModel')
const multer = require('multer')
const path = require('path')


 var storage = multer.diskStorage({
    destination: (req, file, callback) => {
    callback(null, 'images')
 },
 filename: (req, file, callback) => {
    console.log(file)
    var filetype = file.mimetype;
    var fileformate = filetype.split("/")[1];
    callback(null, Date.now() + path.extname(file.originalname) );
 }
});
const upload = multer({ storage: storage });
// const {allAntiques,
// } = require('../controllers/antiqueController')

//index
router.get('/',(req,res) =>{
    res.send("hi")
 })
//router.get('/', allAntiques)

//get new form

// router.get('/new', newForm)


router.get('/new', (req,res) =>{
    res.render('antique/New')
})
router.post('/',upload.single('image'),(req,res)=>{
    res.send(req.body)
})

// router.post('/', (req,res) =>{
//     console.log(req.body)
//     res.send(req.body)
// })




module.exports = router
