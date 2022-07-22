const express=require('express');
const router = express.Router();

const mysql = require('mysql2');
const menuDBconfig   = require('../config/menuDB.js');
const menuConnection = mysql.createConnection(menuDBconfig);
const postDBconfig   = require('../config/postsDB.js');
const postConnection = mysql.createConnection(postDBconfig);

router.get('/', function(req,res,next){
    res.render('index', {title:'학교에서 밥을먹자'});
    // connection.end();
});

router.get('/haksik', function(req,res,next){
    res.render('haksik', {title:'학식'});
});

router.get('/restaurant', function(req,res,next){
    res.render('restaurant', {title:'식당'});
});

router.get('/cafe', function(req,res,next){
    res.render('cafe', {title:'카페'});
});

router.get('/store', function(req,res,next){
    res.render('store', {title:'편의점'});
});

router.get('/food/:id', function(req,res,next){
    var food_id=req.params.id;
    var querytext="SELECT * from food_lists where id="+food_id+";"+
    "SELECT * from food_rate where food_id="+food_id+";";
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.render('foods/food_layout', {title:food_id, food_info:rows[0], food_rates:rows[1],});
    });
});

router.get('/food/:id/rating', function(req,res,next){
    var food_id=req.params.id;
    //console.log(food_id);
    var querytext="SELECT * from food_lists where id="+food_id+";";
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        //console.log(rows[0]);
        res.render('foods/food_rating', {title:food_id, food_info:rows[0]});
    });
});

router.post('/createrate', (req, res) => {
    //console.log(req.body);
    var food_id=req.body.food_id;
    var author;
    if(req.body.author=='')
        author='익명';
    else
        author=req.body.author;
    menuConnection.query
    ('INSERT INTO food_rate_draft (`food_id`, `author`, `rate`, `content`,`pw`) VALUES (?, ?, ?, ?, ?);',[
      req.body.food_id,
      author,
      req.body.rate,
      req.body.content,
      req.body.pw
    ], (error, rows) => {
      if (error) throw error;
      res.render('foods/alert_page', {food_id:food_id,alert_type:2});
      //res.redirect('/main/food/'+req.body.food_id);
    });
  });

router.get('/check/:rateid/:userpw', (req,res)=>{
    var rate_id=req.params.rateid;
    var user_pw=req.params.userpw;
    var querytext="SELECT * from food_rate where id="+rate_id+";";
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        //console.log(rows[0]);
        //console.log(rows[0].pw + ' and ' + user_pw)
        if(rows[0].pw==user_pw)
        {
            res.redirect('/main/delete/'+rate_id+'/'+rows[0].food_id);
        }
        else
        {
            res.redirect('/main/fail/'+rows[0].food_id);
        }
    });
})

router.get('/delete/:rateid/:foodid', (req,res)=>{
    var rate_id=req.params.rateid;
    var food_id=req.params.foodid;
    var querytext="DELETE from food_rate where id="+rate_id+";";
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.redirect('/main/food/'+food_id);
    });
})

router.get('/fail/:foodid', (req,res)=>{
    var food_id=req.params.foodid;
    res.render('foods/alert_page', {food_id:food_id,alert_type:1});
})

router.get('/redirect/:foodid', (req,res)=>{
    var food_id=req.params.foodid;
    res.redirect('/main/food/'+food_id);
})

router.get('/haksik/hak', function(req,res,next){
    var querytext="SELECT * from food_lists where shop_id=1001;"+
    "SELECT * from shop_lists where id=1001;"+
    "SELECT * from food_lists where shop_id=1001 and isbest=1"
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.render('shops/shop_layout', {title:'학생회관', food_lists:rows[0], shop_info:rows[1], best_menu:rows[2]});
    });
});

router.get('/haksik/jin', function(req,res,next){
    var querytext="SELECT * from food_lists where shop_id=1002;"+
    "SELECT * from shop_lists where id=1002;"+
    "SELECT * from food_lists where shop_id=1002 and isbest=1"
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.render('shops/shop_layout', {title:'진관홀', food_lists:rows[0], shop_info:rows[1], best_menu:rows[2]});
    });
});
router.get('/restaurant/yamsem', function(req,res,next){
    var querytext="SELECT * from food_lists where shop_id=2001;"+
    "SELECT * from shop_lists where id=2001;"+
    "SELECT * from food_lists where shop_id=2001 and isbest=1"
    menuConnection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.render('shops/shop_layout', {title:'얌샘김밥', food_lists:rows[0], shop_info:rows[1], best_menu:rows[2]});
    });
});

router.get('/restaurant/saigong', function(req,res,next){
    res.render('shops/restaurant/saigong', {title:'미스사이공',notice:'공지가 없습니다.'});
});

router.get('/store/CU', function(req,res,next){
    res.render('shops/store/CU', {title:'대양 CU'});
});

router.get('/store/emart24', function(req,res,next){
    res.render('shops/store/emart24', {title:'이마트24'});
});

router.get('/cafe/pandorosi', function(req,res,next){
    res.render('shops/cafe/pandorosi', {title:'판도로시'});
});

router.get('/cafe/twosome', function(req,res,next){
    res.render('shops/cafe/twosome', {title:'투썸'});
});

router.get('/cafe/dic', function(req,res,next){
    res.render('shops/cafe/dic', {title:'카페딕셔너리'});
});

router.get('/cafe/paris', function(req,res,next){
    res.render('shops/cafe/paris', {title:'파리바게트'});
});

router.get('/cafe/jeju', function(req,res,next){
    res.render('shops/cafe/jeju', {title:'제주몰빵'});
});

//여기아래부터 이미지 라우터, 분기예정



module.exports = router;