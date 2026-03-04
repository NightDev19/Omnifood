import { waapi } from "https://cdn.jsdelivr.net/npm/animejs@4.3.6/dist/modules/index.js";

window.addEventListener("DOMContentLoaded", () => {
  waapi.animate(".hero-text-box > *", {
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1000,
    delay: (el, i) => i * 150,
    easing: "ease-out",
  });
});
