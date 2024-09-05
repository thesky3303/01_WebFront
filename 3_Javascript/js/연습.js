const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const test3 = document.getElementById("test3");

function t1() {
  const v1 = Number(test1.value);
  const v2 = Number(test1.value);
   test3.innerText = v1 + v2;
};


function t2() {
  const v1 = Number(test1.value);
  const v2 = Number(test2.value);
  test3.innerText = v1 - v2;
};

function t3() {
  const b1 = Number(test1.value);
  const b2 = Number(test2.value);
  test3.innerText=b1*b2;
}

const ost1 = document.getElementById("ost1");
const ost2 = document.getElementById("ost2");
const ost3 = document.getElementById("ost3");
const ost4 = document.getElementById("ost4");

function ost() {
  const o1 = Number(ost1.value);
  const o2 = Number(ost2.value);
  const o3 = Number(ost3.value);

  ost4.innerText=o1+o2+o3;
}

let count1 = 0;

const pp3 = document.getElementById("pp3")

function pp2(){
  count1++;
  pp3.innerText = count1;
};

function pp1() {
  count1--;
  pp3.innerText = count1;
};

