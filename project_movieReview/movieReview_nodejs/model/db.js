var Sequelize = require("sequelize");
var sequelize;

// 어디 컴퓨터에 있는 mysql에 접근할건지 
// 데이터 명 / root / 비밀번호 
sequelize = new Sequelize("soowon_data","root","tnjs10150513!@",{
    host:"localhost", //내 컴퓨터
    port:3306, //모든 mysql은 3306 이용
    dialect:"mysql",
    timezone: "+09:00",
    define: {
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true, // 몇시 몇분에 뭘 했다는걸 알려줌
        freezeTableName:true
    }
});

// sql error 대처 방법 
// sequelize.authenticate().complete(function (err){
//     if (err) {
//        console.log('There is connection in ERROR');
//     } else {
//        console.log('Connection has been established successfully');
//     }
//    });

// 자바스크립트 변수를 눌러담아서 내보내는 곳
var db = {};

//users db를 가져오기.
//users.db는 함수로 되어있어서 임포트 해주는거 , __dirname 는 상대주소 
db.users = sequelize.import(__dirname + "/users.js");
// " 나 리뷰 데이터 SQL도 만들었어" 알려주기
db.reviews = sequelize.import(__dirname + "/reviews.js")


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;