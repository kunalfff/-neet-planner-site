function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
