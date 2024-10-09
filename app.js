const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos");

const toggleComplete = (event) => {
    event.currentTarget.parentElement.classList.toggle("completed");
}


const deleteTodoItem = (event) => {
    event.currentTarget.parentElement.remove();
}

const removeItem = (event) =>{
    todosContainer.removeChild(event.currentTarget.parentElement);
}

const renderTodoItem = (todoText) => {
    const todoItemElement = document.createElement("li");
    todoItemElement.classList.add("todoItem");

    const completeButton = document.createElement("button");
    completeButton.classList.add("completeButton");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", toggleComplete);
    todoItemElement.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click",removeItem)
    deleteButton.addEventListener("click", deleteTodoItem);
    todoItemElement.appendChild(deleteButton);

    const textElement = document.createElement("p");
    textElement.innerText = todoText;
    textElement.classList.add("todoText");
    todoItemElement.appendChild(textElement);

    todosContainer.appendChild(todoItemElement);

    todoInput.value = "";
    todoInput.focus();  // focus fonksiyonu burada doğru kullanılıyor
}

const addTask = () => {
    if (todoInput.value === "") {
        alert("Input boş olamaz");
    } else {
        renderTodoItem(todoInput.value);
    }
}

addTaskButton.addEventListener("click", addTask);
