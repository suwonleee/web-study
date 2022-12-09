const express = require('express')
const router = express.Router();
const db = require('../model/db');

/* 크롤링 관련 */
//class나 id 이름을 이렇게 코드 단에서 접근할 수 있게 도와준다.
const cheerio = require("cheerio");
//외부에서 무언가를 가져올 때 
const axios = require("axios");
//한글이 깨져서 크롤링에 방해가 될 때 
const iconv = require("iconv-lite")
const url = "https://finance.naver.com/sise/lastsearch2.nhn"


router.get("/excel/down", function(req, res){
    let excel_data = [{"A":1, "B":2, "C":3, "D":4}]
    res.xls('data.xlsx', excel_data);
})

router.get("/excel", function(req,res){
    res.render("excel")
})

router.get("/crawling", function(req,res){
    //인터넷 페이지에 주소를 딱 치는게 GET 방식
    //responseType : arraybuffer 는 한글을 가져올 때 깨지지 않게 해주는 타입
    axios({url:url,method:"GET",responseType:"arraybuffer"}).then(function(html){ //html 데이터를 가져오기
         // content 변수에 해석한걸 다시 담기
        const content = iconv.decode(html.data,"EUC-KR").toString()
        const $ = cheerio.load(content) //제이쿼리 $에 네이버 금융 html 데이터가 들어있다. 
        // class 안에 tr 안에 td
        const table = $(".type_5 tr td")
        
        /* each 반복문 */
        //i는 요소의 순서를 0부터 인덱스 값 / tag는 그 인덱스의 값
        table.each(function(i,tag){
            console.log($(tag).text().trim())
        })     

        res.send({success:200})
    })
})


router.get("/", function(req,res){
    // 이미지 파일은 render를 쓴다.
    // 두번째 인자는 인덱스 페이지에서 저 데이터가 담기게 된다
    res.render('main', {title:"영화 리뷰 사이트"})
})

// 프론트 개발자와 어떤 방식으로 소통할건지 ? 
router.post("/review/create", function(req,res){
    // 리뷰 데이터 api를 만들기 위해, main.ejs의 movie_id 와 review 데이터 변수로 각각 저장
    let movie_id = req.body.movie_id;
    let review = req.body.review;

    // 리뷰 데이터가 없거나, 비어 있을 때
    if(movie_id == '' || movie_id == 0){
        // "도착하긴 했는데 잘못 도착한 것 같다는걸 말해주는"
        res.send({success:400})
    }else{
        db.reviews.create({
            //movie 객체를 reviews 테이블에 보내서 저장.
            movie_id:movie_id,
            review:review
    
        }).then(function(result){
            res.send({success:200})
        })
    }    
})

router.get("/review/read", function(req,res){
    let movie_id = req.query.movie_id;

    db.reviews.findAll({where:{movie_id:movie_id}}).then(function(result){
        res.send({success:200, data:result}) //data 에 결과값을 담아서 보내기
        //result에는 리뷰를 담아서 보내준다.
    })

})


router.get("/about", function(req,res){
    res.send('About Page')
})

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body)
    res.send('POST API')
    
})


//CRUD 만들기
//create
router.get("/data/create",function(req,res){
    let user_id = parseInt(Math.random() * 10000) // parseInt 는 정수로 만들기
    db.users.create({user_id:user_id}).then(function(result){ //함수형
        res.send({success:200}) // 잘 생성됐으면 응답 
    })
})

//read
router.get("/data/read",function(req,res){
    db.users.findAll().then(function(result){ // 요청한 응답 주체에게 
        res.send({success:200, data:result})
    })
})

//update
router.post("/data/update",function(req,res){
    let target_id = req.body.target_id;
    //9519인 애를 9999로 바꿀거다
    //어느 곳에 있는 데이털르 바꿀건지 where절 (sql문법)
    db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function(result){ 
        //성공 했을 때, 200을 보내달라.
        res.send({success:200})
    }) 
})

//delete
router.post("/data/delete",function(req,res){
    let target_id = req.body.target_id;
    db.users.destroy({where:{user_id:target_id}}).then(function(result){
        res.send({success:200})
    })
})



//모든걸 눌러담아서 내보내는 곳
module.exports = router