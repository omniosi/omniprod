const menubtn = document.querySelector(".menubtn");
const slideout = document.querySelector(".menu-slideout");

// console.log("menu btn is "+ menu);

menubtn.addEventListener("click", (event) => {
  if (menubtn.classList.contains("open")) {
    menubtn.classList.remove("open");
    slideout.classList.remove("open");
  }else {
    menubtn.classList.add("open");
    slideout.classList.add("open");
  }
})