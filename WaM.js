let timer = 0 
let gameActive = false
document.getElementById("startTheGame").addEventListener("click", function (){
    time = 30
    gameActive = true
    
document.getElementById("startTheGame").style.display = "none"

    let timerInterval = setInterval(() => {
        if(time > 0){
        time--
    }
    else {
        gameActive = false
        clearInterval(timerInterval)
    }

        console.log(time);
        document.getElementById("Timer").innerText = `Time ${time}`
    }, 1000);
    let moleInterval = setInterval(() => {
       if(!gameActive){
           clearInterval(moleInterval)
           return
       } 
    let moles = document.querySelectorAll(".moleHoles")

    let moleActive = Math.floor(Math.random() * moles.length)
    moles[moleActive].classList.add("moles")

    setTimeout(() => {
        console.log(moleActive);
        moles[moleActive].classList.remove("moles")
    }, 750)
    

}, 500);

document.getElementsByClassName("moleHoles").forEach((element) => {
    element.addEventListener('click')
})

)}
