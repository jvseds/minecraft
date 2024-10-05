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

// add text to the inventory in the html list
inventoryList = document.getElementsByTagName("ul");
// get the list elements
const skyText = document.getElementById("skyText");
const sandText = document.getElementById("sandText");
const woodText = document.getElementById("woodText");
const leavesText = document.getElementById("leavesText");
const rocksText = document.getElementById("rocksText");

function addInventoryText(inventoryText, inventoryAmount) {
  // get the tileClass name from the element text
  const text = inventoryText.id.split("T")[0];
  inventoryText.textContent = `${text}: ${inventoryAmount}`;
}

// removeTile general (refactored) function
function removeTile(tileClass, classState, classInventory, inventoryText) {
  tileClass.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (classState.isClicked) {
        // hide the tile
        tile.style.visibility = "hidden";
        classInventory.amount += 1;
        // console.log(`inventory: ${classInventory.amount}`);
        addInventoryText(inventoryText, classInventory.amount);
        classState.isClicked = false;
      } else {
        alert("Select the appropriate tool to remove this tile");
      }
    });
  });
}

// revoke the function for each tile class
removeTile(sky, skyState, skyInventory, skyText); // works
removeTile(sand, sandState, sandInventory, sandText);
removeTile(wood, woodState, woodInventory, woodText);
removeTile(leaves, leavesState, leavesInventory, leavesText);
removeTile(rocks, rocksState, rocksInventory, rocksText); // works

// when clicking the correct inventory, show the hidden tile
const skyInventoryState = { isClicked: false };
const sandInventoryState = { isClicked: false };
const woodInventoryState = { isClicked: false };
const leavesInventoryState = { isClicked: false };
const rocksInventoryState = { isClicked: false };

// add click event listeners to the class text
skyText.addEventListener("click", () => {
  skyInventoryState.isClicked = true;
});
sandText.addEventListener("click", () => {
  sandInventoryState.isClicked = true;
});
woodText.addEventListener("click", () => {
  woodInventoryState.isClicked = true;
});
leavesText.addEventListener("click", () => {
  leavesInventoryState.isClicked = true;
});
rocksText.addEventListener("click", () => {
  rocksInventoryState.isClicked = true;
});

function showTile(tileClass, inventoryState, classInventory, classText) {
  // add event listener to the inventory list item
  tileClass.forEach((tile) => {
    classText.addEventListener("click", () => {
      if (inventoryState.isClicked && classInventory.amount > 0) {
        if (tile.style.visibility === "hidden") {
          tile.style.visibility = "visible";
          classInventory.amount -= 1;
          addInventoryText(classText, classInventory.amount);
          classState.isClicked = false;
        }
      }
    });
  });
}

// invoke the function for each class
showTile(sky, skyInventoryState, skyInventory, skyText);
showTile(wood, woodInventoryState, woodInventory, woodText);
showTile(sand, sandInventoryState, sandInventory, sandText);
showTile(leaves, leavesInventoryState, leavesInventory, leavesText);
showTile(rocks, rocksInventoryState, rocksInventory, rocksText);
