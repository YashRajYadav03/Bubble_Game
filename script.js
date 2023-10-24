var timer=60;
function getNewHit(){
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent=rn;
}
function makeBubble(){
var x ="";
for(var i=1; i<103; i++){
    var rn=Math.floor(Math.random()*10);
    x += `<div class="bubble">${rn}</div>`;
  // console.log(x);
}

document.querySelector("#p-bottom").innerHTML = x;
}

function runTimer(){
   var timerinterval = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timer-value").textContent=timer;
        }
        else{
            clearInterval(timerinterval);
        }
        
    },1000)
}
runTimer();
makeBubble();
getNewHit();