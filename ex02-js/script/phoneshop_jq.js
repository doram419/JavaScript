// 페이지 초기화
// JS : window.addEventListener("load", callback);
$(document).ready(event => {
    // console.log(document);
    // console.log($(document));   // 같은 document를 불렀지만 얘는 jQuery Wrapper 객체이다

    function testAttribute() {
        // id가 main-image인 요소 선택하기
        let mainImage = $("#main-image");
        // console.log(mainImage);

        // 속성 목록 확인 : getAttributeNames
        // jQuery 포장을 Unwrapping 해줘야함
        // console.log(mainImage[0].getAttributeNames());

        // title 속성 조회
        console.log("title : ", mainImage.attr("title"));
        // title 속성 변경
        mainImage.attr("title",
            `제품: ${mainImage.attr("title")}`);
        // 아래쪽의 Products들의 title 속성도 변경
        let subs = $(".sub-image");
        console.log(subs);

        for (let i = 0; i < subs.length; i++) {
            //내부에서 가져오면 JQuery객체가 아니다.
            //JQuery 객체로 쓰려면 재포장 필요
            $(subs[i]).attr("title", "제품:" + $(subs[i]).attr("title"));
        }
    }
    // testAttribute();

    // jQuery Event
    // #main-image를 찾아 click 이벤터 처리기 연결
    // 메서드를 이용한 이벤트 연결
    $("#main-image").click(event => {
        // console.log(event);
        // JavaScript 함수의 this는 해당 함수를 호출한 객체를 의미
        // let mainImage = this;   // jQuery 이벤트 핸들러 this == event.target
        let mainImage = event.target;
        console.log(mainImage);
    });

    let products = $(".sub-image");
    //console.log(products);

    // 집합 객체도 루프 돌리지 않고 이벤트를 연결하면 하위 요소들에
    // 공통적으로 연결된다.
    // 가장 추천하는 이벤트 연결 방법 : on()
    products.on("click", event => {
        let obj = $(event.target); // 이벤트 발생 객체
        // 클릭한 객체 (event.target)의 title과 src 속성을
        // #main-image로 복사
        $("#main-image").attr({
            src: obj.attr("src"),
            title: obj.attr("title")
        });

        $("#product-info > h2").text(obj.attr("title"));
    });

    $("#keyword").on("keyup", event => {
        console.log(event.keyCode);
        $("#btn-search").text($(event.target).val() + " 검색");
    });
});