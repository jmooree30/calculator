let a=0
let b=0
let operation=0

function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function divide(a,b){return a/b;}
function multiply(a,b){return a*b;}

function operate(a,b,method){
  switch(method){
    case "add":
    document.getElementById("output").innerHTML = add(a,b);
    break;
    case "subtract":
    document.getElementById("output").innerHTML = subtract(a,b);
    break;
    case "divide":
    document.getElementById("output").innerHTML = divide(a,b);
    break;
    case "multiply":
    document.getElementById("output").innerHTML = multiply(a,b);
    break;
  }
}

buttons=document.querySelectorAll(".buttons")
for(i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click", function(e){
    document.getElementById("output").innerHTML += e.target.innerHTML;
  })
}

operator=document.getElementsByClassName("operator");
for(i=0;i<operator.length;i++){
  operator[i].addEventListener("click", function(e){
    operation=e.target.id;
    a = Number(document.getElementById("output").innerHTML)
    document.getElementById("output").innerHTML = ""
  });
}

document.getElementById("equals").addEventListener("click", function(){
  b = Number(document.getElementById("output").innerHTML)
  operate(a,b,operation);
});

document.getElementById("all-clear").addEventListener("click", function(){
  document.getElementById("output").innerHTML = "";
});
