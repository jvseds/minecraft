// Sky
const sky = document.querySelectorAll(".sky");
const skyButton = document.getElementsByClassName("removeSky")[0];
// let skyInventory = 0;

// Sand
const sand = document.querySelectorAll(".sand");
const sandButton = document.getElementsByClassName("removeSand")[0];
// let sandInventory = 0;

// Wood
const wood = document.querySelectorAll(".wood");
const woodButton = document.getElementsByClassName("removeWood")[0];
// let woodInventory = 0;

// Leaves
const leaves = document.querySelectorAll(".leaves");
const leavesButton = document.getElementsByClassName("removeLeaves")[0];
// let leavesInventory = 0;

const rocks = document.querySelectorAll(".rock");
const rocksButton = document.getElementsByClassName("removeRocks")[0];

// clickes state
const skyState = { isClicked: false };
const sandState = { isClicked: false };
const woodState = { isClicked: false };
const leavesState = { isClicked: false };
const rocksState = { isClicked: false };
// inventories
const skyInventory = { amount: 0 };
const sandInventory = { amount: 0 };
const woodInventory = { amount: 0 };
const leavesInventory = { amount: 0 };
const rocksInventory = { amount: 0 };

// create event listeners
skyButton.addEventListener("click", () => {
  skyState.isClicked = true;
});
sandButton.addEventListener("click", () => {
  sandState.isClicked = true;
});
woodButton.addEventListener("click", () => {
  woodState.isClicked = true;
});
leavesButton.addEventListener("click", () => {
  leavesState.isClicked = true;
});
rocksButton.addEventListener("click", () => {
  rocksState.isClicked = true;
});

// removeTile general (refactored) function
function removeTile(tileClass, classState, classInventory) {
  tileClass.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (classState.isClicked) {
        // hide the tile
        tile.style.visibility = "hidden";
        classInventory.amount += 1;
        console.log(`inventory: ${classInventory.amount}`);
        classState.isClicked = false;
      } else {
        alert("Select the appropriate tool to remove this tile");
      }
    });
  });
}

// revoke the function for each tile class
removeTile(sky, skyState, skyInventory); // works
removeTile(sand, sandState, sandInventory);
removeTile(wood, woodState, woodInventory);
removeTile(leaves, leavesState, leavesInventory);
removeTile(rocks, rocksState, rocksInventory); // works
