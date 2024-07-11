document.querySelector("#refresh").addEventListener("click",()=>{
     window.location.reload();
     // Refresh API
});
document.querySelector("#refreshOrder").addEventListener("click",()=>{
     window.location.reload();
     // Refresh API
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