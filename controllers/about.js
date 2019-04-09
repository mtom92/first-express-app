//Include express module
var express = require('express');
//create a router instead of an app
var router = express.Router();

//Routes(all relative to what you specify in index.js)
//GET / about
router.get('/',function(req,res){
res.render('about/about', {
  name: req.query.name
});
});

//GET /about/me
router.get('/me',function(req,res){
  res.render('about/me',{
    name:'Miguel'
  });
});

//Enable ourselves to include these routes in another file
module.exports = router
