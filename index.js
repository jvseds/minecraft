// get sky button
const sky = document.querySelectorAll(".sky");
const skyButton = document.getElementsByClassName("removeSky")[0];

let isSkyClicked = false;

skyButton.addEventListener("click", () => {
  isSkyClicked = true;
});

sky.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (isSkyClicked) {
      tile.remove();
    } else {
      alert("select the correct tool");
    }
  });
});
