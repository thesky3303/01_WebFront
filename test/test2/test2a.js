function test() {
  const body= document.getElementsByClassName("body");
  const width = document.getElementById("t1_1").value;
  const height = document.getElementById("t1_2").value;
  const size = document.getElementById("t2_1").value;
  const bold1 = document.getElementById("t2_2").value;
  const bold2 = document.getElementById("t2_3").value;
  const ftcolor = document.getElementById("t3_1").value;
  const bgcolor = document.getElementById("t3_2").value;
  const we1 = document.getElementById("t4_1").value;
  const we2 = document.getElementById("t4_2").value;
  const we3 = document.getElementById("t4_3").value;
  const de1 = document.getElementById("t5_1").value;
  const de2 = document.getElementById("t5_2").value;
  const de3 = document.getElementById("t5_3").value;
  const text = document.getElementById("bg").value;
  const font = document.getElementById("t6_1").value;

  body[2].style.backgroundColor = bgcolor;
  body[2].style.color = ftcolor;
  bg.innerText =`${font}`;
  body[2].style.fontSize = size+"px";
  body[2].style.width = width+"px";
  body[2].style.height = height+"px";



  const bb = document.getElementsByClassName("bold")
  if( bold1 == "on"){
    body[2].style.fontWeight= "";
  } 

  if( bold2 == "on"){
    body[2].style.fontWeight= "bold";
  } 

  if( we1 == "on"){
  }
  if( we2 == "on"){
  }
  if( we3 == "on"){
  } 

  if( de1 == "on"){
  }
  if( de2 == "on"){
  }
  if( de3 == "on"){
  } 


  body[2].style.border = "3px solid black";

  console.log("git test중 ~ 학원에서 작성")
  console.log("git test중 ~ 집에서 작성")

}

111