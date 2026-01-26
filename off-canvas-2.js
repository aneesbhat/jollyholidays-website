
document.addEventListener("DOMContentLoaded", () => {

  // OFFCANVAS OPEN / CLOSE
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("close");
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");

  openMenu?.addEventListener("click", () => {
    offcanvas.classList.add("active");
    overlay.classList.add("active");
  });

  closeMenu?.addEventListener("click", closeAll);
  overlay?.addEventListener("click", closeAll);

  function closeAll() {
    offcanvas.classList.remove("active");
    overlay.classList.remove("active");
  }

  // 🔽 OFFCANVAS DROPDOWN FIX (THIS WAS MISSING)
  document.querySelectorAll(".off-toggle").forEach(toggle => {
    toggle.addEventListener("click", function () {
      const parent = this.closest(".off-dropdown");
      parent.classList.toggle("active");
    });
  });

});

