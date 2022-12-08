// https://jsonplaceholder.typicode.com/

//1. fetch는 api 수신할 때 -> 원래 작성 코드 
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))

//2. 위 방식보단 더 편리하게 밑에 방식을 사용한다.
// 지정된 ID를 가진 유저에 대한 요청
// 조건이 여러개일때는 주소에 붙여 작성하면 너무 길어지기에, 맨 뒤 콤마 후 params 작성 
axios.get('https://jsonplaceholder.typicode.com/users', { params: {id : 2}} )
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러(error) 핸들링
    console.log(error);
  })

  //일반적으로 사용하지 않음
//   .then(function () {
//     // 항상 실행되는 영역
//   });

