

//add button functionality
//create the button var
let addButton = document.getElementById("addButton")

//create the text to be added var
let enterTaskBox = document.getElementById("enterTaskBox")

//someplace to store the tasks to be done
let pendingTasksDiv = document.getElementById("pendingTasksDiv")

//store the completed tasks
let completedTasksDiv = document.getElementById("completedTasksDiv")

//make the button save when clicked - what should be saved? 
addButton.addEventListener('click', function(){
    console.log("button click fired...")

    //move value into local variable to cut down on keystrokes
    let task = enterTaskBox.value
    enterTaskBox.value = ""

    //create div element
    let taskDiv = document.createElement("div")

    //create a span tag
    let taskNameSpan = document.createElement("span")
    taskNameSpan.innerHTML = task

    //create a check box
    let taskNameCheckBox = document.createElement("input")
    taskNameCheckBox.setAttribute("type", "checkbox")
    taskNameCheckBox.className = "checkBoxNew"

    //create a container for new checkbox


    //create a remove funciton?
    let taskNameRemove = document.createElement("button")
    taskNameRemove.innerHTML = "Remove"

    //append everything to the div
    taskDiv.appendChild(taskNameCheckBox)

    taskDiv.appendChild(taskNameSpan)
    taskDiv.appendChild(taskNameRemove)

    pendingTasksDiv.appendChild(taskDiv)

    // checkbox move
    /* taskNameCheckBox.addEventListener('click', function(){
        console.log("check box checked...")

        completedTasksDiv.appendChild(taskDiv)

       taskNameCheckBox.addEventListener('click', function() {
            pendingTasksDiv.appendChild(taskDiv)
        })

    }) */

    //onclick function versus using an eventlistener
    taskNameCheckBox.onclick = function() {
        console.log("check box checked.....")
        if(this.checked){
            completedTasksDiv.appendChild(taskDiv)
        } else {
            pendingTasksDiv.appendChild(taskDiv)
        }
    }
    //remove task
    taskNameRemove.addEventListener('click', function(){
        console.log("remove button has been clicked...")
        taskDiv.remove()

    })



})

