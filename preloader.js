window.addEventListener("load", () => {
    const loader = document.getElementById("jh-preloader");
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 500);
  });