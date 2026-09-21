// Grab the display element by id
const countEl = document.getElementById("count");// we are a saying to the browser,
// "Hey, go find the element with the id of 'count' and give it a name countEl ...."





// State
let count = 0;


// Functions (called from the onclick attributes in index.html)
function add() {
 if (count < 10) {
    count++;
  }
  countEl.textContent = count;
}

function reduce() {
  if (count > 0) {
    count--;
  }
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = count;
}
