// Планировщик задач   
let array = [];
function pushTask() {
    let task = document.getElementById("task").value;
    let fieldTask = document.getElementById("fieldTask");
    let taskHTML = "";
    array.push(task);
    array.forEach((item) => {
        taskHTML = taskHTML + `<li class="list-group-item">
         <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
            ${item}
        </li>`
    })
    fieldTask.innerHTML = taskHTML;
    document.getElementById("task").value = "";
    document.getElementById("clear").disabled = false;
}

function clearTasks() {
    document.getElementById("fieldTask").innerHTML = `Нет задач`;
    array.length = 0;
    document.getElementById("clear").disabled = true;
}

