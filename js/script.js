//Write javaScript
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

function setClock(){
    let d = new Date();
    let s = d.getSeconds();
    //setting seconds
    s = ((360/60)*s)+180;
    
    second.style.transform = "rotate("+s+"deg)";

    //setting minutes
    let m = d.getMinutes();
    m = ((360/60)*m)+180;
    minute.style.transform = "rotate("+m+"deg)";

    //setting hours
    let h = d.getHours();

    if(h>12)
    h=h-12;

    h = ((360/12)*h)+180;

    hour.style.transform = "rotate("+h+"deg)";

    
};

setInterval(setClock,1000);

