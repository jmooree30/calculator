let a=0
let b=0

function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function divide(a,b){return a/b;}
function multiply(a,b){return a*b;}

function operate(a,b,method){
  switch(method){
    case add:
    console.log(add(a,b));
    break;
    case subtract:
    console.log(subtract(a,b));
    break;
    case divide:
    console.log(divide(a,b));
    break;
    case multiply:
    console.log(multiply(a,b));
    break;
  }
}

function addInput(a){
  buttons=document.querySelectorAll(".buttons")
  for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(e){
      document.getElementById("output").innerHTML += e.target.innerHTML;
      a = Number(e.target.innerHTML)
      console.log(a)
    })
  }
}

function doMaths(){
  
}

function equals(){
  document.getElementById("equals").addEventListener("click", function(){
    operate(a,b,add);
  });
}

function clear(){
  document.getElementById("all-clear").addEventListener("click", function(){
    document.getElementById("output").innerHTML = "";
  });
}

clear()
equals()
doMaths()