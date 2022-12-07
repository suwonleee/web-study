// api key는 고정 값이라 const로 변수 저장해줍니다.
const API_KEY = "f1c1c6b3906b6fa786ae31d5084087a0"
const url =`https://api.openweathermap.org/data/2.5/weather?lat=37.5666791&lon=126.9782914&appid=${API_KEY}` //weather 업데이트 후 api 불러오는 방법
const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weatherSelect = document.querySelector("#weather-select");
const info = document.querySelector(".info");


const getWeather = async (city = 'seoul') => {
     //도시명은 생성마다 다르게 함수 변수로 지정, 디폴트 값은 서울로 지정
    // 변수에 api 키 , 도시명 등 변수에 담아서 저장
    const urlCity =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    //디스트럭쳐링
    // 계속 api data 안에 값들을 불러와야해서 이것들을 구조화 해준 뒤, 불러오기 편하게 만들기
     //
    const response = await axios.get(url);// 응답 오는걸 기다렸다가 응답 출력
    const { name, main, weather, wind } = response.data;
    locationDisplay.innerText = name // 글자 서울로 바꾸기 원래는 response.data.name
    temperatureDisplay.innerText = transferTemparture(main.temp) //온도 불러오고 상대 온도로 바꾸기
    weatherDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}.png`); //날씨 데이터 리스트 첫번째 icon을 이용해서 html 안 아이콘 바꾸기
    windDisplay.innerText = wind.speed; // 초속
    feelLikeDisplay.innerText = transferTemparture(main.feels_like); //체감 온도
}


const transferTemparture = (temp) => {
    return (temp - 273.15).toFixed(1); // 273.15 상대 온도로 바꾼 뒤 소수정 한자리까지
}

getWeather();