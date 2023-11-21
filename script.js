var timer=60;
var score=0;
var hitrn=0;
function makeBubble(){

    var clutter='';
    
    for(var i=1;i<=154;i++){
        var rn=Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector('.pbottom').innerHTML=clutter;
}


function runTimer(){
    var timerInt=setInterval(function(){
        if(timer>0){

            timer--;
            document.querySelector("#timer_value").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector('.pbottom').innerHTML=`<h1>Game Over<h1>`;
        }
    },1000);
}


function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector('#hit_val').textContent=hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector('#score_val').textContent=score;
}

document.querySelector('.pbottom').addEventListener('click',function(details){
    var clickthenum=Number(details.target.textContent);
    if(clickthenum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})



runTimer();
makeBubble();
getNewHit();
