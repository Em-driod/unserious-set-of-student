// Grab elements by id
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list"); // the container we appendChild into
const taskCountEl = document.getElementById("task-count");
const emptyStateEl = document.getElementById("empty-state");

// Add a task when the button is clicked, or when Enter is pressed in the input
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    return; // nothing to add 
  }

  createTaskItem(text);

  taskInput.value = "";
  taskInput.focus();
  updateSummary();
}

// Builds one <li> off-screen, then appendChild's it into the list
function createTaskItem(text) {
  const item = document.createElement("li");
  item.className =
    "task-enter flex items-center gap-3 rounded-2xl bg-white border-2 border-black px-4 py-3 transition";

  // Complete button: a circular ring that fills green when done
  const completeBtn = document.createElement("button");
  completeBtn.title = "Mark completed";
  completeBtn.className =
    "shrink-0 h-6 w-6 rounded-full border-2 border-black text-transparent text-xs font-bold leading-none " +
    "flex items-center justify-center active:scale-90 transition";
  completeBtn.textContent = "✓";

  // The task text
  const label = document.createElement("span");
  label.textContent = text;
  label.className = "flex-1 text-sm text-black break-words transition";

  completeBtn.addEventListener("click", function () {
    const done = label.classList.toggle("line-through");
    label.classList.toggle("text-neutral-400", done);
    completeBtn.classList.toggle("bg-green-500", done);
    completeBtn.classList.toggle("border-green-500", done);
    completeBtn.classList.toggle("text-white", done);
  });

  // Cancel button: removes the task from the list
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "✕";
  cancelBtn.title = "Cancel task";
  cancelBtn.className =
    "shrink-0 h-6 w-6 rounded-full text-xs text-black border-2 border-transparent hover:border-black hover:bg-black hover:text-white " +
    "flex items-center justify-center active:scale-90 transition";
  cancelBtn.addEventListener("click", function () {
    item.remove();
    updateSummary();
  });

  // Build the item off-screen first...
  item.appendChild(completeBtn);
  item.appendChild(label);
  item.appendChild(cancelBtn);

  // ...then attach it to the container, which renders it
  taskList.appendChild(item);
}

// Keeps the "N tasks" badge and empty-state message in sync
function updateSummary() {
  const count = taskList.children.length;
  taskCountEl.textContent = count === 1 ? "1 task" : count + " tasks";
  emptyStateEl.classList.toggle("hidden", count > 0);
}

updateSummary();
