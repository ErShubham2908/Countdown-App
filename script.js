let endDate = "01 January 2024 00:00 AM"
document.getElementById('item_endid').innerText = endDate;
let item_end = document.getElementById('item_end');

let inputs = document.querySelectorAll('input');

function startClock(){
    const end = new Date(endDate);
    const now = new Date();
   
    if((end - now) > 0){
        const diff = (end - now ) / 1000;
        console.log(parseInt(diff))
        inputs[0].value = Math.floor(diff / 3600 / 24);
        inputs[1].value = Math.floor(diff/3600) % 24;
        inputs[2].value = Math.floor(diff / 60) % 60;
        inputs[3].value = Math.floor(diff) % 60;
    }
    else{
        item_end.innerText="congratulations";
    }
    
}

setInterval(() => {
   startClock() 
},1000);