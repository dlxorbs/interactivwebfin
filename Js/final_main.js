
const ntbcon1 = document.querySelector(".ntbcon1")
const ntbcon2 = document.querySelector(".ntbcon2")
const ntbcon3 = document.querySelector(".ntbcon3")
const main = document.querySelector(".main")
const MainText = document.querySelector(".MainText")

const parallax = document.querySelector(".parallax");

let m =0;
let x = 0;

document.addEventListener("wheel", function (e){
// console.log(-8*x);
console.log(-0.006*x);
// console.log(m);
// console.log(scrollY);

//scrolldown
if( scrollY < 1600){

    main.style.position = "sticky"
    main.style.top = "0px"

    if(e.wheelDelta < 0){ 
        m = m - 0.1*e.deltaY ;
        ntbcon1.style.transform = `matrix(1,0,0,1,${-2*m},0)`
        ntbcon3.style.transform = `matrix(1,0,0,1,${+2*m},0)`
        if(m < -120){
            m = -130;
        }
    }else{
        m = m - 0.1*e.deltaY ;
    
            ntbcon1.style.transform = `matrix(1,0,0,1,${20-2*m},0)`
            ntbcon3.style.transform = `matrix(1,0,0,1,${-20+2*m},0)`
            if(m > 0){
                m=0;
            }
        
    }
}  



if(scrollY >= 1600){
    main.style.position = "sticky"
    main.style.top = "0px"

    if(e.wheelDelta < 0){ 
        x = x - 0.1*e.deltaY ;
        ntbcon1.style.transform = `matrix(1,0,0,1,${280-10*x},0)`
        ntbcon2.style.transform = `matrix(1,0,0,1,${0-10*x},0)`
        ntbcon3.style.transform = `matrix(1,0,0,1,${-280-10*x},0)`
        
            
        ntbcon1.style.opacity = `${1+0.006*x}`
        ntbcon2.style.opacity = `${1+0.006*x}`
        ntbcon3.style.opacity = `${1+0.006*x}`

        MainText.style.opacity = `${-0.006*(x-9)}`

        if(x < -150){
            x = -160;
        }
    }else{
        x = x - 0.1*e.deltaY ;
        MainText.style.opacity = `${-0.006*(x-9)}`

        ntbcon1.style.opacity = `${1+0.006*x}`
        ntbcon2.style.opacity = `${1+0.006*x}`
        ntbcon3.style.opacity = `${1+0.006*x}`


            ntbcon1.style.transform = `matrix(1,0,0,1,${280-10*x+100},0)`
            ntbcon2.style.transform = `matrix(1,0,0,1,${0-10*x+100},0)`
            ntbcon3.style.transform = `matrix(1,0,0,1,${-280-10*x+100},0)`
      
            if(x > 0){
                
     
                x=0;
                if(e.wheelDelta > 0){
                    m = m - 0.1*e.deltaY ;

                        ntbcon1.style.transform = `matrix(1,0,0,1,${20-2*m},0)`
                        ntbcon3.style.transform = `matrix(1,0,0,1,${-20+2*m},0)`

                        if(m > 0){
                            m=0;
                        }
                    
                
                }
            }
        
    }

}

})





//   /클릭이벤트

const searchTag = document.querySelector("ul a.search")
const searchbarTag = document.querySelector(".head")
const closeTag = document.querySelector(".close")
const link = document.querySelector("div.content")
const anc = document.querySelector("div.link2")
const move = anc.querySelectorAll("a")
const gray = document.querySelector(".gray")


searchTag.addEventListener("click", function(){
   
    searchbarTag.classList.toggle("open")
    link.classList.toggle("open")
    gray.classList.toggle("open")
    // anc.classList.toggle("open")


    for(let i = 0; i < 5; i++){
        move[i].style.transform = "translate(0px,0px)"
        // move[i].style.opacity = "1"
        let s = 0.2*i
        move[i].style.transition = `${s}s`
    }
})

closeTag.addEventListener("click", function(){
   
    searchbarTag.classList.toggle("open")
    link.classList.toggle("open")
   gray.classList.toggle("open")


    for(let i = 0; i < 5; i++){
        move[i].style.transform = "translate(400px,0px)"
        // move[i].style.opacity = "0"
        let s = 0.9/(i+1)
        move[i].style.transition = `${s}s`
    }
})


const gry = function(){

    const parallaxTop = parallax.getBoundingClientRect().top;
    const parallaxBottom = parallax.getBoundingClientRect().bottom;


    if(parallaxTop + 350 <= window.innerHeight && parallaxBottom > 350){

        parallax.style.filter = "grayscale(0%)"
    }else{
        parallax.style.filter = "grayscale(100%)"
    }
}


document.addEventListener("scroll", function () {
    gry()
  })


