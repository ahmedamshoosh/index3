
const mobileButton =document.getElementById("mobile");
const navItmes =document.querySelector(".nav-itmes");
const navlist =document.querySelectorAll(".nav-list");

mobileButton.addEventListener('click',()=>{
  
    navItmes.classList.toggle("active");
})
navlist.forEach((navlist)=>{
    navlist.addEventListener("click",()=>{
    navItmes.classList.toggle("active");

    })
})

