// Sky
const sky = document.querySelectorAll(".sky");
const skyButton = document.getElementsByClassName("removeSky")[0];
let skyInventory = 0;

// Sand
const sand = document.querySelectorAll(".sand");
const sandButton = document.getElementsByClassName("removeSand")[0];
let sandInventory = 0;

// Wood
const wood = document.querySelectorAll(".wood");
const woodButton = document.getElementsByClassName("removeWood")[0];
let woodInventory = 0;

// Leaves
const leaves = document.querySelectorAll(".leaves");
const leavesButton = document.getElementsByClassName("removeLeaves")[0];
let leavesInventory = 0;

// flags for following clicking events
let isSkyClicked = false;
let isSandClicked = false;
let isWoodClicked = false;
let isLeavesClicked = false;

// add event listeners for the removing (tools) buttons
skyButton.addEventListener("click", () => {
  isSkyClicked = true;
});

sandButton.addEventListener("click", () => {
  isSandClicked = true;
});

woodButton.addEventListener("click", () => {
  isWoodClicked = true;
});

leavesButton.addEventListener("click", () => {
  isLeavesClicked = true;
});

// add event listeners for the tiles
sky.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (isSkyClicked) {
      tile.remove();
      skyInventory += 1;
      console.log(`sky inventory: ${skyInventory}`);
      //   set flag to "false"
      isSkyClicked = !isSkyClicked;
    } else {
      alert("select the correct tool");
    }
  });
});

sand.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (isSandClicked) {
      tile.remove();
      sandInventory += 1;
      console.log(`sand inventory: ${sandInventory}`);
      //   set flag to "false"
      isSandClicked = !isSandClicked;
    } else {
      alert("select the correct tool");
    }
  });
});

wood.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (isWoodClicked) {
      tile.remove();
      woodInventory += 1;
      console.log(`wood inventory: ${woodInventory}`);
      //   set flag to "false"
      isWoodClicked = !isWoodClicked;
    } else {
      alert("select the correct tool");
    }
  });
});

leaves.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (isLeavesClicked) {
      tile.remove();
      leavesInventory += 1;
      console.log(`leaves inventory: ${leavesInventory}`);
      //   set flag to "false"
      isLeavesClicked = !isLeavesClicked;
    } else {
      alert("select the correct tool");
    }
  });
});
