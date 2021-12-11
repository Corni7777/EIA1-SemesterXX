window.addEventListener("load", function () {
    // index to count tasks later
    var index = 0;
    // Create new task by pressing enter
    document.querySelector("#taskinput").addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            addtasktext();
        }
    });
    // variable for Input
    var inputtask = document.querySelector("#taskinput");
    // function that adds new tasks
    function addtasktext() {
        // constants for added tasks: div, textparagraph, icons
        var onetask = document.querySelector("#onetask");
        var pTask = document.createElement("p");
        var circle = document.createElement("i");
        var trash = document.createElement("i");
        var check = document.createElement("i");
        // counter going up for an added task
        index++;
        document.querySelector("#count").innerHTML = index + " in total";
        // define icons: circle + trash
        circle.setAttribute("class", "far fa-circle");
        trash.setAttribute("class", "far fa-trash-alt");
        // text form input as paragraph
        pTask.innerHTML = inputtask.value;
        // append Elements (paragraph,icons) to added div
        onetask.appendChild(trash);
        onetask.appendChild(circle);
        onetask.appendChild(pTask);
        // clear input
        inputtask.value = "";
        // remove task by clicking on trash icon + counter going down for removed task
        trash.addEventListener("click", function () {
            index--;
            document.querySelector("#count").innerHTML = index + " in total";
            pTask.remove();
            this.remove();
            circle.remove();
            this.remove();
            trash.remove();
            this.remove();
        });
        // add and remove checkmark in the circle
        circle.addEventListener("click", function () {
            this.appendChild(check);
            if (check.getAttribute("class") == "fas fa-check") {
                check.setAttribute("class", "");
            }
            else {
                check.setAttribute("class", "fas fa-check");
            }
        });
    }
});
//# sourceMappingURL=script09.js.map