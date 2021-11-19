// Hero
const heroImages = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
];
const imageHero = document.querySelector(".hero-slide");
function imageHero1() {
  const heroImageLenth = heroImages.length;
  imageHero.setAttribute(
    "src",
    heroImages[Math.floor(Math.random() * heroImageLenth)]
  );
}
setInterval(() => {
  clearInterval();
  imageHero1();
}, 5000);

// Hero Info
// const heroInfo = document.querySelector(".hero-info");
// (function showHeroText() {
//   setTimeout(() => {
//     heroInfo.style.opacity = "1";
//     heroInfo.style.height = "auto";
//   }, 2000);
// })();

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
