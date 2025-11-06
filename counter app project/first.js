let value =0;
const counterElement = document.getElementById("main");
counterElement.innerText=value; 
function increment(){
    value++;
    counterElement.innerHTML=value;
}
function decrement(){
    value--;
    counterElement.innerHTML=value;
}
function reset(){
    value=0;
    counterElement.innerHTML=value;
}