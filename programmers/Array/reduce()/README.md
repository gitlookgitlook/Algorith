# reduce() - 배열의 모든 요소를 순회하면서 그 요소들을 하나의 값으로 축약할 필요가 있을 때 사용하는 함수 (원본 배열을 건들지 않음)

- array.reduce((accumulator, currentValue, currentIndex(선택), array(선택)) => { // 누적된 값을 반환 }, initialValue(선택));
- accumulator: 누적된 값. 이전 반복의 반환 값이 저장되는 변수
- currentValue: 현재 배열에서 처리 중인 요소
- currentIndex (선택): 현재 요소의 인덱스
- array (선택): 현재 처리 중인 배열 자체
- initialValue (선택): accumulator의 초기값, 이 값이 주어지지 않으면 배열의 첫 번째 요소가 초기값으로 사용됨

## 현 시점에서 해결되지 않은 점

- 왜 초기값에 {} 명시를 해야되는지, 1,2번은 숫자열? 3번은 문자열이라서 그런건지? 왜 빈 객체를 만들어야 되는지 이해가 되지 않는 점 해결하기
- if문도 아닌데 || 논리연산자를 왜 사용하는지 확인하기
- sort()를 사용하지 않아도 오름차순(a->z)로 알아서 정렬되는건지, 아니면 추가적으로 사용을 해줘야 되는지 확인하기