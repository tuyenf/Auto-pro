
// Booking Tab
const tabBookingItems = document.querySelectorAll(".booking-tab-item");
const tabBookingContents = document.querySelectorAll(".booking-form");
[...tabBookingItems].forEach((item) => item.addEventListener("click", handleTabClick));

function handleTabClick(e) {
  [...tabBookingItems].forEach((item) =>
    item.classList.remove("booking-tab-item-active")
  );
  e.target.classList.add("booking-tab-item-active");
  const tabBookingNumber = e.target.dataset.tab;
  [...tabBookingContents].forEach((item) => {
    item.classList.remove("booking-form-active");
    if (item.getAttribute("data-tab") === tabBookingNumber) {
      item.classList.add("booking-form-active");
    }
  });
}
