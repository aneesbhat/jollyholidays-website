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

// Show popup with 1-second delay on page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(openPopup, 1000);
});

// Open popup on existing button IDs
document.getElementById("openPopupBtn")?.addEventListener("click", openPopup);
document.getElementById("openPopupBtnMobile")?.addEventListener("click", openPopup);
document.getElementById("heroPopupBtn")?.addEventListener("click", openPopup);

// ✅ Open popup on CTA link click
document.querySelectorAll(".cta").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // stop page jump
    openPopup();
  });
});

// Close popup on close button
closePopupBtn.addEventListener("click", closePopup);

// Close popup when clicking outside content
popup.addEventListener("click", function (e) {
  if (e.target === popup) {
    closePopup();
  }
});
