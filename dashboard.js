document.addEventListener('DOMContentLoaded', function () {
     const allLinks = document.querySelectorAll(".sidebar-links a");
     const sections = document.querySelectorAll(".section");

     // Initially hide all sections
     sections.forEach((section) => {
          section.style.display = "none";
     });

     allLinks.forEach((link) => {
          link.addEventListener("click", function (event) {
               event.preventDefault();
               const targetId = link.getAttribute('href').substring(1); // Get the target ID without the '#'

               // Hide all sections
               sections.forEach((section) => {
                    section.style.display = "none";
               });

               // Show the target section
               document.getElementById(targetId).style.display = "block";

               // Remove 'active' class from all links
               allLinks.forEach((link) => {
                    link.classList.remove("active");
               });

               // Add 'active' class to the clicked link
               link.classList.add("active");
          });
     });

     // Optionally, show the first section by default
     if (sections.length > 0) {
          sections[0].style.display = "block";
          allLinks[1].classList.add("active");
     }
});

let label = document.querySelector("#upload");
let icon = document.querySelector(".icon");
let input = document.querySelector("#file");
label.addEventListener("click",()=>{
     input.click();
})
icon.addEventListener("click",()=>{
     input.click();
})
document.querySelector(".service").addEventListener("click",()=>{
     window.location="/services.html"
})
document.querySelector("#addOrder").addEventListener("click",()=>{
     window.location="/services.html"
})
document.querySelectorAll(".home").forEach((ele)=>{
     ele.addEventListener("click",()=>{
          window.location="/"
     });
})
document.querySelector("#refresh").addEventListener("click",()=>{
     window.location.reload();
     // Refresh API
});
document.querySelector("#refreshOrder").addEventListener("click",()=>{
     window.location.reload();
     // Refresh API
});
document.querySelector("#add").addEventListener("click",()=>{
     document.querySelector(".section").style.display="none";
     document.querySelector("#transactions").style.display="none";
     document.querySelector("#deposit").style.display="block";
     // Remove active from transaction and add to deposit link
     document.querySelector(".transaction").classList.remove("active");
     document.querySelector(".deposit").classList.add("active");
});
document.querySelector("#save").addEventListener("click",()=>{
     document.querySelector("#alerting").innerHTML=`
          <div class="alert alert-success d-flex align-items-center" role="alert">
               <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#info-fill"/></svg>
               <div>
               Profile Saved Successfully
               </div>
          </div>
     `;
     setTimeout(()=>{
          document.querySelector("#alerting").innerHTML="";
     },5000)
})