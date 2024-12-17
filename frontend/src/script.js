const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, insira uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "p-2",
    "hover:bg-gray-100",
    "transition",
    "duration-300"
  );

  // Adiciona o texto da tarefa
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.classList.add("text-gray-800", "flex-grow");

  // Botões de ação
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("flex", "gap-2");

  // Botão Concluir
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("text-green-500", "hover:text-green-700", "transition");
  completeBtn.onclick = () => {
    taskSpan.classList.toggle("line-through");
    taskSpan.classList.toggle("text-gray-400");
  };

  // Botão Editar
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.classList.add("text-blue-500", "hover:text-blue-700", "transition");
  editBtn.onclick = () => {
    const newText = prompt("Edite sua tarefa:", taskSpan.textContent);
    if (newText) taskSpan.textContent = newText.trim();
  };

  // Botão Excluir
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("text-red-500", "hover:text-red-700", "transition");
  deleteBtn.onclick = () => li.remove();

  // Adiciona os botões ao container e ao <li>
  buttonsContainer.appendChild(completeBtn);
  buttonsContainer.appendChild(editBtn);
  buttonsContainer.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(buttonsContainer);
  taskList.appendChild(li);

  taskInput.value = "";
}

// Evento ao botão
addTaskBtn.addEventListener("click", addTask);

// Permite adicionar tarefas com Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
