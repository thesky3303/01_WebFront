// 문제 1
function test1() {
  let a = 10;
  let b = 10;

  if(a > b) {
    console.log("a가 더 크다");

  } else if(a < b) {
    console.log("b가 더 크다");
    
  } else {
    console.log("a와 b가 같다");

  }
}

// 문제 2
function test2() {
  let n = 6;

  if(n % 2 == 0) {
    console.log("짝수 입니다");

  } else {
    console.log("홀수 입니다");

  }
}

// 문제 3
function test3() {
  let x = 100;
  let y = 22;
  let z = 99;

  // 최대값을 저장해둘 변수 (max)
  let max = x; // x값을 일단 가장 큰값으로 저장해둠
  // max == 15

  if(y > max) { // 현재 max(x)와 y값을 비교
    // y가 더 크면 max에 y값 덮어쓰기
    max = y;
  }

  if(z > max) {
    max = z;
  }

  // 최종적으로 가장 큰 값이 max에 저장되어 있음
  console.log("가장 큰 숫자는 " + max + " 입니다");
}



function test4() {
  const str = document.getElementById("str").value;

  if(str.length == 0) {
    console.log("미입력");
  
  } else if( str == "apple" ) {
    console.log("사과입니다");
  
  } else if( str == "banana" ) {
    console.log("바나나입니다");
  
  } else {
    console.log("다른 과일입니다");

  }

}



function test5() {

  const score = Number(document.getElementById("score").value);

  let grade; // 학점 저장할 변수

  // 점수에 따른 학점 부여
  if( score > 90 ) {
    grade = 'A';
  } else if( score > 80 ) {
    grade = 'B';
  } else if( score > 70 ) {
    grade = 'C';
  } else if( score > 60 ) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(grade);


}

function test6() {
  const age = Number(document.getElementById("age").value);
  const height = Number(document.getElementById("height").value);

  // 결과 저장용 변수
  let result; 

  // 나이와 키에 대한 조건 검사
  if(age < 0 || age > 100) {
    result = "잘못 입력하셨습니다";

  } else if(age < 12) {
    result = "적정 연령이 아닙니다";

  } else if(height < 140.0) {
    result = "적정 키가 아닙니다";

  } else {
    result = "탑승 가능!";
  }

  console.log(result);

}

const inputMonth = document.getElementById("inputMonth");
const inputTemperature = document.getElementById("inputTemperature");

function test7() {

  const month = Number(inputMonth.value);

  let season; // 계절이 뭔지 결과값 저장할 변수
  let temperature; // 몇도 인지 저장할 변수

  // 입력된 달에 따른 계절 판단
  if(month >= 3 && month <= 5) {
    // ( month == 3 || month == 4 || month == 5) 도 가능
    season = "봄";

  } else if(month >= 6 && month <= 8) {
    season = "여름";

    temperature = Number(inputTemperature.value);

    if(temperature >= 30) {
      season = `${season} [온도 : ${temperature}도, 폭염!!!]`;
    }

  } else if(month == 9 || month == 10 || month == 11) {
    season = "가을";

  } else if(month == 12 || month == 1 || month == 2) {
    season = "겨울";

    temperature = Number(inputTemperature.value);

    if(temperature <= 0) {
      season = `${season} [온도 : ${temperature}도, 한파!!!]`;
    }

  } else {
    season = "잘못된 달을 입력하셨어요!";

  }


  alert(season);



}