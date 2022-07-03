const express = require('express');
const app=express();
const router = require('./routes/index');
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use(express.static(__dirname+'/'));

app.use('/', router);

const port = 3000;


app.listen(port,function(){
    console.log('Example app listening on port : ' + port);
});