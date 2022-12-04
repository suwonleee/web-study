// *******************************************************
// oop

//constructor function
function Song(title, singer, year) {
    this.title = title;
    this.singer = singer;
    this.year = new Date(year); //날짜 변환 메소드
    // 안에 들어있는 객체 함수들은 바깥에 프로토 타입으로 빼서 나타낼 수 있다. 
    // this.getInfo = function () {
    //     return `이 곡의 제목은 ${this.title} 이고 가수는 {this.singer} 입니다.`
    // }
    // this.getYear = function(){
    //     return this.year.getFullYear(); //연도만 출력해주는 메소드
    // }
}
//프로토타입 ( 안에 있는 객체 함수 녀석들을 바깥으로 내와서 사용 가능)
Song.prototype.getInfo = function () {
        return `이 곡의 제목은 ${this.title} 이고 가수는 {this.singer} 입니다.`
}
Song.prototype.getYear = function(){
    return this.year.getFullYear(); //연도만 출력해주는 메소드
}


const song1 = Song(); // 공백도 객체 안에 들어갈 수 있다.
const song2 = new Song("Christmas", "Carrey", 1995-11-30);

console.log(song2.getInfo(), song2)

// *******************************************************
// OOP es6 ver

class es6Song {
    constructor(title, singer, year) {
        this.title = title;
        this.singer = singer;
        this.year = year;
    }
    getInfo() {
        return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer}다.`
    }
}

const song3 = new es6Song("Santa Tellme", "Ariana", "2020-11-30");
console.log(song3.getInfo())