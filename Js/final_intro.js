const Textscr = document.querySelector(".textscr")
const intro = Textscr.querySelector(".introcon")
const windowTag = Textscr.querySelector(".iphtext")




const changebg = function(){
     
  
        const introBottom = intro.getBoundingClientRect().bottom;


        if( introBottom < 150){
        
            windowTag.style.backgroundImage = "url(../기말/Image/stick2.png)";
            windowTag.style.transition = "1s"
   
        }else{
            windowTag.style.backgroundImage = "url(../기말/Image/stick.png)";
            windowTag.style.transition = "0.35s"
        }

  


}



changebg()

document.addEventListener("scroll", function () {
    changebg()
  })