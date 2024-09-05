// window.setTimeout() 
document.getElementById("btn1").addEventListener("click", () => {

  setTimeout( function() {
    alert("3초 후 출력!");
  }, 3000);

});


// window.setInterval() 

let interval;  // setInterval을 저장하기 위한 전역 변수

// 현재 시간 문자열로 반환 함수
function currentTime() {

  const now = new Date();
  //console.log(now);

  let hour = now.getHours(); // 시
  let min = now.getMinutes(); // 분
  let sec = now.getSeconds(); // 초
  //console.log(hour, min, sec);

  // 1의 자리일때 앞에 "0" 붙임
  if(hour < 10) hour = "0" + hour;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
  //    12 : 42 : 05

}

function clockFn() {

  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(function() {
    clock.innerText = currentTime();
  }, 1000);


}

clockFn(); // 함수 호출

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});





//currentTime();