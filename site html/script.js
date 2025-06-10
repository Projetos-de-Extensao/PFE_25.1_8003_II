const carousel = document.getElementById("carousel");
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -250, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 250, behavior: "smooth" });
});
