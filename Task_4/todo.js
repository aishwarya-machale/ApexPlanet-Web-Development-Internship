const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

function updateProgress() {
  const tasks = document.querySelectorAll(".task");
  const completed = document.querySelectorAll(".task.completed");
  const percent = tasks.length ? (completed.length / tasks.length) * 100 : 0;

  if (progressText) progressText.textContent = `${completed.length} of ${tasks.length} completed`;
  if (progressFill) progressFill.style.width = percent + "%";
}

if (addTaskBtn) {
  addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
      <div class="task-left">
        <input type="checkbox">
        <span>${text}</span>
      </div>
      <button class="delete">✕</button>
    `;

    li.querySelector("input").addEventListener("change", e => {
      li.classList.toggle("completed", e.target.checked);
      updateProgress();
    });

    li.querySelector(".delete").addEventListener("click", () => {
      li.remove();
      updateProgress();
    });

    taskList.appendChild(li);
    taskInput.value = "";
    updateProgress();
  });
}
