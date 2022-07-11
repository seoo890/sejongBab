const express=require('express');
const router = express.Router();

const mysql = require('mysql2');
const dbconfig   = require('../config/menuDB.js');
const connection = mysql.createConnection(dbconfig);

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

router.get('/haksik/hak', function(req,res,next){
    var food_lists;
    var querytext="SELECT * from food_lists where shop_id=1001;"+
    "SELECT * from shop_lists where id=1001;"+
    "SELECT * from food_lists where shop_id=1001 and isbest=1"
    connection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.render('shops/shop_layout', {title:'학생회관', food_lists:rows[0], shop_info:rows[1], best_menu:rows[2]});
    });
});

router.get('/haksik/jin', function(req,res,next){
    var querytext="SELECT * from food_lists where shop_id=1002;"+
    "SELECT * from shop_lists where id=1002;"+
    "SELECT * from food_lists where shop_id=1002 and isbest=1"
    connection.query(querytext, (error, rows) => {
        if (error) throw error;
        res.render('shops/shop_layout', {title:'진관홀', food_lists:rows[0], shop_info:rows[1], best_menu:rows[2]});
    });
});
router.get('/restaurant/yamsem', function(req,res,next){
    var querytext="SELECT * from food_lists where shop_id=2001;"+
    "SELECT * from shop_lists where id=2001;"+
    "SELECT * from food_lists where shop_id=2001 and isbest=1"
    connection.query(querytext, (error, rows) => {
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