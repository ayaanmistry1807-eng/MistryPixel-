AOS.init({ once:true });

const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("nav-menu");

hamburger.onclick=()=>{
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
};

document.querySelectorAll(".nav a").forEach(a=>{
  a.onclick=()=>{
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  };
});
