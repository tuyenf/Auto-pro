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
  const icon = e.target.querySelector(".arrow");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
