(() => {
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      }, {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      })
    : null;

  function observeRevealUp(root = document) {
    const items = root.querySelectorAll(".reveal-up:not([data-reveal-ready])");

    items.forEach((item) => {
      item.dataset.revealReady = "true";

      if (!revealObserver) {
        item.classList.add("is-visible");
        return;
      }

      revealObserver.observe(item);
    });
  }

  window.refreshRevealUp = observeRevealUp;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => observeRevealUp());
  } else {
    observeRevealUp();
  }
})();
