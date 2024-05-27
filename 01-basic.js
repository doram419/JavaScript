// 한 줄 주석
/* 여러 줄 주석
: 주석의 사용 방법은 c와 동일하다
 */

//console 객체 : 출력 장치에 로그 레벨 별로 로그를 출력하는 객체
// FATAL -ERROR(error) - WARN(warn) - NORMAL(log, info), DEBUG(debug)
console.info("정보 메시지 출력");
console.debug("디버그 메시지 출력");
console.log("일반 메시지");

console.warn("경고 메시지");
console.error("에러 메시지");

// 출력할 내용들을 , 로 구분해서 나열
console.log("String", 2024, true);

console.log(process.version, process.platform);

