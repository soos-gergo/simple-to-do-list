document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task!");
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i <current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i = 0; i<tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
};

function changeDarkMode() {

    changeBackgroundColor();
    changeButtonText();
    changeButtonsColor();
}

function changeBackgroundColor() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function changeButtonText() {
    var element = document.getElementById("button-mode");
    if(element.innerHTML === "Dark mode") {
        element.innerHTML = "Light mode";
    } else {
        element.innerHTML = "Dark mode";
    }
}

function changeButtonsColor() {

    var button_mode = document.getElementById("button-mode");
    if(button_mode.innerHTML != "Light mode") {
        button_mode.classList.add("dark-mode");   
    } else {
        button_mode.classList.remove("dark-mode");
    }

    var button_add = document.getElementById("push");
    button_add.classList.toggle("dark-mode");

    var button_delete = document.getElementsByClassName("delete");
    button_delete.innerHTML
}