function addItem() {
    // ul#list 에 child li를 추가하는 함수              
    // input#item의 value ->
    let item = $("#item").val().trim();
    console.log(item);

    if(item.length > 0 ) // 값이 존재할 때 추가하자
    {
        // 요소 만들기 -> 콘텐츠 설정 -> 속성 설정 -> DOM 추가

        // li 생성 콘텐츠 설정
        // jQuery에서 HTML Tag형태로 사용하면 만들어줌
        let itemNode = $("<li>");   // document.createElement
        itemNode.text(item);        // == .innerText
        // itemNode 내에 삭제 버튼을 포함한 toolbar를 넣어주고,
        let toolbar = $("<div>");
        // 여러 스타일 속성을 변경하려면 자바스크랩트 객체로 전달
        toolbar.css({
            display : "inline",
            float : "right"
        });
        $(itemNode).append(toolbar);

        // 삭제 버튼을 추가
        let delBtn = $("<button>");
        delBtn.text("삭제");
        delBtn.on("click", event => {
            let removeItem = $(event.target.parentNode.parentNode);
            // jQuery는 부모를 몰라도 자식 제거 가능
            removeItem.remove();
        });

        // ul#list에 child로 추가
        $("#list").append(itemNode);
        toolbar.append(delBtn);

        // 입력 내용을 비우고, focus를 부여
        $("#item").val("").focus();
    }

}

// 초기화
$(document).ready(event => {
    // 추가 버튼에 이벤트 리스너 연결
    $("#btn-add").on("click", addItem);

    let init = $("#list li");
    
    console.log(init);

    for(let i = 0; i < init.length; i++) {
        init[i].remove();
    }
});