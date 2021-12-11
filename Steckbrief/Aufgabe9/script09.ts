window.addEventListener("load", function(): void {

// index to count tasks later
    let index: number = 0;

// Create new task by pressing enter
    document.querySelector("#taskinput").addEventListener("keydown", function(event: KeyboardEvent): void {
        if (event.keyCode == 13) {addtasktext(); }
    });

// variable for Input
    let inputtask: HTMLInputElement = document.querySelector("#taskinput");

// function that adds new tasks
    function addtasktext(): void {

    // constants for added tasks: div, textparagraph, icons
        const onetask: HTMLDivElement = document.querySelector("#onetask");
        const pTask: HTMLParagraphElement = document.createElement("p");
        const circle: HTMLElement = document.createElement("i");
        const trash: HTMLElement = document.createElement("i");
        const check: HTMLElement = document.createElement("i");

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
        trash.addEventListener("click", function(): void {
            index--;
            document.querySelector("#count").innerHTML = index + " in total";
            pTask.remove(); this.remove();
            circle.remove(); this.remove();
            trash.remove(); this.remove();
         });

    // add and remove checkmark in the circle
        circle.addEventListener("click", function(): void {
            this.appendChild(check);
            if (check.getAttribute("class") == "fas fa-check") {check.setAttribute("class", ""); }
            else {check.setAttribute("class", "fas fa-check"); }    
        });
    } 
});