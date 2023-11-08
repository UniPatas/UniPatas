export default function Slider() {
  const CAROUSEL = document.querySelector("#carousel"),
    firstCard = CAROUSEL.querySelectorAll(".card")[0],
    arrowsIcons = document.querySelectorAll(".arrows");

  let isDragStart = false,
    prevPageX,
    prevScrollLeft;
  let firstCardWidth = firstCard.clientWidth + 15;

  arrowsIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      CAROUSEL.scrollLeft +=
        icon.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = CAROUSEL.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    CAROUSEL.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    CAROUSEL.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    CAROUSEL.classList.remove("dragging");
  };

  CAROUSEL.addEventListener("mousedown", dragStart);
  CAROUSEL.addEventListener("touchstart", dragStart);

  CAROUSEL.addEventListener("mousemove", dragging);
  CAROUSEL.addEventListener("touchmove", dragging);

  CAROUSEL.addEventListener("mouseup", dragStop);
  CAROUSEL.addEventListener("touchend", dragStop);
}
