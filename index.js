let timecontainer=document.querySelector(".mainblock_time");
function update(){
    let date = new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    let session; //AM or PM
    var hours24=date.getHours();

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

        let greetings=document.querySelector('.greetings-text');
        if(hours24>=4 && hours24<=11)
        {
            greetings.innerHTML=`GOOD MORNING!! WAKE UP!!`
        }
        else if(hours24>11 && hours24<18){
            greetings.innerHTML=`GOOD AFTERNOON !! TAKE SOME SLEEP`
        }
        else if(hours24>=18 && hours24<=20){
            greetings.innerHTML=`GOOD EVENING !!`
        }   
        else{
            greetings.innerHTML=`GOOD NIGHT !!`
        }

    setTimeout(()=>{
        update()
    },1000)
    
}

function setalarm(){

    function updatetime(){
        var hours24='da'
    }
    let wakeup=document.querySelector('#dropdown-wakeup');
    let wakeuphour= wakeup.options[wakeup.options.selectedIndex].value;
    let lunch=document.querySelector('#dropdown-lunch');
    let lunchhour= wakeup.options[lunch.options.selectedIndex].value;
    let naptime=document.querySelector('#dropdown-naptime');
    let naptimehour= naptime.options[wakeup.options.selectedIndex].value;
    let nighttime=document.querySelector('#dropdown-nighttime');
    let nighttimehour= nighttime.options[wakeup.options.selectedIndex].value;
     
    console.log(hours24);
    

}

update()

