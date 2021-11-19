
// Scroll to top
const scrollTopBtn = document.querySelector(".scroll-to-top-button");
window.onscroll = function () {
  handleScroll();
};
function handleScroll() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

scrollTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
