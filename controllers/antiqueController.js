// const antiqueModel = require('../models/antiqueModel')
// const antiqueSeed = require('../models/antiqueSeed')

// // @desc get all logs
// // @router GET /logs
// // @access public
// const allAntiques = (req, res) => {
//   logModel.find({}, (error, foundLogs) => {
//     if (error) {
//       res.status(400).json({ error })
//     } else {
//       res.status(200)
//       res.render('logs/Index', { logs: foundLogs })
//     }
//   })