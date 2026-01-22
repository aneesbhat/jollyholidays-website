const preloader = document.getElementById("jh-preloader");

const hidePreloader = () => {
  if (!preloader) return;
  preloader.style.transition = "opacity 0.3s ease";
  preloader.style.opacity = 0;
  setTimeout(() => preloader.remove(), 300);
};

// Trigger as soon as DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hidePreloader);
} else {
  hidePreloader();
}
