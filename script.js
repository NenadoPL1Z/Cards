let slides = document.querySelectorAll(".slide");

slides.forEach((item) =>
  item.addEventListener("click", (e) => {
    slides.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  })
);
