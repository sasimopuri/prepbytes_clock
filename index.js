
let timecontainer=document.querySelector(".mainblock_time");

function update(){
    let date = new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    timecontainer.innerHTML=`<div class="insideblock">
    <div class="box box-time">TIME</div>
    <div class="box">
        <span class="digit">${hours}</span>
        <span class="text">hours</span>
    </div>
    <div class="box-colon">:</div>
    <div class="box">
        <span class="digit">${mins}</span>
        <span class="text">mins</span>
    </div>
    <div class="box-colon">:</div>
    <div class="box">
        <span class="digit">${secs}</span>
        <span class="text">secs</span>
    </div>
    <div class="box-colon">:</div>
    <div class="box am-pm">AM</div>
</div>`

    setTimeout(()=>{
        update()
    },1000)

    
}

update()
