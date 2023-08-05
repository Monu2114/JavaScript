const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

let editTodo = null;
//Function for user login credentials
let Users=[];
const login=()=>
{
  const userText = user.value.trim();
  const paasText=user.value.trim();
  Users.push(userText);
}

//Function to add to do

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("Enter something");
    return false;
  }
  if (addBtn.value == "Update") {
    editTodo.target.previousElementSibling.innerHTML = inputText;
    editLocalTodos(inputText);
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    //Creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //Creating edit tag
    const editBtn = document.createElement("Button");
    editBtn.innerText = "Update";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //Creating delete tag
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    saveLocalTodos(inputText);
  }
}
//Function to remove/edit
const updateTodo = (e) => {
  if (e.target.innerHTML == "Remove") {
    todoList.removeChild(e.target.parentElement);
  }
  if (e.target.innerHTML == "Update") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Update";
    editTodo = e;
  }
}
const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todo = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
const getLocalTodos = () => {
  let User;
  User = JSON.parse(localStorage.getItem("Users"));
  
  let todos;
  if (localStorage.getItem("todos" == null)) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      //Creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = todo;
      li.appendChild(p);

      //Creating edit tag
      const editBtn = document.createElement("Button");
      editBtn.innerText = "Update";
      editBtn.classList.add("btn", "editBtn");
      li.appendChild(editBtn);

      //Creating delete tag
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Remove";
      deleteBtn.classList.add("btn", "deleteBtn");
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
    });
  }
}
const deleteLocalTodos=(todo)=>
{
  let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText = todos.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    // Array functions : slice / splice
}
const editLocalTodos=(todo)=>
{
  let todos= jSON.parse(localStorage.getItem("todos"));
  let todoIndex=todos.indexOf(todo);
  todos[todoIndex]=inputBox.value();
  localStorage.setItem("todos",JSON.stringify(todos));
}
user.addEventListener('click',login);
document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

