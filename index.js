let navbarr = document.querySelector(".navbar");
let nava = document.querySelectorAll("nav ul li a");
let btn = document.querySelector("nav button");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    navbarr.style.background = "white";
    navbarr.style.position = "fixed";
    navbarr.style.boxShadow = "0 0 30px 0 rgba(0, 0, 0, 0.37)";
    nava.forEach((el) => {
      el.style.color = "black";
    });
    btn.style.color = "black";
    btn.style.border = "1px solid black";
  } else {
    navbarr.style.background = "transparent";
    navbarr.style.position = "none";
    navbarr.style.boxShadow = "none";
    nava.forEach((el) => {
      el.style.color = "white";
    });
    btn.style.color = "white";
    btn.style.border = "white";
    btn.style.border = "1px solid white";
  }
});

let nav = document.querySelector("nav");
let shownav = document.getElementById("show");
shownav.onclick = function () {
  nav.style.top = "0";
};
let haidnav = document.getElementById("hide");
haidnav.onclick = function () {
  nav.style.top = "-1000px";
};

// let click_li = document.querySelectorAll("li ");
nava.forEach((e) => {
  e.onclick = function () {
    nav.style.top = "-1000px";
  };
});
