

const section2 = document.querySelector(".main_two")
const section3 = document.querySelector(".main_three")
const carbon = document.querySelector(".carbon")

const PCDESK = document.querySelector(".PCDESK")
const ntbfold = document.querySelector(".ntbfold")
const h2 = document.querySelector("h2")
const thinkpad = document.querySelector(".thinkpad")



const interact = function(){


    const sec2Top = section2.getBoundingClientRect().top;
    const sec2Bottom = section2.getBoundingClientRect().bottom;

    if(sec2Top+500 <= window.innerHeight && sec2Bottom > 500){

        carbon.style.opacity = "1"
        ntbfold.style.opacity = "1"
        ntbfold.style.transform = "translate(-50%,-10%)"
        h2.style.transform = "translateY(200px)"
        h2.style.opacity = "1"
        thinkpad.style.opacity = "1"
    }
    else{
        h2.style.transform = "translateY(0px)"
        h2.style.opacity = "0"
        carbon.style.opacity = "0"
        ntbfold.style.transform = "translate(-50%,20%)"
        ntbfold.style.opacity = "0"
        thinkpad.style.opacity = "0"
    }

}


const move = function(){
    const sec3Top = section3.getBoundingClientRect().top;
    const sec3Bottom = section3.getBoundingClientRect().bottom;

    if(sec3Top +500 <= window.innerHeight && sec3Bottom > 800 ){

        PCDESK.style.animation = `fadein 0.5s 1s both`;
    }
    else{
    
        PCDESK.style.animation = `fadeout 0.5s 1s both`;
     
    }
}


interact()
move()
document.addEventListener("scroll", function () {
    interact()
    move()
  })