// 1. 기본문제 : 숫자 배열의 모든 요소를 2배로 만들기
let numbers = [1, 2, 3, 4, 5]
// numbers.forEach(function (number, index) {
//   numbers[index] = number * 2 // 문제점 : 배열을 순회하면서 값을 처리하지만, 배열의 요소를 직접 수정하거나 반환하지 않습니다. (number * 2는 계산하지만, 그 결과를 배열에 반영하지 않는다.)
// })

// console.log(numbers)

// 1-2. 해결방법 : 새로운 배열로 만들어주는 map()이용해보기
let doubleNumbers = numbers.map(function (number) {
  return number * 2
})
console.log(doubleNumbers)
