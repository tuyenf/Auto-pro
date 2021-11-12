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

// BEST SELLER SILDER
window.addEventListener("load", function () {
  const sliderMain2 = document.querySelector(".slider-main2");
  const slideItems2 = document.querySelectorAll(".slider-item2");
  const prevBtn2 = document.querySelector("#prev-btn2");
  const nextBtn2 = document.querySelector("#next-btn2");
  const sliderItemWidth2 = slideItems2[0].offsetWidth;
  const sliderLength2 = slideItems2.length;
  let positionX2 = 0;
  let index2 = 0;

  prevBtn2.addEventListener("click", function () {
    handleChangeSlide2(-1);
  });
  nextBtn2.addEventListener("click", function () {
    handleChangeSlide2(1);
  });

  function handleChangeSlide2(direction) {
    if (direction === 1) {
      index2++;
      if (index2 >= sliderLength2 - 4) {
        index2 = sliderLength2 - 4;
        return;
      }
      positionX2 = positionX2 - sliderItemWidth2;
      sliderMain2.style = `transform: translateX(${positionX2}px)`;
    } else if (direction === -1) {
      index2--;
      if (index2 <= 0) {
        index2 = 0;
        return;
      }
      positionX2 = positionX2 + sliderItemWidth2;
      sliderMain2.style = `transform: translateX(${positionX2}px)`;
    }
  }
});

//  NEW VEHICLES SILDER
window.addEventListener("load", function () {
  const sliderMain3 = document.querySelector(".slider-main3");
  const slideItems3 = document.querySelectorAll(".slider-item3");
  const prevBtn3 = document.querySelector("#prev-btn3");
  const nextBtn3 = document.querySelector("#next-btn3");
  const sliderItemWidth3 = slideItems3[0].offsetWidth;
  const sliderLength3 = slideItems3.length;
  let positionX3 = 0;
  let index3 = 0;

  prevBtn3.addEventListener("click", function () {
    handleChangeSlide3(-1);
  });
  nextBtn3.addEventListener("click", function () {
    handleChangeSlide3(1);
  });

  function handleChangeSlide3(direction) {
    if (direction === 1) {
      index3++;
      if (index3 >= sliderLength3 - 4) {
        index3 = sliderLength3 - 4;
        return;
      }
      positionX3 = positionX3 - sliderItemWidth3;
      sliderMain3.style = `transform: translateX(${positionX3}px)`;
    } else if (direction === -1) {
      index3--;
      if (index3 <= 0) {
        index3 = 0;
        return;
      }
      positionX3 = positionX3 + sliderItemWidth3;
      sliderMain3.style = `transform: translateX(${positionX3}px)`;
    }
  }
});
// Feature
window.addEventListener("load", function () {
  const sliderMain4 = document.querySelector(".slider-main4");
  const slideItems4 = document.querySelectorAll(".slider-item4");
  const prevBtn4 = document.querySelector("#prev-btn4");
  const nextBtn4 = document.querySelector("#next-btn4");
  const sliderItemWidth4 = slideItems4[0].offsetWidth;
  const sliderLength4 = slideItems4.length;
  let positionX4 = 0;
  let index4 = 0;

  prevBtn4.addEventListener("click", function () {
    handleChangeSlide4(-1);
  });
  nextBtn4.addEventListener("click", function () {
    handleChangeSlide4(1);
  });

  function handleChangeSlide4(direction) {
    if (direction === 1) {
      index4++;
      if (index4 >= sliderLength4 - 4) {
        index4 = sliderLength4 - 4;
        return;
      }
      positionX4 = positionX4 - sliderItemWidth4;
      sliderMain4.style = `transform: translateX(${positionX4}px)`;
    } else if (direction === -1) {
      index4--;
      if (index4 <= 0) {
        index4 = 0;
        return;
      }
      positionX4 = positionX4 + sliderItemWidth4;
      sliderMain4.style = `transform: translateX(${positionX4}px)`;
    }
  }
});

// SPECIAL OFFER
window.addEventListener("load", function () {
  const sliderMain5 = document.querySelector(".slider-main5");
  const slideItems5 = document.querySelectorAll(".slider-item5");
  const prevBtn5 = document.querySelector("#prev-btn5");
  const nextBtn5 = document.querySelector("#next-btn5");
  const sliderItemWidth5 = slideItems5[0].offsetWidth;
  const sliderLength5 = slideItems5.length;
  let positionX5 = 0;
  let index5 = 0;

  prevBtn5.addEventListener("click", function () {
    handleChangeSlide5(-1);
  });
  nextBtn5.addEventListener("click", function () {
    handleChangeSlide5(1);
  });

  function handleChangeSlide5(direction) {
    if (direction === 1) {
      index5++;
      if (index5 >= sliderLength5 - 4) {
        index5 = sliderLength5 - 4;
        return;
      }
      positionX5 = positionX5 - sliderItemWidth5;
      sliderMain5.style = `transform: translateX(${positionX5}px)`;
    } else if (direction === -1) {
      index5--;
      if (index5 <= 0) {
        index5 = 0;
        return;
      }
      positionX5 = positionX5 + sliderItemWidth5;
      sliderMain5.style = `transform: translateX(${positionX5}px)`;
    }
  }
});
