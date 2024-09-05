// 배경색 적용할 각 div 배열
const boxList = document.querySelectorAll(".box");

// 배경색 입력할 각 input 배열
const inputList = document.querySelectorAll(".color-input");

//console.log(boxList);
//console.log(inputList);

// #changeButton 요소를 클릭했을 때 
document.querySelector("#changeButton").addEventListener("click", function() {

  // inputList에 작성된 각 내용을 boxList에 있는 각 div에 대입
  for(let i=0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
  }

});