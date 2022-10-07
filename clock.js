let handleId =0;
const h1 = document.getElementById('time');
const go = document.getElementById('go');
const stop = document.getElementById('stop');

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hour<10 ?`0${hour}`:hour}:${minutes <10 ?`0${minutes}`:minutes}:${seconds<10 ?`0${seconds}`:seconds}`;
    h1.textContent = time;
}

getTime()

go.onclick = function(){
    if(handleId == 0){                            //setInterval(a,1000) a함수를 1000ms 주기를 가지면서 작동한다
        handleId = setInterval(getTime,1000)
    }
}
stop.onclick = function(){
    clearInterval(handleId); //0이 아닌 handelId 제거
    handleId = 0;
}