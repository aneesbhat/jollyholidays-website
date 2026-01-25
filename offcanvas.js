const hamburger=document.getElementById("hamburger");
const offcanvas=document.getElementById("offcanvas");
const overlay=document.getElementById("overlay");
const closeBtn=document.getElementById("close");
const toggle=document.querySelector(".off-toggle");

hamburger.onclick=()=>{
  offcanvas.classList.add("active");
  overlay.classList.add("active");
};

overlay.onclick=closeBtn.onclick=()=>{
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
};

toggle.onclick=function(){
  this.parentElement.classList.toggle("active");
};