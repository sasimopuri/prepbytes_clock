let timecontainer=document.querySelector(".mainblock_time");
function update(){
    let date = new Date();
    let hours=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    let session; //AM or PM
    window.hours24=date.getHours();

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

    let wakeup=document.querySelector('#dropdown-wakeup');
    let wakeuphour= wakeup.options[wakeup.options.selectedIndex].value;
    let lunch=document.querySelector('#dropdown-lunch');
    let lunchhour= lunch.options[lunch.options.selectedIndex].value;
    let naptime=document.querySelector('#dropdown-naptime');
    let naptimehour= naptime.options[naptime.options.selectedIndex].value;
    let nighttime=document.querySelector('#dropdown-nighttime');
    let nighttimehour= nighttime.options[nighttime.options.selectedIndex].value;

    let alarmdetails=document.querySelector('.alarmdetails-text');
    let wakeupdetail=wakeup.options[wakeup.options.selectedIndex].innerHTML;
    let lunchdetail=lunch.options[lunch.options.selectedIndex].innerHTML;
    let napdetail=naptime.options[naptime.options.selectedIndex].innerHTML;
    let nightdetail=nighttime.options[nighttime.options.selectedIndex].innerHTML;

    alarmdetails.innerHTML=`<p>Wake Up Time : ${wakeupdetail} </p>
                            <p>Lunch Time : ${lunchdetail} </p>
                            <p>Nap Time : ${napdetail} </p>
                            <p>Night Time : ${nightdetail} </p>`

    if(nighttimehour==hours24)
        updatepicture('nighttime');
    if(naptimehour==hours24)
        updatepicture('naptime');
    if(lunchhour==hours24)
        updatepicture('lunch');
    if(wakeuphour==hours24)
        updatepicture('wakeup');

    setTimeout(()=>{
        setalarm()
    },1000)
}

function updatepicture(time){
    let imgcontainer=document.querySelector('.imgcontainer');
    let quotetext=document.querySelector('.quote-text')
    switch(time){
        case 'wakeup':
            imgcontainer.innerHTML=`<img src="assets/Component 30 – 1 (1).svg" alt=""> `
            quotetext.innerHTML=`GRAB SOME HEALTHY BREAKFAST!!!`
            break;
        case 'lunch':
            imgcontainer.innerHTML=`<img src="assets/Group 5183.svg" alt="">`;
            quotetext.innerHTML=`LET'S HAVE SOME LUNCH !!`
            break;
        case 'naptime':
            imgcontainer.innerHTML=`<img src="assets/lunch_image.png" alt="">`
            quotetext.innerHTML=`STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`
            break;
        case 'nighttime':
            imgcontainer.innerHTML=`<img src="assets/Group 5194.svg" alt="">`;
            quotetext.innerHTML=`CLOSE YOUR EYES AND GO TO SLEEP`;
            break
    }
}

update()

