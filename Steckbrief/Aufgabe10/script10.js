window.addEventListener("load", function () {
    // index to count tasks later (also for open and done tasks)
    let index = 0;
    let indexDone = 0;
    let indexOpen = 0;
    // Create new task by pressing enter
    document.querySelector("#taskinput").addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            addtasktext();
        }
    });
    // variable for Input
    let inputtask = document.querySelector("#taskinput");
    // function that adds new tasks
    function addtasktext() {
        // constants for added tasks: div, textparagraph, icons
        const onetask = document.querySelector("#onetask");
        const pTask = document.createElement("p");
        const circle = document.createElement("i");
        const trash = document.createElement("i");
        const check = document.createElement("i");
        // counter going up for an added task
        index++;
        document.querySelector("#count").innerHTML = index + " in total";
        indexOpen++;
        document.querySelector("#open").innerHTML = index + " open";
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
        // remove task by clicking on trash icon 
        trash.addEventListener("click", function () {
            // total task counter going down
            index--;
            document.querySelector("#count").innerHTML = index + " in total";
            // Open or done counter going down aswell
            circle.appendChild(check);
            if (check.getAttribute("class") == "fas fa-check") {
                indexDone--;
                document.querySelector("#done").innerHTML = indexDone + " done";
            }
            else {
                indexOpen--;
                document.querySelector("#open").innerHTML = indexOpen + " open";
            }
            // actual removing porcess
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
            // remove checkmark
            if (check.getAttribute("class") == "fas fa-check") {
                check.setAttribute("class", "");
                // Open tasks: +1 , done tasks: -1            
                indexOpen++;
                indexDone--;
                document.querySelector("#open").innerHTML = indexOpen + " open";
                document.querySelector("#done").innerHTML = indexDone + " done";
            }
            // add checkmark
            else {
                check.setAttribute("class", "fas fa-check");
                // Open tasks: -1 , done tasks +1
                indexOpen--;
                indexDone++;
                document.querySelector("#open").innerHTML = indexOpen + " open";
                document.querySelector("#done").innerHTML = indexDone + " done";
            }
        });
    }
    // add constants for microphone and artyom
    const mic = document.querySelector(".fa-microphone");
    const artyom = new Artyom();
    artyom.addCommands({
        // say "new task" to create a new task    
        indexes: ["new task *"],
        smart: true,
        // anything that is said after "new task" will be the task content
        action: function (i, taskcontent) {
            // set the voice recording (taskcontent) as task input
            inputtask.value = taskcontent;
            // execute the addtasktext function to create a new p element with the new task
            addtasktext();
        }
    });
    // function to start the voice recording    
    function StartVoiceRec() {
        // first stop an already running voice recording
        artyom.fatality();
        // after 250 ms start the new recording    
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            });
        }, 250);
    }
    // function to stop the voice recording
    function StopVoiceRec() {
        artyom.fatality();
    }
    // click on the microphone to start or stop the voice recording
    mic.addEventListener("click", function () {
        if (mic.getAttribute("style") == "color: rgb(207, 7, 7)") {
            StopVoiceRec();
            mic.setAttribute("style", "color: rgb(0, 0, 0);");
        }
        else {
            StartVoiceRec();
            mic.setAttribute("style", "color: rgb(207, 7, 7)");
        }
    });
});
//# sourceMappingURL=script10.js.map
