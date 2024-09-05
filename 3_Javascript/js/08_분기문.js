// break 확인
function check1(){

  // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
  for(let i = 1; i <= 10; i++) {
    console.log("i : ", i);

    if(i == 5) break;
  }

}

// 무한 반복하는 while 문 멈추기
function check2() {

  let i = 1;

  // i가 10 초과 시 멈춤
  while(true) {
    console.log(i++);

    if(i > 10) break;
  }

}

// continue 확인
function check3(){
  
  // 1부터 20까지 1씩 증가하며 출력
  // 단, 3의 배수는 건너뛰기
  // 1 2 4 5 7 8 10...
  for(let i = 1; i <= 20; i++) {

    // 3의 배수인 경우
    if(i % 3 == 0) continue;

    // 3의 배수인 경우 아래 코드를 수행하지 않음
    console.log("i : ", i);

  }

}

function check4(){
  // 1부터 30까지 1씩 증가하며 출력
  // 단, 홀수 또는 10의 배수는 건너뛰기
  for(let i = 1; i <= 30; i++) {

    if(i % 2 == 1 || i % 10 == 0) continue;

    console.log(i);

  }

}

// break & continue 둘 다 적용해보기
/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기

  최종적으로 아래처럼 출력되어야 함
  
  01235679
  01235679
  01235679
*/
function check5(){

  for(let y = 1; y <= 5; y++) {

    let str = "";

    for(let x = 0; x <= 9; x++) {

      // 0을 제외한 4의 배수인 경우 
      if(x != 0 && x % 4 == 0) continue;

      str += x;
    }

    console.log(str);

    // 3번째 줄 출력후 멈춰라
    if(y == 3) break;


  }

}


// UP & DOWN GAME
function startGame() {

  // 맞춰야하는 난수 (1 ~ 200) 발생
  const answer = Math.floor( Math.random() * 200 ) + 1;

  // 테스트 후 삭제
  console.log("정답 : ", answer);

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt 에 출력할 문자열
  let str = "1부터 200 사이 숫자 입력";

  while(true) { // 무한 반복

    // input에는 null / 입력한 값
    let input = prompt(str);

    if(input === null) { // 취소 클릭 시
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭 시
    const value = Number(input); // 입력 받은 값 숫자로 변환

    // 잘못 입력한 경우
    // 1. 숫자가 아닌 글자를 넣은 경우
    // NaN (Not a Number : 숫자가 아니다)
    // isNaN(값) :  값이 NaN이면 true
    if( isNaN(value) ) { // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해 주세요");
      continue;
    }

    // 2. 범위를 초과한 경우
    if(value < 1 || value > 200) {
      alert("1 ~ 200 사이 값만 작성해주세요");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count 증가
    count++;

    // 정답인 경우
    if(value === answer) {
      alert(`정답 !!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }

    // 정답이 아닌 경우
    if(value < answer) { // 작은 경우
      str = `${value} [UP] / 시도 횟수 : ${count}회`;

    } else { // 큰 경우
      str = `${value} [DOWN] / 시도 횟수 : ${count}회`;
      
    }

  }
}