const btns=document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".pkg-card");
btns.forEach(b=>{
  b.onclick=()=>{
    document.querySelector(".filter-btn.active").classList.remove("active");
    b.classList.add("active");
    const f=b.dataset.filter;
    cards.forEach(c=>{
      c.style.display=(f==="all"||c.classList.contains(f))?"block":"none";
    });
  }
});