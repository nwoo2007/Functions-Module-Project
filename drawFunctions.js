// User choice location
function getLocationX() {
  let x = +prompt("Enter a value from 0 to 500");
  return x;
}

function getLocationY() {
  let y = +prompt("Enter a value from 0 to 500");
  return y;
}

// CAVE BACKGROUND
function drawCave() {
  // outer tunnel --> inner tunnel
  ctx.fillStyle = "#5C6166";
  ctx.beginPath();
  ctx.arc(450, 350, 320, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#414548";
  ctx.beginPath();
  ctx.arc(450, 350, 300, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#969069";
  ctx.beginPath();
  ctx.arc(450, 350, 280, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#797456";
  ctx.beginPath();
  ctx.arc(450, 350, 260, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#5B5740";
  ctx.beginPath();
  ctx.arc(450, 350, 240, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#3F3C2C";
  ctx.beginPath();
  ctx.arc(450, 350, 220, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#232118";
  ctx.beginPath();
  ctx.arc(450, 350, 200, 0, 2 * Math.PI);
  ctx.fill();

  // Ground
  // outer
  ctx.fillStyle = "#40854A";
  ctx.beginPath();
  ctx.fillRect(0, 500, 900, 300);
  // inner
  ctx.fillStyle = "#244A29";
  ctx.beginPath();
  ctx.ellipse(450, 520, 80, 280, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();
}

// STONE WALL BACKGROUND
function drawStoneWall() {
  ctx.fillStyle = "#8E959D";
  ctx.beginPath();
  ctx.fillRect(0, 0, 900, 700);
}

// DRAW BEAR
function drawBear(x, y, colorOne, colorTwo, mouth) {
  ctx.strokeStyle = "#7D6851";
  ctx.lineWidth = 1.5;
  // TORSO
  // outline
  ctx.beginPath();
  ctx.ellipse(x, y + 95, 80, 70, Math.PI / 2, 0, 2 * Math.PI);
  ctx.stroke();
  // filled
  ctx.fillStyle = colorOne;
  ctx.beginPath();
  ctx.ellipse(x, y + 95, 80, 70, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // EARS
  // Left Ear
  ctx.fillStyle = colorOne;
  ctx.beginPath();
  ctx.arc(x - 50, y - 40, 27, 0, 2 * Math.PI);
  ctx.fill();
  // Left inner ear
  ctx.fillStyle = colorTwo;
  ctx.beginPath();
  ctx.arc(x - 50, y - 40, 17, 0, 2 * Math.PI);
  ctx.fill();
  // Right Ear
  ctx.fillStyle = colorOne;
  ctx.beginPath();
  ctx.arc(x + 50, y - 40, 27, 0, 2 * Math.PI);
  ctx.fill();
  // Right inner ear
  ctx.fillStyle = colorTwo;
  ctx.beginPath();
  ctx.arc(x + 50, y - 40, 17, 0, 2 * Math.PI);
  ctx.fill();

  // BEAR HEAD (ANCHOR POINT)
  ctx.fillStyle = colorOne;
  ctx.beginPath();
  ctx.ellipse(x, y, 70, 65, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // EYES
  // Left Eye
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(x - 25, y, 7, 0, 2 * Math.PI);
  ctx.fill();
  // Right Eye
  ctx.beginPath();
  ctx.arc(x + 25, y, 7, 0, 2 * Math.PI);
  ctx.fill();

  // SNOUT
  // This example draws an ellipse at an angle of π/4 radians (45°). To make a full ellipse, the arc begins at an angle of 0 radians (0°), and ends at an angle of 2π radians (360°).
  ctx.fillStyle = colorTwo;
  ctx.beginPath();
  ctx.ellipse(x, y + 25, 28, 25, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // NOSE
  ctx.fillStyle = "#8D604E";
  ctx.beginPath();
  ctx.arc(x, y + 13, 5, 0, 2 * Math.PI);
  ctx.fill();

  // MOUTH
  // happy mouth
  if (mouth == "happy") {
    ctx.strokeStyle = "#8D604E";
    ctx.lineWidth = 3;
    // left side
    ctx.beginPath();
    ctx.arc(x - 5, y + 18, 5, 0, Math.PI);
    ctx.stroke();
    // right side
    ctx.strokeStyle = "#8D604E";
    ctx.beginPath();
    ctx.arc(x + 5, y + 18, 5, 0, Math.PI);
    ctx.stroke();
    // indifferent mouth
  } else if (mouth == "indifferent") {
    ctx.strokeStyle = "#8D604E";
    ctx.lineWidth = 3;
    // Left Side
    ctx.beginPath();
    ctx.moveTo(x, y + 15);
    ctx.lineTo(x - 10, y + 25);
    ctx.stroke();
    // right side
    ctx.beginPath();
    ctx.moveTo(x, y + 15);
    ctx.lineTo(x + 10, y + 25);
    ctx.stroke();
  }

  // ARMS
  // Left Arm
  ctx.strokeStyle = "#7D6851";
  ctx.fillStyle = colorOne;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(x - 70, y + 80, 30, 20, Math.PI / 1.3, 0, 2 * Math.PI);
  ctx.fill();
  // Right Arm
  ctx.strokeStyle = "#7D6851";
  ctx.fillStyle = colorOne;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(x + 70, y + 80, 30, 20, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();

  // Left Foot
  // Outline
  ctx.beginPath();
  ctx.ellipse(x - 40, y + 145, 25, 20, Math.PI / 2, 0, 2 * Math.PI);
  ctx.stroke();
  // Filled Outline
  ctx.beginPath();
  ctx.ellipse(x - 40, y + 145, 25, 20, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();
  // Left Toes
  // #1
  ctx.beginPath();
  ctx.arc(x - 50, y + 120, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x - 50, y + 120, 5, 0, 2 * Math.PI);
  ctx.fill();
  // #2
  ctx.beginPath();
  ctx.arc(x - 40, y + 120, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x - 40, y + 120, 5, 0, 2 * Math.PI);
  ctx.fill();
  // #3
  ctx.beginPath();
  ctx.arc(x - 30, y + 120, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x - 30, y + 120, 5, 0, 2 * Math.PI);
  ctx.fill();
  // Inner Foot
  ctx.fillStyle = "#E49A7D";
  ctx.beginPath();
  ctx.ellipse(x - 40, y + 145, 15, 14, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  // Right Foot
  // Outline
  ctx.beginPath();
  ctx.ellipse(x + 40, y + 145, 25, 20, Math.PI / 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = colorOne;
  // Filled Outline
  ctx.beginPath();
  ctx.ellipse(x + 40, y + 145, 25, 20, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();
  // Left Toes
  // #1
  ctx.beginPath();
  ctx.arc(x + 50, y + 120, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 50, y + 120, 5, 0, 2 * Math.PI);
  ctx.fill();
  // #2
  ctx.beginPath();
  ctx.arc(x + 40, y + 120, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 40, y + 120, 5, 0, 2 * Math.PI);
  ctx.fill();
  // #3
  ctx.beginPath();
  ctx.arc(x + 30, y + 120, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 30, y + 120, 5, 0, 2 * Math.PI);
  ctx.fill();
  // Inner Foot
  ctx.fillStyle = "#E49A7D";
  ctx.beginPath();
  ctx.ellipse(x + 40, y + 145, 15, 14, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();
}

// DRAW BERRY BUSH
function drawBerryBush(x, y, bushColor, berryColor) {
  // Base:
  ctx.fillStyle = bushColor;
  ctx.fillRect(x, y, 150, 80);
  // Bushes
  ctx.beginPath();
  ctx.arc(x, y + 40, 40, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 150, y + 40, 40, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 75, y - 30, 40, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 25, y - 10, 40, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 125, y - 10, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Berries
  ctx.fillStyle = berryColor;
  ctx.beginPath();
  ctx.arc(x + 1, y + 49, 7, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 71, y - 36, 7, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 18, y - 15, 7, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 111, y + 6, 7, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 150, y + 47, 7, 0, 2 * Math.PI);
  ctx.fill();
  //
  ctx.beginPath();
  ctx.arc(x + 62, y + 34, 7, 0, 2 * Math.PI);
  ctx.fill();
}

// BUSH COLOR
// #99D653 (light green)
// #80B620 (mid green)
// #567B16 (dark green)
function getBushColor() {
  var bushColor = prompt(
    "What color would you like the bush to be? \n#99D653 (light green) \n#80B620 (mid green) \n#567B16 (dark green)"
  );
  return bushColor;
}

// BERRY COLOR
// #DE261B (red)
// #FB5E29 (orange)
// #19162B (dark blue)
// #B594DF (violet)
function getBerryColor() {
  var berryColor = prompt(
    "Which color would you like the berries of this bush to be? \n#DE261B (red) \n#FB5E29 (orange) \n#19162B (dark blue) \n#B594DF (violet)"
  );
  return berryColor;
}

// BEAR'S MAIN FUR
// Black Bear: "#232118" & "#D2C791"
// Brown Bear: "#D3B08A" & "#E1D1B8"
function getMainFurColor() {
  var mainFur = prompt(
    "What color would you like the bear's main fur to be? Here are some recommendations: \n#232118 (for a black bear) \n#D3B08A (for a brown bear)"
  );
  return mainFur;
}

// BEAR'S SECOND FUR COLOR
function getSecFurColor() {
  var secFur = prompt(
    "What color would you like the complementary fur color to be? Here are some recommendations: \n#D2C791 (for a black bear) \n#E1D1B8 (for a brown bear)"
  );
  return secFur;
}

// BEAR'S FACE
function getFace() {
  var face = prompt(
    "Which face would you like on the bear?: happy or indifferent?"
  );
  return face;
}

// STICKMAN EXAMPLE
// x and y parameters allow us to place stickman whereever we want
// function drawStickman(x, y, color) {
//   // Head
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 2;

//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, 2 * Math.PI); // 250, 100 (x, y)
//   ctx.stroke();

//   // Everything else must be relative to our anchor point
//   // Torso
//   ctx.beginPath();
//   ctx.moveTo(x, y + 30);
//   ctx.lineTo(x, y + 100);
//   ctx.stroke();

//   // Left Leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x - 25, y + 150);
//   ctx.stroke();

//   // Right Leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x + 25, y + 150);
//   ctx.stroke();

//   // NOTE: going up in canvas substracts y

//   // Left Arm
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(x - 40, y + 30);
//   ctx.stroke();

//   // Right Arm
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(x + 40, y + 30);
//   ctx.stroke();
// }
