var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('public/app/index.html')
})

module.exports = router
