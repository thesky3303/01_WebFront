function fn1() {
  // (for)10부터 1까지의 숫자 거꾸로 출력하기
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

function fn2() {
  // (for)20부터 1까지의 숫자 중 짝수만 출력하기
  for (let i = 20; i >= 1; i--) {

    if (i % 2 == 1) continue; // 홀수일때 건너뛰기

    console.log(i);
  }
}

function fn3() {
  // (while)1부터 50까지의 숫자 중 5의 배수만 출력
  let num = 1;
  while (num <= 50) {
    if (num % 5 == 0) {
      console.log(num);
    }
    num++;
  }
}

// 팩토리얼(Factorial)은 1부터 주어진 양의 정수 n까지의 모든 정수를 곱한 결과를 의미함
function fn4() {
  let number = 5;
  let factorial = 1; // 팩토리얼 값을 누적할 변수 
  // 주의 !! 0으로 초기값을 지정하면 0을 계속 곱하게되서 결국 0임
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
}




function fn5() {

  // 2중 for문을 사용하여 구구단을 출력
  for (let i = 2; i <= 9; i++) {

    for (let j = 1; j <= 9; j++) {

      console.log(`${i} x ${j} = ${i * j}`);
      
    }

  }

}

function fn6() {
  // (for)숫자 3, 6, 9 게임
  for (let i = 1; i <= 30; i++) {
    if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) {
      console.log("짝");
    } else {
      console.log(i);
    }
  }
}

function fn7() {
  // 2부터 20까지의 소수 찾기
  for (let num = 2; num <= 20; num++) {
    let isPrime = true; // num이 소수인지 아닌지 판별할 변수, 초기값 true로 처음엔 소수라고 가정함

    for (let i = 2; i < num; i++) { // 자기 자신보다 작은 숫자들로 나누어 떨어지는지 확인
      // (1턴) 2 < 2 ->  false, 안쪽 for문 수행하지 않고 탈출
      // (2턴) 2 < 3 ->  true, 안쪽 for문 수행
      // (3턴) 2 < 4 ->  true, 안쪽 for문 수행

      // (2턴) 3 % 2 == 0 -> false (나누어 떨어지지 않으므로 소수가 맞음)
      // (3턴) 4 % 2 == 0 -> true (나누어 떨어지므로 소수가 아님!) 
      if (num % i == 0) {  // 이 조건이 참이면 num은 i로 나누어 떨어지므로 소수가 아님
        isPrime = false; // 소수가 아님. false로 값 변경 후 안쪽 for문 탈출 -> 바깥 for문으로 이동
        break;
      }
    }

    // isPrime이 아래 코드에 도달할때까지 true면 소수라는 뜻.
    // (1턴) 2 출력
    // (2턴) 3 출력

    if (isPrime) {
      console.log(num);
    }

  }
}