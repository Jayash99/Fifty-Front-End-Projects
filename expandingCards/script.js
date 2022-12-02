const panelList = document.querySelectorAll(".panel");
//close Image Function
const closeImage = function () {
  const panel = document.querySelector(".active");
  if (panel) {
    panel.classList.remove("active");
    panel.classList.add("inactive");
  }
};
//expand Image Functtion
const expandImage = function (panel) {
  panel.classList.remove("inactive");
  panel.classList.add("active");
};
//eventHandler
panelList.forEach((panel) => {
  panel.addEventListener("click", function () {
    console.log("click");
    if (panel.classList.contains("active")) {
      closeImage();
    } else if (panel.classList.contains("inactive")) {
      closeImage();
      expandImage(panel);
    }
  });
});
