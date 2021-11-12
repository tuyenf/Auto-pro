// Menu
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("isShow");
});
document.addEventListener("click", handleMenuClick);
function handleMenuClick(e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("isShow");
  }
}
