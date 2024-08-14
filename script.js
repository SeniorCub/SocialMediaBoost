document.querySelector(".navbar-toggler").addEventListener("click",()=>{
     let navbar = document.querySelector(".navbar-collapse");
     let extended = navbar.style.display === "block";
    navbar.style.display = extended ? "none" : "block";
})