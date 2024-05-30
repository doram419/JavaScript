 // 초기화 코드 작성
 window.addEventListener("load", event => {
    // ul#list로부터 자식 li 모두 삭제
    let cartItems =  document.querySelectorAll("#list > li");
    console.log((cartItems));

    // 부모에서 자식 찾기
    // let parent = document.getElementById("list");
    // console.log(parent);
    // // 자식 노드를 가지고 있는가?
    // console.log("자식을 가지고 있는가? : ", parent.hasChildNodes());
    // // 자식 목록 확인
    // console.log("자식 목록", parent.children);

    // 자식에서 부모 찾기
    for (let i = 0; i < cartItems.length; i++) {
        let parent = cartItems[i].parentNode;
        console.log(parent);

        parent.removeChild(cartItems[i]);
    }

    // 추가 버튼(#btn-add)에 이벤트 처리 함수 연결
    document.getElementById("btn-add")
        .addEventListener("click", addItem);
    // 함수지만 연결만 하고 호출할 건 아니라서 () 사용하지 않음.
});

function addItem(){
    // input#item 으로부터 value 속성 값 가져옴
    const itemInput = document.getElementById("item");
    const item = itemInput.value.trim();
    
    if(item.length > 0) {
        console.log("추가 아이템:", item);

        // 추가할 요소 생성(li)
        let itemNode = document.createElement("li");
        itemNode.innerText = item;  // Contents 추가
        let toolbar = document.createElement("div");
        toolbar.style.display = "inline";
        toolbar.style.float = "right";
        let btnDel = document.createElement("button");
        btnDel.innerText = "삭제";
        btnDel.addEventListener("click", event => 
            {
                // console.log(event.target
                // .parentNode.parentNode);
                let removeItem = event.target.parentNode.parentNode;
                container.removeChild(removeItem);
        });

        toolbar.append(btnDel);
        itemNode.append(toolbar);

        // 부모 노드에 자식 노드를 추가
        let container = document.getElementById("list");
        container.appendChild(itemNode);

        // 입력된 데이터를 삭제하면 깔끔할거 같다
        itemInput.value = "";
        itemInput.focus();
    }
}