const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000;

const password = '1234';

output.innerText=balance

//-------------------------------------------

function deposit() {
  if(amount.value.length == 0){alert("금액 입력")} 
    else {
          const value1 = Number(output.value);
          const value2 = Number(amount.value);

          balance += value2;
          output.innerText = balance;
          amount.value = '';
        }
}

//-------------------------------------------

function withdrawal() {
  if(amount.value.length == 0){alert("금액 입력")} 

    else {
          const value1 = Number(output.value);
          const value2 = Number(amount.value);

          const password = prompt ("비밀번호를 입력하세요");

          if(password == null){alert("취소"); } 

            else if(password == '1234' && value2<=balance )
            {alert("비밀번호 일치");
              balance -= value2;
              output.innerText = balance;
              amount.value = '';
              alert(`${value2} 원 출금완료. 잔액 : ${balance} 원`)} 

            else if (password == '1234' && value2 > balance) {alert ("출금 금액 모자름")}

              else {alert("비밀번호 틀림")}

          }
}