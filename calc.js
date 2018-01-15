let a=0
let b=0
let operation=0

function add(a,b){
  a = Math.round(a+b);
  if(a.toString().length > 14){
   return a.toExponential(3);
 }
 else return a;
}
function subtract(a,b){
  a = Math.round(a-b);
  if(a.toString().length > 14){
   return a.toExponential();
 }
 else return a;
}
function divide(a,b){
  a = Math.round(a/b);
  if(a.toString().length > 14){
   return a.toExponential(3);
 }
 else return a;
}
function multiply(a,b){
  a = Math.round(a*b);
  if(a.toString().length > 14){
   return a.toExponential(3);
 }
 else return a;
}

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
    if(document.getElementById("output").innerHTML.length < 15){
      document.getElementById("output").innerHTML += e.target.innerHTML;
    }
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
  a=0
  b=0
});

document.getElementById("delete").addEventListener("click", function(){
  backspace=document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML=backspace.slice(0,-1);
})