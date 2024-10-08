/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 900; // You can choose any size for your own project
cnv.height = 700;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

drawStoneWall();
drawBerryBush(100, 460, "#567B16", "#B594DF");
drawBerryBush(710, 450, " #99D653", "#B594DF");
drawCave();
drawBear(300, 330, "#D3B08A", "#E1D1B8", "happy");
drawBerryBush(660, 500, getBushColor(), getBerryColor());
drawBerryBush(120, 505, getBushColor(), getBerryColor());
drawBerryBush(520, 400, getBushColor(), getBerryColor());
drawBear(645, 440, getMainFurColor(), getSecFurColor(), getFace());

// STICKMAN EXAMPLE
// drawStickman(100, 100, "green", 2);
// drawStickman(250, 100, "purple", 0.5);

// drawStickman(getLocationX(), getLocationY(), "blue");
