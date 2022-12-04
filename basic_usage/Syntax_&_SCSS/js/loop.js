// *******************************************************
const animals = [
    { name: "monkey", size: "small", isAggressive: false, weight:10},
    { name: "lion", size: "medium", isAggressive: false, weight:120},
    { name: "tiger", size: "medium", isAggressive: false, weight:130},
    { name: "hippo", size: "large", isAggressive: false, weight:230},
    { name: "cat", size: "small", isAggressive: false, weight:15},
]

//전통적인 방식
for(let i=0; i < animals.length; i++) {
    console.log(animals[i])
}

//다른 방식
for(let animals of animals) {
    console.log(animal.size)
}

// *******************************************************
// forEach, map, reduce, filter

//1. forEach
animals.forEach(function(animal, index){ //index는 기본적으로 제공된다.
    console.log(animal, index)
})

// 2. map
// map 은 재정의, react 나 vue에서 많이 쓰인다.
animals.map(function(animal){
    console.log(animal)
}) // animals 값들을 불러와주게 된다.

const mappedAnimal1 = animals.map(function(animal){
    return animal
    // return animal.name //이름만 반환하게 된다.
    // return { name: animal.name, size: animal.size} //두개를 불러와서 하나로 만들기
    // return `${animal.name} is ${size}` //두개를 이렇게 문장으로 맵핑 가능
})
console.log(mappedAnimal1) //animals와 같은 배열이 출력되게 된다.

//arrow function
// 조건이 한줄이라면 요약 가능
const mappedAnimal2 = animals.map(animals=>animal.name)
//이렇게 하면 처음에 animal.name을 불러왔던 저 map문과 동일해짐 


//filter 필터
const filteredAnimal1 = animals.filter(animal => {
    return animal.size === 'medium' //lion 과 tiger 배열이 출력
    // return animal.weight >= 200   //hippo 배열 
    // return animal.weight >= 200 && animal.size === 'big'; //조건을 &&로 만족시킬 수 있다.
})

//조건이 한줄이라면 요약도 가능
const filteredAnimal2 = animals.filter(animal => animal.size === 'medium')



// reduce 는 합 
// acc는 더해지는 값 cur은 현재 값 
const reducedAnimal = animals.reduce((acc, cur)=> {
    return acc + cur.weight //반복문을 돌면서 몸무게를 더해주게 된다.
},0) //초기값 지정해주기

console.log(reducedAnimal)