function test() {
  // prompt() 사용 연습

  const password = prompt("비밀번호를 입력하세요");

  // 확인 -> 입력한 문자열
  // 취소 -> null

  if(password == null) { // 취소
    alert("취소");

  } else { // 확인

    if(password == '1234') {
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치!");
    }

  }
}

// ----------------------------------------

const amount = document.getElementById("amount"); // 금액 작성 input
const output = document.getElementById("output"); // 잔액 출력 span

let balance = 10000; // 잔액 기록 변수 (초기값 10000)

const password = '1234'; // 비밀번호 저장 변수

output.innerText = balance; // 초기 금액 설정

// 입금 
function deposit() {
  // 1. 입금 버튼 클릭 해당 함수 수행
  // 2. input에(금액을 작성한 input == amount) 입력된 금액 구하기
  // (번외) : input에 금액을 작성안하고 입금버튼을 누른경우
  // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...
  if(amount.value.length == 0) { // 금액을 입력 안했을때
    alert("금액을 입력해주세요");

  } else { // 금액을 입력했을때
    //balance = balance + Number(amount.value);
    // 3. 구한 금액을 잔액(balance)에 누적하기
    balance += Number(amount.value);
    // 잔액변수 = 현재잔액 + 내가 새로 입력한 금액

    output.innerText = balance; 
    // 현재 잔액(balance)을 다시 span태그(output)사이에 출력

    // input에 기존에 작성된 값 제거하기
    amount.value = '';
  }


}

// 출금
function withdrawal() {
  // 1. 출금 버튼 클릭 해당 함수 수행
  // (번외) : input에 금액을 작성안하고 출금버튼을 누른경우
  // -> 금액을 입력하세요 와 같은 메세지 띄우기 처리...
  // 2. 비밀번호를 입력받기
  // 2-1. 취소버튼 눌렀을 때 처리
  // 2_2. 확인버튼 눌렀을 때 처리
  //  -> 비밀번호가 일치하는지 안하는지 따지기
  //  -> 일치한다면? 
  //   -> 출금할 금액이 잔액보다 큰경우 처리
  //   -> 출금할 금액이 잔액보다 작거나 같은경우 (출금 처리 가능)
  //   -> 잔액 balance에서 내가 작성한 금액 차감

  if(amount.value.length == 0) { // 금액 입력 안했을때
    alert("금액을 입력해주세요");

  } else { // 금액 입력 했을때
    // 2. 비밀번호를 입력받기

    const pw = prompt("비밀번호를 입력하세요");

    if(pw == null) { // prompt 취소 버튼 누른경우
      alert("출금을 취소하셨습니다");

    } else { // prompt 확인 버튼 누른경우

      if(password != pw) { // 비밀번호가 일치하지 않을 경우
        alert("비밀번호가 일치하지 않습니다!");

      } else { // 비밀번호가 일치할 경우

        // 내가 현재 입력한 금액 저장
        const money = Number(amount.value);

        // 출금할 금액이 현재 잔액보다 큰 경우
        if(money > balance) {
          alert("출금 금액이 잔액보다 클 수 없습니다!");

        } else { // 출금할 금액이 현재 잔액과 같거나 작은경우

          // 잔액 = 현재잔액 - 금액
          //balance = balance - money;
          balance -= money;
          output.innerText = balance;
          amount.value = '';

          alert(`${money}원이 출금되었습니다. 남은 잔액 ${balance}`);
        }

      }
  
    }

  }

}