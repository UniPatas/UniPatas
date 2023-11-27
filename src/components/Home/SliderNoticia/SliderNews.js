export default function SliderNews() {
  const CAROUSELNews = document.querySelector("#carouselNews"),
    firstCard = CAROUSELNews.querySelectorAll(".cardNews")[0],
    arrowsIcons = document.querySelectorAll(".arrowsNews");

  let isDragStart = false,
    prevPageX,
    prevScrollLeft;
  let firstCardWidth = firstCard.clientWidth + 15;

  arrowsIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      CAROUSELNews.scrollLeft +=
        icon.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = CAROUSELNews.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    CAROUSELNews.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    CAROUSELNews.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    CAROUSELNews.classList.remove("dragging");
  };

  CAROUSELNews.addEventListener("mousedown", dragStart);
  CAROUSELNews.addEventListener("touchstart", dragStart);

  CAROUSELNews.addEventListener("mousemove", dragging);
  CAROUSELNews.addEventListener("touchmove", dragging);

  CAROUSELNews.addEventListener("mouseup", dragStop);
  CAROUSELNews.addEventListener("touchend", dragStop);
}
