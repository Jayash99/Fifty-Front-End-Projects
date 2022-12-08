const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const circleArr = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress");
//progressBar.style.width = "0%";
btnNext.addEventListener("click", function () {
  const activeArr = document.querySelectorAll(".active");
  if (activeArr.length > 0) {
    btnPrev.disabled = false;
  }
  if (activeArr.length === circleArr.length - 1) {
    btnNext.disabled = true;
  }
  const lastActive = Array.from(document.querySelectorAll(".active")).pop();
  lastActive.nextElementSibling.classList.add("active");
  progressBar.style.width = `${
    activeArr.length * (100 / (circleArr.length - 1))
  }%`;
});
btnPrev.addEventListener("click", function () {
  if (!btnPrev.disabled) {
    const lastActive = Array.from(document.querySelectorAll(".active")).pop();
    lastActive.classList.remove("active");
    const activeArr = document.querySelectorAll(".active");
    if (activeArr.length === 1) {
      btnPrev.disabled = true;
      btnNext.disabled = false;
    }
    progressBar.style.width = `${
      (activeArr.length - 1) * (100 / (circleArr.length - 1))
    }%`;
  }
});
