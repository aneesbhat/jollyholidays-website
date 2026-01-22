const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Open popup
function openPopup() {
  popup.style.display = "flex";
}

// Close popup
function closePopup() {
  popup.style.display = "none";
}

// Show popup with 3-second delay on every page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(openPopup, 1000); // 3000ms = 3 seconds
});

// Open popup on button clicks
document.getElementById("openPopupBtn")?.addEventListener("click", openPopup);
document.getElementById("openPopupBtnMobile")?.addEventListener("click", openPopup);
document.getElementById("heroPopupBtn")?.addEventListener("click", openPopup);

// Close popup on close button
closePopupBtn.addEventListener("click", closePopup);

// Close popup when clicking outside the content
popup.addEventListener("click", function (e) {
  if (e.target === popup) {
    closePopup();
  }
});
