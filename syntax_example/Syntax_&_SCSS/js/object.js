// *******************************************************
// Object, key, value
const dog = {
    name : "cogi",
    weight : 10,
    food : ["meet", "tomato", "shrimp"],
    location : {
        country: "france",
        home: "korea",
        isEuroupe: true,
    },
}

console.log(dog) // 전체 객체 보기
console.log(dog.weight) // dog의 weight 값 보기
console.log(dog.location.country) // 객체 안에 객체도 값을 불러올 수 있다.

//배열 디스트럭쳐링(Destructuring)
const { name, weight, food } = dog // dog 안에 있는 해당 값들을 불러오기.

//JSON화 하기
//JSON은 "따옴표" 로 구성되어있다.
const dogJSON = JSON.stringify(dog)