/* app.js 는 기능이 켜지는 스위치 같은 느낌이다. */

// 익스프레스 변수에서 익스프레스 도구를 다루겠다.
// 그리고 앱 안에 다 넣겠다.
//npm 문으로 설치해주고, 여기에 가져와주는것
const express = require('express');
const helmet = require('helmet');

//ejs 를 불러오는 곳
const ejs = require("ejs")

//data를 불러오는 곳을 app.js로 가져옴
const db = require('./model/db')
const xlsx = require('xlsx');
const json2xls = require('json2xls');

const app = express();





//앱 불러올 때 어떤 프로그램을 사용할건지? 우린 ejs를 사용할거다
//무슨 붓을 써서 사용자들에게 보여줄거냐.
app.set('view engine', 'ejs');

// 내가 보여줄 파일은 다 이 폴더에 있다.
// 그 그림파일이 어디에 들어있냐
app.set('views', './views');

//css나 이미지 같은 스태틱(정적인) 파일은 어디에 있는지 알려주기.
//public 볼더가 app.js에서 어디에 있는지. 익스프레스에서 어딘가 있단걸 도움 받는다.
app.use('/public', express.static(__dirname + '/public'));

//헬멧은 express의 보안 도구
//헬멧은 -> html , css 합치는 과정에서 방해가 되기에 주석처리
//npm helmet 치면 문서 나오는데, 부분적으로 헬멧 지정해줄 수 있다.
// app.use(helmet()); 


//POST 방식에서 body 안에 것을 불러오기 위해서
app.use(express.json());
app.use(express.urlencoded());
app.use(json2xls.middleware);

const mainRouter = require('./router/mainRouter.js')

// 슬래쉬는 고정값.
// 프로젝트가 커지면 / 뒤에 여러가지 분류로 관리하게 된다.
app.use('/', mainRouter)

//app의 전원 같은 느낌 () 3000번 방을 쓰겠다.)
// node app.js를 터미널에 입력하면 -> console.log 창이 뜬다.
app.listen(3000, function(req,res){
    //db와 app.js를 연결시키는데 sequelize의 메소드인 sync 활용 
    // force는 새로운거 생기면 덮어쓰기 해줌
    // sequelize 는 db에 곧 바로 연결하겠다.
    db.sequelize.sync({force:false})
    console.log("서버가 실행되고 있다.")
})