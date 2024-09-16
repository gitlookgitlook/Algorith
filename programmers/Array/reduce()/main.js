// 1. 배열의 모든 요소의 합 구하기

const arr = [1, 2, 3, 4, 5]

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue // 하나의 값으로 축약
})

console.log(sum)

// 2. 배열에서 최대값 구하기
// Math.max() : 주어진 숫자들 중에서 가장 큰 값을 반환

const arr2 = [1, 7, 3, 9, 4]

const max = arr2.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue) // 하나의 값으로 축약
})

console.log(max)

// 3. 배열의 중복된 값 개수 세기
// 🚨 문제점 : 1,2번 초기값(숫자) X vs 3번 초기값(문자) 명시해줘야 됨
// 🚨 문제점 : accumulator[currentValue] || 0 이것의 의미 (조건문이 아닌데 사용?)

const arr3 = ["apple", "banana", "apple", "orange", "banana", "apple"]

const count = arr3.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
  return accumulator
}, {})

console.log(count)
