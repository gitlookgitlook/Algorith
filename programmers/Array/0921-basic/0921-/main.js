// 1. 짝수 필터링 (filter 사용)
// 문제: 주어진 숫자 배열에서 짝수만 골라내 새 배열로 반환하세요.
// 입력 예: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 출력 예: [2, 4, 6, 8, 10]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = array.filter((number) => number % 2 == 0)
console.log(newArray)

// 2. 배열 요소 제곱 (map 사용)
// 문제: 주어진 숫자 배열의 모든 요소를 제곱하여 새 배열로 반환하세요.
// 입력 예: [1, 2, 3, 4, 5]
// 출력 예: [1, 4, 9, 16, 25]

// ⭐️ map() - 새로운 배열으 반환 vs forEach() - 새로운 배열을 반환하지 않음
// 배열을 변환하여 새로운 배열을 만들고 싶다면 map(), 단순히 배열을 순회하면서 작업을 수행하고, 반환값이 필요 없을 때는 forEach()를 사용함
// forEach()는 return을 무시하므로, 반환된 값이 어디에도 저장되지 않고, 단순히 동작을 실행하는 역할만 함(return은 단순히 값을 반환할 뿐, 그 값이 어디에 저장되거나 반환되는지는 함수의 역할에 따라 달라짐!)

let mapArray = [1, 2, 3, 4, 5]
let squareNumbers = mapArray.map((number) => number * number)

console.log(mapArray) // [1, 2, 3, 4, 5] (원본 배열은 변하지 않음)
console.log(squareNumbers) // [1, 4, 9, 16, 25] (새로운 배열이 반환됨)

let eachArray = [1, 2, 3, 4, 5]
let perfectSquares = eachArray.forEach((number) => number * number) // 계산은 하지만, 반환되거나 저장되지 않음

console.log(eachArray) // [1, 2, 3, 4, 5] (원본 배열은 변하지 않음)
console.log(perfectSquares) // undefined (반환값이 없음)

// 3. 배열 합계 (reduce 사용)
// 문제: 주어진 숫자 배열의 모든 요소의 합을 계산하세요.
// 입력 예: [1, 2, 3, 4, 5]
// 출력 예: 15
let array2 = [1, 2, 3, 4, 5]
let sumArray = array2.reduce((acc, cur) => {
  return acc + cur
})
console.log(sumArray)

// 4. 문자열 길이 배열 (map 사용)
// 문제: 문자열 배열이 주어졌을 때, 각 문자열의 길이를 요소로 하는 새 배열을 반환하세요.
// 입력 예: ["apple", "banana", "cherry"]
// 출력 예: [5, 6, 6]

let fruits = ["apple", "banana", "cherry"]
let fruitsLength = fruits.map((fruit) => {
  return fruit.length
})
console.log(fruitsLength) // [5, 6, 6]
console.log(fruits.length) // 3

// 5. 배열 평탄화 (flat 사용) // 중첩된 배열 구조를 단일 레벨로 만들어줌
// 문제: 2차원 배열을 1차원 배열로 평탄화하세요.
// 입력 예: [[1, 2], [3, 4], [5, 6]]
// 출력 예: [1, 2, 3, 4, 5, 6]

let array3 = [
  [1, 2],
  [3, 4],
  [5, 6],
]

let flatArray = array3.flat() // 매개변수로 depth, 기본값은 1 - 중첩된 배열 구조를 얼마나 깊이 평탄화 할지 지정하는 깊이, 많을 경우엔 Infinity
console.log(array3) // [Array(2), Array(2), Array(2)]
console.log(flatArray) // [1, 2, 3, 4, 5, 6]

// 6. 특정 요소 찾기(find 사용)
// array.find(): 자바스크립트에서 배열 내에서 주어진 조건을 만족하는 첫 번째 요소를 찾고 반환하는 메서드, 배열의 각 요소에 대해 콜백 함수를 실행하고, 콜백함수가 true를 반환하는 첫 번째 요소를 반환함.

// 문제: 주어진 숫자 배열에서 10보다 큰 첫 번째 요소를 찾으세요.
// 입력 예: [1, 5, 12, 8, 15, 3]
// 출력 예: 12
let array4 = [1, 5, 12, 8, 15, 3]
let findArray = array4.find((number) => {
  return number > 10
})
console.log(array4) // [1, 5, 12, 8, 15, 3]
console.log(findArray) // 12

// 7. 배열 정렬 (sort 사용)
// 문제: 주어진 숫자 배열을 오름차순으로 정렬하세요.
// 입력 예: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// 출력 예: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
