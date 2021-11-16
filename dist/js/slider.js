// New products slider
window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let index = 0;

  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  function handleChangeSlide(direction) {
    if (direction === 1) {
      index++;
      if (index >= sliderLength - 4) {
        index = sliderLength - 4;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    } else if (direction === -1) {
      index--;
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    }
  }
});

