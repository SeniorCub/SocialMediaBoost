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