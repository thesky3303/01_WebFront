// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name) {
  console.log(`1번 : Hello, ${name}!`);
}

fn1('미현'); // Hello, 미현!


// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
function addNumbers(a, b) {
  return a + b;
}

console.log("2번 : " + addNumbers(3, 4)); // 7



// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const multiply = (a, b) => a * b;
console.log( "3번 : " + multiply(2, 5)); // 10



// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고, 
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
function compareNumbers(a, b) {
  if (a > b) {
      console.log("4번 : 첫 번째 숫자가 더 큽니다");
  } else {
      console.log("4번 : 두 번째 숫자가 더 크거나 같습니다");
  }
}
compareNumbers(5, 3); // 첫 번째 숫자가 더 큽니다
compareNumbers(2, 4); // 두 번째 숫자가 더 크거나 같습니다



// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
function printLength(str) {
  console.log("5번 : "+ str.length);
}

printLength('JavaScript'); // 10



// 6. 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
function repeatString(str, times) {

  let result = '';

  for (let i = 0; i < times; i++) {
      result += str;
  }

  console.log("6번 : "+result);

}

repeatString('Hello', 3); // HelloHelloHello



// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
function isEven(num) {
  return num % 2 === 0;
}
console.log("7번 : " + isEven(4)); // true
console.log("7번 : " + isEven(7)); // false



// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
function findMax(a, b, c) {
  
  let max = a;
  if(max < b) {
    max = b;
  } 

  if(max < c) {
    max = c;
  }

  return max;

  // 내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
  //return Math.max(a, b, c);
}

console.log("8번 : " + findMax(1, 5, 3)); // 5



// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const getFirstElement = (arr) => arr[0];
console.log("9번 : " + getFirstElement([10, 20, 30])); // 10



// 10 .배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
function sumAndAverage(arr) {
  // let sum = 0;

  // for(let i=0; i<arr.length; i++) {
  //   sum += arr[i];
  // }

  let sum = arr.reduce((acc, curr) => acc + curr);
  // 배열.reduce() : JS 배열의 메서드로, 배열의 모든 요소를 순회하면서 하나의 결과값을 누적하여 반환
  // acc(accumulator) : 누산기 - 결과를 누적
  // curr(currentValue) : 현재값 -  현재 배열 요소 값

  let avg = sum / arr.length;

  return { "합계" : sum, "평균" : avg };
}

console.log(sumAndAverage([1, 2, 3, 4, 5])); // { "합계" : 15, "평균" : 3 }


// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multi(x, y) {
  return x * y;
}

console.log("11번 : " + calculate(5, 3, add));       // 8
console.log("11번 : " + calculate(5, 3, multi));  // 15


// 12. 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

// 인사를 출력하는 함수
function greet(name, callback) {
  // callback 함수 : 다른 함수의 매개변수로 전달되어, 특정 작업이 완료된 후에 호출되는 함수
  // 매개변수로 전달, 지연된 실행, 비동기 작업 등에서 이용
  callback(name);
}

// 기본 인사말을 출력하는 함수
function sayHello(name) {
  console.log("12번 : " +`안녕하시오, ${name}!`);
}

// 다른 인사말을 출력하는 함수
function sayGoodbye(name) {
  console.log("12번 : " +`잘가, ${name}!`);
}

// callback 함수 sayHello와 sayGoodbye
greet('길동', sayHello);  // 안녕하시오, 길동!
greet('미현', sayGoodbye);  // 잘가, 미현!
