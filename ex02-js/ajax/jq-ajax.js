// 페이지 초기화
$(document).ready(event => {
    // #btnCallSnippet에 click 이벤트
    $("#btnCallSnippet").on("click", event => {
        // Ajax로 snippet.html을 호출한다($.ajax)
        // option을 JavaScript 객체로 전달
        $.ajax({
            url: "snippet.html",    // 호출할 url
            type: "GET",            // 요청의 타입(호출 방식)
            // data:                // 서버로 전송할 데이터
            dataType: "text",  // 응답의 데이터 타입
            // ...? dataType을 "html"로 하든 주석을 하든 상관이 없네?
            success: function (response) {   // 성공 콜백
                // response -> 응답정보
                // console.log(response);
                $("#info").html(response);
            },
            error: function (request, status, error) {  // 실패 -> 에러 콜백
                // request: 요청 정보
                // status: 상태 정보
                // error 객체
                console.error(error);
            }
        });
    });

    // #btnCallMovies에 클릭 이벤트
    $("#btnCallMovies").click(event => {
        // 서버가 가동되고 있다는 가정하에..
        // localhost:3000/movies -> json 받아오기
        $.ajax({
            url: "http://127.0.0.1:3000/movies",
            type: "GET",
            dataType: "json",
            success: function (response) {
                // console.log(response);

                // 영화 목록 정보
                const movies = response.movies;
                // console.log(movies);    // Array

                // loop
                const tHead = $("<tr>");
                    tHead.html(`
                        <td>번호</td>
                        <td>포스터</td>
                        <td>제목</td>
                        <td>감독</td>
                        <td>개봉연도</td>
                    `);
                    $("#list").append(tHead);

                for (let i = 0; i < movies.length; i++) {
                    // 개별 영화 정보 받아오기

                    let movie = movies[i];
                    // console.log(movie);
                    let id = movie.id;
                    let title = movie.title;
                    let director = movie.director;
                    let year = movie.year;
                    let poster = "http://127.0.0.1:3000/images/" + movie.image;

                    // console.log(title, director, poster);
                    // tr 요소를 생성 -> 정보 연결 -> table#list의 자식 요소로 추가
                    const tr = $("<tr>");
                    tr.html(`
                            <td>${id}</td>
                            <td><img src="${poster}" class="poster"></td>
                            <td><a href="./detail.html" target="_blank">${title}</a></td>
                            <td>${director}</td>
                            <td>${year}</td>
                        `);
                    $("#list").append(tr);
                }
            },
            error: function (request, status, error) {
                console.log(error);
            }
        });

        // 실습 : 
        // 개별 영화를 클릭하면 새 창에
        // 영화 상세 정보를 받아와서 표시
    });
});