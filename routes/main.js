const express=require('express');
const fs=require('fs');
const router = express.Router();

router.get('/', function(req,res,next){
    res.render('index', {title:'학교에서 밥을먹자'});
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
    res.render('shops/haksik/B1', {title:'학생회관'});
});

router.get('/haksik/jin', function(req,res,next){
    res.render('shops/haksik/jin', {title:'진관홀',notice:'가격인상이 있었습니다. 도리아가 맛있습니다.'});
});

router.get('/restaurant/yamsem', function(req,res,next){
    res.render('shops/restaurant/yamsem', {title:'얌샘김밥',notice:'공지가 없습니다.'});
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