const express=require('express');
const router = express.Router();

const mysql = require('mysql2');
const dbconfig   = require('../config/testDB.js');
const connection = mysql.createConnection(dbconfig);

router.get('/', function(req,res,next){
    res.render('db/dbtest', {title:'db테스트'});
});

router.get('/posts', (req, res) => {
    connection.query('SELECT * from post', (error, rows) => {
      if (error) throw error;
      //console.log('post info is: ', rows);
      res.render('db/posts.ejs', {title:'posts', posts:rows});
    });
  });
  

module.exports = router;