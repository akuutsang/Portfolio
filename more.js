const btn = document.querySelector(".grid-btn");
const projects = document.querySelector(".projects");


 function cardDisplay(){
    projects.classList.toggle('open');
    if (btn.innerHTML === "viewmore") {
        btn.innerHTML = "view less"
    }else{
        btn.innerHTML = "view more";
    }
 }
 cardDisplay();


 export  { cardDisplay, btn };