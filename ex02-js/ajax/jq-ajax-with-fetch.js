// 페이지 초기화
$(document).ready(event => {
    // #btnCallSnippet에 click 이벤트
    $("#btnCallSnippet").on("click", event => {
        // ES는 비동기통신을 위한 표준 함수 fetch를 내장했음
        // -> 세밀한 통신제어를 위해서는 axios (외부 라이브러리) 추천
        // 일반적 통신제어를 위해서는 fetch 함수를 활용

        // fetch(url, options)
        fetch("snippet.html")
        .then(response =>{ // 요청이 성공하면 fullfill 상태로 이행
            console.log(response); 
            return response.text();
        })
        .then(data => {
            //console.log(data);
            $("#info").html(data);
        })
        .catch(error => {
            console.error(error);
        });
    });

    // #btnCallMovies에 클릭 이벤트
    $("#btnCallMovies").click(event => {
        // 서버가 가동되고 있다는 가정하에..
        fetch("http://127.0.0.1:3000/movies")
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            $("#list").html();

            let movies = data.movies;
            //console.log(movies);

            const tHead = $("<tr>");
                    tHead.html(`
                        <td>포스터</td>
                        <td>제목</td>
                        <td>감독</td>
                    `);
                    $("#list").append(tHead);

            for(let i=0; i < movies.length; i++) {
                let movie = movies[i];
                let img = "http://127.0.0.1:3000/images/" + movie.image;
                let title = movie.title;
                let director = movie.director;

                const tr = $("<tr>");
                tr.html(`
                    <td><img src="${img}" class="poster"></td>
                    <td>${title}</td>
                    <td>${director}</td>
                `);

                $("#list").append(tr);
                // console.log(movie);
            }
        })
        .catch(error => {
            console.log(error);
        });
    });
});