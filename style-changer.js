// Grab the elements by id
const targetEl = document.getElementById("target");
const boxEl = document.getElementById("box");

// State
let size = 16;
let thickness = 4;
let radius = 0;

// Text color
function setTextColor(color) {
  targetEl.style.color = color;
}

// Font size
function grow() {
  if (size < 60) {
    size += 2;
  }
  targetEl.style.fontSize = size + "px";  // 18px
}

function shrink() {
  if (size > 10) {
    size -= 2;
  }
  targetEl.style.fontSize = size + "px";
}

function resetSize() {
  size = 16;
  targetEl.style.fontSize = size + "px";
}

// Border color
function setBorderColor(color) {
  boxEl.style.borderColor = color;
}

// Border thickness
function thicken() {
  if (thickness < 20) {
    thickness += 2;
  }
  boxEl.style.borderWidth = thickness + "px";
}

function thin() {
  if (thickness > 2) {
    thickness -= 2;
  }
  boxEl.style.borderWidth = thickness + "px";
}

// Border radius
function round() {
  if (radius < 56) {
    radius += 8;
  }
  boxEl.style.borderRadius = radius + "px";
}

function square() {
  if (radius > 0) {
    radius -= 8;
  }
  boxEl.style.borderRadius = radius + "px";
}




// event listeners 
/*Attributes of an event listener ...

     1. The element to listen for events on
     2. The type of event to listen for  // the action that triggers the event
     3. The function to call when the event occurs
*/


