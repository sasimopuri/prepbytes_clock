let timecontainer=document.querySelector(".mainblock_time");
function update(){
    let date = new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    let session; //AM or PM

    if(hours>12){
        session='PM';
        hours-=12
    }
    else if(hours==12){
        session='PM'
    }
    else
    session='AM'

    if(hours==0){
        hours='00'
    }
    if(mins==0){
        mins='00'
    }
    if(secs==0){
        secs='00'
    }
    
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
        <div class="box am-pm">${session}</div>
        </div>`

    setTimeout(()=>{
        update()
    },1000)

    
}

update()

function setalarm(){
    let valuee=document.querySelector('#dropdown-wakeup');
    console.log(valuee[valuee.options.selectedIndex].value);
}