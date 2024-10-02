// 문제 1: 배열 합 구하기(reduce() 사용)
// let numbers = [1, 2, 3, 4, 5];  // 결과: 15
let numbers1 = [1, 2, 3, 4, 5]
let newNumbers1 = numbers1.reduce((acc, cur) => {
  return acc + cur
})

console.log(numbers1) // [1, 2, 3, 4, 5]
console.log(newNumbers1) // 15

// 문제 2: 배열 중 최대값 찾기(Math.max() + apply() 또는 reduce() 사용)
// let numbers = [10, 3, 76, 34, 23];  // 결과: 76
let numbers2 = [10, 3, 76, 34, 23]
// 1. 내가 푼 방법
let maxNumber1 = numbers2.reduce((acc, cur) => {
  if (acc >= cur) {
    return acc
  } else {
    return cur
  }
})
console.log(maxNumber1) // 76
// 2. 제시해준 방법
let maxNumber2 = numbers2.reduce((acc, cur) => Math.max(acc, cur))
console.log(maxNumber2) // 76

// 문제 3: 짝수만 걸러내기(filter() 사용)
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];  // 결과: [2, 4, 6, 8]
// filter()는 true면 반환해줌
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8]
let evenNumbers = numbers3.filter((number) => {
  return number % 2 == 0
})

console.log(numbers3) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(evenNumbers) // [2, 4, 6, 8]
// 문제 4: 배열 뒤집기 (reverse() 사용)
// let words = ["apple", "banana", "cherry"];  // 결과: ["cherry", "banana", "apple"]
let words = ["apple", "banana", "cherry"]
// array.reverse()는 괄호 안에 아무것도 넣지 않음 + 원본배열을 직접 변형함 -> 복사본을 만들어두면 좋음
let copyWords = [...words]
copyWords.reverse()

console.log(copyWords) // ['cherry', 'banana', 'apple']

// 문제 5: 배열에서 중복 제거(Set 사용)
// let items = [1, 2, 2, 3, 3, 4, 5, 5];  // 결과: [1, 2, 3, 4, 5]
let items = [1, 2, 2, 3, 3, 4, 5, 5]
let uniqueItems = [...new Set(items)]

console.log(items) // [1, 2, 2, 3, 3, 4, 5, 5]
console.log(uniqueItems) // [1, 2, 3, 4, 5]

// Set은 JS에서 제공하는 객체 타입, 주요 용도는 중복 없는 고유한 값들의 집합을 관리하는 것

// 문제 6: 배열 내 특정 값 찾기 (find() 또는 indexOf() 사용)
// let inventory = ["apple", "banana", "cherry"];
// let target = "banana";  // 결과: 1

let inventory = ["apple", "banana", "cherry"]

let target = inventory.find((fruit) => {
  return fruit == "banana"
})

console.log(inventory) // ['apple', 'banana', 'cherry']
console.log(target) // banana // find()는 조건을 만족하는 첫 번째 요소 자체를 반환해줌(배열로 반환해주지 않음)

let target2 = inventory.indexOf("banana")
console.log(target2) // 1

// 문제 7: 모든 요소 문자열로 변환하기(map() 사용)
// let numbers = [1, 2, 3, 4, 5];  // 결과: ["1", "2", "3", "4", "5"]
let numbers4 = [1, 2, 3, 4, 5]
let stringedNumbers = numbers4.map((number) => {
  return String(number)
})

console.log(numbers4) //  [1, 2, 3, 4, 5]
console.log(stringedNumbers) // ['1', '2', '3', '4', '5']
