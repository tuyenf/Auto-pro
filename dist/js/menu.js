// Menu
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");
const headerSearch = document.querySelector(".header-search");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("isShow");
  headerSearch.classList.toggle("isShow");
});
document.addEventListener("click", handleMenuClick);
function handleMenuClick(e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("isShow");
  }
}
