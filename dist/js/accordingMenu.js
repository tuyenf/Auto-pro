const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleAccordionClick)
);

function handleAccordionClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle("isActive");
  if (!content.classList.contains("isActive")) {
    content.style.height = 0;
  }
  [...accordionHeaders].forEach(item => {
    if(item !== e.target) {
      item.nextElementSibling.classList.remove("isActive");
      item.nextElementSibling.style.height = 0;
    }
  })
  const icon = e.target.querySelector(".arrow");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}

let boNut = document.querySelectorAll(`.the-menu li button`);
let heCap2 = document.querySelectorAll(`.the-menu li ul`);
const dongMoMenu = (e) => {
  // đi tìm the rul là thẻ em của cái bị click
  let menuCap2 = e.target.nextElementSibling;
  // duyệt qua heCap2 sau đó loại trừ menuCap2, yêu cầu trượt lên
  heCap2.forEach((h) => {
    if (h !== menuCap2) slideUp(h);
  });

  slideToggle(menuCap2, 300);

  // duyệt qua boNut, loại trừ cái đang bị click, yêu cầu bỏ class opening
  boNut.forEach((b) => {
    if (b !== e.target) b.classList.remove(`opening`);
  });

  e.target.classList.toggle(`opening`);
};
