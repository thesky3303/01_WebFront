// .js 파일 내부를 <script></script> 내부라고 생각하면 됨

console.log("html 파일과 연결됨");

function externalFn() {
  alert("외부 파일에 작성된 externalFn() 함수가 호출됨");
}

// -------------------------------

// JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색 변경

// 1. body 태그를 선택
const body = document.querySelector("body");

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
  body.style.color = "white"; // 글자색을 흰색으로 변경
  body.style.backgroundColor = "black"; // 배경색 검정으로 변경
}

/* 실행되면 라이트모드로 바꾸는 함수(기능) */
function lightMode() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}