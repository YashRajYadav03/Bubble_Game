var timer=60;
var score=0;
var hitrn=0;
function increaseScore(){
    score += 10;
    document.querySelector("#score-value").textContent=score;
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent=hitrn;
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
            document.querySelector("#p-bottom").innerHTML=`<h1>Game Over !! Your Score:  ${score}  </h1>
            <br>
            `;
        }
        
    },1000)
}
document.querySelector("#p-bottom").addEventListener("click",function(event){
    var clickedNumber=Number(event.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

})
runTimer();
makeBubble();
getNewHit();
