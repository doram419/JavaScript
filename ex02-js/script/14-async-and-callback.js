// callback 처리()
function logicA() {
    console.log("begin logic A");

    // 비동기
    setTimeout(() => {
        console.log("\t\tcallbackA called");
        console.log("\tbegin logic B");

        // 비동기
        setTimeout(()=>{
            console.log("\t\tcallbackB called");
        }, 2000);

        console.log("\tend logic B");
    }, 2000);

    console.log("end logic A");
}
// logicA();

// 비동기처리를 동기방식처럼 호출하기 위해 마련된 객체 -> Promise
// Pending, Fullfill, Reject
function logicPromise(){
    console.log("begin logicPromise");

    // Promise 객체를 리턴
    return new Promise((resolve, reject) => {
        // resolve 함수 -> fulfill 상태로 이전시키는 역할
        // reject 함수 -> reject 상태로 이전시키는 역할
        console.log("begin logicPromise");
        // 비동기 
        setTimeout(() => {
            // 내부 로직 수행
            resolve("RESOLVE")
        }, 3000);

        console.log("end logicPromise");
    });
}

// logicPromise();

function testLogicPromise() {
    console.log("Test Logic Promise");

    logicPromise() // Promise를 반환하는 함수(혹은 객체)
    .then(value => { // Promise 내부에서 resolve 함수로 전달해 준 값 (fullfill 상태로)
        console.log("PROMISE resolve:", value);
    })
    .catch(reason => {  // Promise 내부에서 reject 함수로 전달해 준 값 (rejected 상태로)
        console.log("PROMISE reject:", reason);
    });
}
// testLogicPromise();

// async / await
// -> Promise를 손쉽게 사용하기 위한 키워드
// async 함수는 비동기 처리를 위해 Promise를 생성한다
async function f()
{
    console.log("aync function");
    return 1;
}

// console.log(f());

// 가상 시나리오:
// 네트워크 통신을 통해 데이터를 가져온다는 가정
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            resolve("서버로부터 가져온 데이터");
        }, 2000);
    });  
}

// async는 Promise를 만들어내는 키워드
async function processData() {
    console.log("데이터를 가져오는 중...");
    try{
        // Await 키워드 : Promise가 해결 될때까지 코드를 일시 중지시킴
        //                  Promise가 해소되면, Promise의 결과값을 반환
        // Await 키워드 함수를 사용을 위해 함수에 asyn가 붙어있어야 한다
        const data = await fetchData();
        console.log("가져온 데이터: ", data);
    }
    catch (error) {
        console.error(error);
    }
}

processData();