module.exports = function(sequelize, DataTypes){
    //코드 하나하나에 대한 의미를 몰라도 무방합니다.
 
 //이렇게 사용하라고 제공해주는 걸 저는 그대로 소개할 뿐입니다!
 
 //걱정마시고 이 전체 코드는 단지 엑셀의 sheet를 만드는 코드
 
 //즉, 데이터베이스의 테이블을 만드는,정의하는 코드이다 라고만 알고 복붙해서 사용하시면 됩니다.
 
 //물론 내부 컬럼 값은 프로젝트에 맞게 변경하구요!
    //테이블 이름을 정의
 
     return sequelize.define('reviews',{
         //데이터베이스 테이블에는 반드시 유니크한 값이 하나 존재해야합니다.
 
         //테이블에 데이터가 하나씩 늘어날때마다 알아서 자동적으로 생성되는 값을 맨 처음에 이렇게 둡니다.
 
         
         idx : {
             type:DataTypes.INTEGER,
             autoIncrement:true, //알아서 숫자가 증가하는걸 트루
             primaryKey:true,
             allowNull:false // 공란이면 안되는 것이 공란일 때 멈추기
         },
         //컬럼 값을 정의합니다.
 
         //user_id라는 컬럼 이름과, 해당 컬럼에는 텍스트 값만 받겠다는 STRING을 입력합니다.
 
         //숫자 100은 데이터 값의 길이인데 꽤 긴 데이터를 담을 수 있는 250을 설정합니다.
 
         //이와 관련해서는 mysql datatype size라고 구글에 검색해보세요!
 
         movie_id:{
            //긴 문자 저장할 때 사용
            type:DataTypes.STRING(250)
         },
         review:{
            //긴 문자 저장할 때 사용
            type:DataTypes.TEXT
         }
     })
 }