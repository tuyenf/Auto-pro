// Menu
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");
const headerSearch = document.querySelector(".header-search");
const overlay = document.querySelector(".overlay");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("isShow");
  overlay.classList.toggle("isShow")
});
overlay.addEventListener("click", handleMenuClick);
function handleMenuClick(e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("isShow");
    e.target.classList.remove("isShow");
  }
}
