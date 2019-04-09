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

//POST /About
router.post('/', function(req,res){
  console.log(req.body)
  res.send('Post page')
})

//GET /about/me
router.get('/me',function(req,res){
  res.render('about/me',{
    name:'Miguel'
  });
});

//GET /about/<anything>
router.get('/:name',function(req,res){
  res.send('hello '+ req.params.name);
});


//Enable ourselves to include these routes in another file
module.exports = router
