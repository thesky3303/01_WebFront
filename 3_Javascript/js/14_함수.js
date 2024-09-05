/* 매개변수, 전달인자 */

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달받아 출력하는 함수
function print1(num, str) { // 함수 선언
  // 함수 정의
  console.log(`${num} 은/는 ${str} 입니다`);
}

// #btn1 클릭 시 #input1의 값을 읽어와 print1() 함수 호출
btn1.addEventListener("click", function() {

  const value = input1.value;

  if(value.length == 0) {
    console.log("값을 입력해주세요");
    return; // 함수 종료 + 호출한 곳으로 돌아감
  }

  let result; // 결과를 저장할 변수 선언

  if(Number(value) == 0)      result = "0";
  else if(Number(value) > 0)  result = "양수";
  else                        result = "음수";

  // 함수 호출(값 전달)
  // 중요!!!!! 전달되는 값의 순서가 중요합니다!
  print1(value, result);
  //print1(result, value);

});


// 매개변수로 배열 전달하기

function arrayTest(arr) {

  // 전달 받은 배열의 모든 요소 출력하기
  for(let i = 0; i < arr.length; i++) {

    // arr[i]에 있는 값이 "멜론"과 일치하면
    // 해당 요소의 값을 딸기로 재대입해라
    if(arr[i] == "멜론") arr[i] = "딸기";

    console.log(`${i} 번 인덱스 값 : `, arr[i]);
  }
}


// #btn2a 클릭 되었을 때 arrayTest() 함수 호출
document.querySelector("#btn2a").addEventListener("click", function() {

  const arr1 = [10, 20, 30];
  const arr2 = ["사과", "바나나", "멜론"];

  arrayTest(arr1);
  arrayTest(arr2);

  console.log("arr2[2] : ", arr2[2]);

  // 왜 멜론이 아니라 딸기 출력될까?
  // -> arrayTest(arr2) 호출 시
  //  arr2 배열을 통째로 복사해서 전달하는게 아니라
  //  arr2에 저장된 주소만 보내서 함수를 수행.

  // arrayTest() 함수에서 arr2와 같은 배열을 참조해서 수정
  // -> 함수 수행 후 돌아와서도
  // 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음

  // 참조란?
  /*
    - 객체 지향 언어에서
    배열, 객체 등 값을 여러개 가지고 있는 자료형인데
    변수는 값을 1개만 저장할 수 있기 때문에

    object를 메모리 다른곳에 저장하고
    저장된 곳의 주소를 변수에 저장해서

    필요할 때마다 해당 주소를 찾아가
    원하는 값을 얻어오거나 수정할 수 있게 하는 것

    == 주소를 찾아가는 것을 [참조] 라고 한다!!

  */

})

// 매개변수로 요소 전달
function btn2bFn(el) {
  // 매개변수 el (element) : 이벤트가 발생한 요소
  el.style.backgroundColor = "yellow";
}

// 매개변수로 함수 전달

function print2(fn) {
  //console.log(fn);
  console.log( `a + b = ${fn(3, 4)}` );
}

document.querySelector("#btn2c").addEventListener("click", function() {

  // 함수도 변수에 저장 가능! 변수명 == 함수명
  const sumFn = function(a, b) {
    return a + b; // 함수를 종료 
                  // a + b 가지고 호출한 곳으로 돌아감
  }

  // 전달인자로 함수를 전달
  print2(sumFn);

});

// 전달받은 2개의 값을 곱해서 리턴(반환)
function returnTest(num1, num2) {
  return num1 * num2; // 함수 종료 + return 옆에 작성된 값을 가지고 
                      // 호출한 쪽으로 돌아감
}

// 전달받은 배열 요소의 합을 반환
function sumFn(arr) {

  let sum = 0;

  for(let i=0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;

}


// return 확인하기
document.querySelector("#btn3a").addEventListener("click", function() {

  const numbers = []; // 빈 배열 생성

  // 배열.push(값) : 배열의 마지막 요소로 값을 추가
  numbers.push(30);
  numbers.push(50);
  numbers.push(4);
  numbers.push( returnTest(2, 5) ); // 함수를 호출해서 되돌려받은 값(return 값;)을 push 하기

  console.log(numbers);


  console.log("합계 : ", sumFn(numbers)) // 94
});

// 화살표 함수

// 클래스가 arrow인 요소를 모두 얻어와 배열로 저장
const arrowList = document.querySelectorAll(".arrow");

// 화살표 함수 기본 형태
arrowList[0].addEventListener("click", () => {

  alert("화살표 함수 기본 형태 연습");

});

// 매개변수가 1개인 경우 : () 생략 가능

arrowList[1].addEventListener("click", e => {

  e.target.style.backgroundColor = "pink";

});


function twoNumberPlus( otherFn ) {

  const input1 = Number(prompt("첫 번째 값"));
  const input2 = Number(prompt("두 번째 값"));

  alert( otherFn(input1, input2) );

}


// return 한 줄만 작성된 경우
arrowList[2].addEventListener("click", () => {

  twoNumberPlus( (a, b) =>  a + b );
  // return 한 줄만 있는 경우
  // {}, return 생략 가능
});


// return 한 줄인데 object 반환하는 경우
function printObject( otherFn ) { 
  /**
   * otherFn : 
   * (name, age) => {
      return {"name" : name, "age" : age}
    }
   * 
   * */  

  console.log(otherFn("홍길동", 20)); // {"name" : "홍길동", "age" : 20}

}

arrowList[3].addEventListener("click", () => {

  printObject( (name, age) => {
    return {"name" : name, "age" : age}
    // JS 객체 { K:V, K:V ...}
  } );

});


// 즉시 실행 함수
( () => {
  console.log("즉시 실행 함수 입니다");
} )()