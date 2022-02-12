var main = document.querySelector("main");
var cancel = document.querySelector(".cancel");
var aside = document.querySelector("aside");


window.addEventListener("load", function() {
     main.classList.add("reveal");
})

cancel.addEventListener("click", function() {
     main.classList.remove("reveal");
     aside.classList.add("view-order");
});

aside.addEventListener
("click", () => {
     main.classList.add("reveal");
     aside.classList.remove("view-order");
})