// 배열의 생성 : 방법1, new 키워드
const v1 = new Array(10);   // 10개짜리 배열
const v2 = new Array();     // 빈 배열 
const v3 = new Array(2024, "String", true); // 초기 값이 있을 때, 어떤 객체들(함수 포함) 다 들어간다.

console.log(v1, v1.length, typeof v1);

// push, pop -> Stack 자료형처럼 활용 가능
// Stack : Last Input First Output (LIFO 자료형)
let fruits = [];
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);

// 인출 : pop -> 배열의 뒤에서
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);

// push, shift -> Queue 자료형처럼 활용 가능
// queue : First Input First Output (FIFO 자료형)
console.log(fruits);
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);

// shift : 배열의 첫번째 요소를 인출, 삭제
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

// splice : 배열 요소 인출 후 삭제, 추가를 동시에 할 수 있는 메서드
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
// 인수가 1개 -> 시작 인덱스부터 끝까지 추출
console.log(fruits.splice(2));  
console.log(fruits);

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
// 인수가 2개 -> 시작 인덱스, 개수
console.log(fruits.splice(2,1));
console.log(fruits);

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
// 인수가 3개 이상 -> 시작 인덱스, 개수, 추가할요소들
console.log(fruits.splice(2, 1, "Kiwi", "Mango"));
console.log(fruits);

// reverse, slice
// reverse : 순서 반전
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
fruits.reverse();
console.log(fruits);

// slice : 배열의 요소를 추출 -> 새 배열로 만든다
console.log(fruits);
let slice = fruits.slice(1, 2); // slice 원본 배열은 유지
console.log(slice);
console.log(fruits);

//split : 특정 구분자를 기준으로 문자열을 분리 -> 배열로 생성
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ")     // 공백을 기준으로 분리
console.log(chunks);

console.log("==================== sort");
fruits = ["Carrot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열:", fruits);
fruits.sort();  // 정렬 -> 오름차순
console.log("오름차순정렬:", fruits);

// 정렬 규칙을 정하고자 할 때 : 정렬 기준 함수를 매개 변수로 전달 해줘야함
fruits = ["Carrot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열:", fruits);

fruits.sort((v1, v2) => {
    // 키 함수 : 두 개 요소의 선 후 관계 결정해 줌
    // 리턴값
    //     음수 : -> v1이 앞에 온다.
    //     양수 : -> v1이 뒤에 간다(v2가 앞에 온다)
    //     0 : -> 순서 안 바꿈 (우선순위가 같다)
        if(v1 < v2) return 1;
        if(v1 > v2) return -1;
        if(v1 == v2) return 0;
});
console.log(fruits);

// 문자열 길이로 소팅
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("문자열 길이로 소팅:", fruits);