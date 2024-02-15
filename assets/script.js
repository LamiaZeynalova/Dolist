const form = document.getElementById("formSubmit");
const list = document.getElementById("todo-list");
const input = document.getElementById("input");
const button = document.getElementById("add");

form.append(list)
form.addEventListener("submit", (e) => { e.preventDefault();
const todotext = input.value.trim();
if (todotext !== "") {
     AddToDo(todotext);
 input.value = "";
  }
})
function AddToDo(todotext) {
const todoitem = document.createElement("li");
  todoitem.textContent = todotext;

  
  const button = document.createElement("p");
  button.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
  button.addEventListener("click", () => {
    todoitem.remove()

  })
  todoitem.value = "";
  todoitem.appendChild(button);
  list.append(todoitem)
}