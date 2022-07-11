const express = require('express');
const app=express();
const router = require('./routes/index');
const nunjucks = require('nunjucks');


// const dotenv = require('dotenv');
// const db_config = require(__dirname + '/config/database.js');
// var conn = db_config.init();

//db_config.connect(conn);

app.set('view engine', 'html');
app.set('ejs', 'ejs.renderFile');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use(express.static(__dirname+'/'));

app.use('/', router);
app.get('/', function(req,res,next){
  res.render('index', {title:'학교에서 밥을먹자'});
  // connection.end();
});


const port = 3000;


app.listen(port,function(){
    console.log('Example app listening on port : ' + port);
});