export default function SliderHist() {
    const CAROUSELHist = document.querySelector("#carouselHist"),
      firstCard = CAROUSELHist.querySelectorAll(".cardHist")[0],
      arrowsIcons = document.querySelectorAll(".arrowsHist");
  
    let isDragStart = false,
      prevPageX,
      prevScrollLeft;
    let firstCardWidth = firstCard.clientWidth + 15;
  
    arrowsIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        CAROUSELHist.scrollLeft +=
          icon.id == "left" ? -firstCardWidth : firstCardWidth;
      });
    });
  
    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = CAROUSELHist.scrollLeft;
    };
  
    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      CAROUSELHist.classList.add("dragging");
      let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      CAROUSELHist.scrollLeft = prevScrollLeft - positionDiff;
    };
  
    const dragStop = () => {
      isDragStart = false;
      CAROUSELHist.classList.remove("dragging");
    };
  
    CAROUSELHist.addEventListener("mousedown", dragStart);
    CAROUSELHist.addEventListener("touchstart", dragStart);
  
    CAROUSELHist.addEventListener("mousemove", dragging);
    CAROUSELHist.addEventListener("touchmove", dragging);
  
    CAROUSELHist.addEventListener("mouseup", dragStop);
    CAROUSELHist.addEventListener("touchend", dragStop);
  }