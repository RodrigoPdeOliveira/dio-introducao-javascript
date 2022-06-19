let textInput = document.querySelector("#input > input:nth-child(1)");
let tasks = document.getElementById("tasks");

function saveTask() {
    if (textInput.value != "") {
        let task = textInput.value;
        let taskElement = document.createElement("li");
        let checkBox = document.createElement("input");
        let span = document.createElement("span");
        taskElement.setAttribute('class', 'flex')
        checkBox.setAttribute('type', 'checkbox')
    
        textInput.value = "";
        span.appendChild(document.createTextNode(task))
        taskElement.appendChild(span);
        taskElement.insertBefore(checkBox, taskElement.firstChild);
        tasks.appendChild(taskElement);
        textInput.focus()
    } else {
        textInput.value = "";
        textInput.focus()
    };
};
