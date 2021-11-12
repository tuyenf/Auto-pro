// Vehicle Tab
const vehicleTabItems = document.querySelectorAll(".vehicles-tab-item");
const vehicleTabContents = document.querySelectorAll(".vehicles-tab-content");
[...vehicleTabItems].forEach((item) =>
  item.addEventListener("click", handleVehicleTabClick)
);

function handleVehicleTabClick(e) {
  [...vehicleTabItems].forEach((item) =>
    item.classList.remove("vehicles-tab-item-active")
  );
  e.target.classList.add("vehicles-tab-item-active");

  const vehiclesTabNumber = e.target.dataset.tab2;
  [...vehicleTabContents].forEach((item) => {
    item.classList.remove("vehicles-tab-content-active");
    if (item.getAttribute("data-tab2") === vehiclesTabNumber) {
      item.classList.add("vehicles-tab-content-active");
    }
  });
}
// Booking Tab
const tabItems = document.querySelectorAll(".booking-tab-item");
const tabContents = document.querySelectorAll(".booking-form");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));

function handleTabClick(e) {
  [...tabItems].forEach((item) =>
    item.classList.remove("booking-tab-item-active")
  );
  e.target.classList.add("booking-tab-item-active");
  const tabNumber = e.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove("booking-form-active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("booking-form-active");
    }
  });
}
