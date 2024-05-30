window.addEventListener("load", event => {
    // registorForm 을 찾아서 검증 이벤트 연결
    // const frm = document.getElementById(registerFoem)
    const frm = document.forms["registerForm"];    

    frm.addEventListener("submit", event => {
        // 기본 기능을 막아둔다
        event.preventDefault();

        // 사용자 이름 검증
        if(frm.username.value.trim() === ""){
            alert("사용자 이름을 입력해주세요")
            frm.username.focus();
            return;
        }

        // 사용자 이메일 검증
        if(frm.email.value.trim() === ""){
            alert("이메일이 입력되지 않았습니다.");
            frm.email.focus();
            return;
        }

        // 비밀번호 검증
        if(frm.password.value === "") {
            alert('비밀번호를 설정하지 않았습니다.');
            frm.password.focus();
            return;
        }

        if(frm.password_confirm.value === "") { 
            alert(`확인 비밀번호를 설정하지 않았습니다.`);
            frm.password_confirm.focus();
            return;
        }

        if(frm.password.value !== frm.password_confirm.value) {
            alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
            return;
        }

        //  radio 상자의 선택된 값 확인
        let message = frm.gender.value === 'M' ? "남성" : "여성";
        console.log(`${message}를 선택하셨습니다.`);

        // checkbox : 
        // 최소 1개의 체크 박스가 선택되어 있어야 한다는 가정
        let checkedCnt = 0;
        for (let index = 0; index < frm.fav.length ; index++){
            if(frm.fav[index].checked) {
                checkedCnt++;
            }
        }       
        
        if(checkedCnt === 0 )
        {
            alert("최소 음료 1개는 선택해야 합니다.");
            return;
        }

        // select 태그 선택값
        console.log("select:", frm.telecom);
        console.log("options:", frm.telecom.options);
        console.log(
            frm.telecom.options[frm.telecom.selectedIndex].value 
            + "를 선택하셨습니다.");

        // 이용약관 동의 (terms)
        if(!frm.terms.checked) {
            alert("이용약관에 동의하세요");
            return;
        }

        frm.submit();
    }); 

    //console.log(frm);
});