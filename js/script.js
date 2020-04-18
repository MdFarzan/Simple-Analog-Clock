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

    

    
};

setInterval(setClock,1000);

