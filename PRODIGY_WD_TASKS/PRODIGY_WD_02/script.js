let hr = min = sec = ms = "0" + 0,
 starttimer;

const startbtn=document.querySelector(".start"),
 stopbtn=document.querySelector(".stop"),
 resetbtn=document.querySelector(".reset");

startbtn.addEventListener("click",start);
stopbtn.addEventListener("click",stop);
resetbtn.addEventListener("click",reset);

function start() {
    startbtn.classList.add("active");
    stopbtn.classList.remove("stopactive");

    starttimer = setInterval(()=>{
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        putvalue();
    },10);

}

function stop() {
    startbtn.classList.remove("active");
    stopbtn.classList.add("stopactive");
    clearInterval(starttimer);
}
function reset() {
    startbtn.classList.remove("active");
    stopbtn.classList.remove("stopactive");
    clearInterval(starttimer);
    hr = min = sec = ms = "0" + 0;
    putvalue();
}

function putvalue() {
    document.querySelector(".millisecond").innerText=ms;
    document.querySelector(".second").innerText=sec;
    document.querySelector(".minute").innerText=min;   
    document.querySelector(".hour").innerText=hr;
}