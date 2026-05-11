const menu = document.querySelector(".menu-bar");

function menubar() {
  menu.classList.toggle("menu-visible");
}

let deleteBtns = document.querySelectorAll(".fa-solid");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove();
  });
});
