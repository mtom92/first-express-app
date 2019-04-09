//require any needed modules
var express = require ('express');
var layouts = require ('express-ejs-layouts');

//declare an express app
var app = express();

//serve my static folder
app.use('/', express.static('public'));

//Enable body-parser
app.use(express.urlencoded({extended: false}));

//Enable express-ejs-layouts to use layouts.ejs
app.use(layouts);

//set the view engine
app.set('view engine','ejs');

//declare some routes
app.get('/',function(req,res,){
  res.render('index',{
    name:'Miguel',
    foods: ['sushi', 'bbq','pozole'],
    favnumber:300,
     age :90});
});


app.get('/:x/:y/:z', function(req,res){
  var result = req.params.x * req.params.y * req.params.z;
  res.send('Result is:' + result);
});
//Include any routes from your router (s)
app.use('/about', require('./controllers/about'));
//Error page
app.get('*',function(req,res){
  res.send('<h1>UHHH-ohh!</h1><h2>404: NOT FOUND</h2>')
});
//listen on specified spot
app.listen(3000, function(){
  console.log('Im working!!');
});
