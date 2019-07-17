//add button functionality
//create the button var
let addButton = document.getElementById("addButton")

//create the text to be added var
let enterTaskBox = document.getElementById("enterTaskBox")

//someplace to store the tasks to be done
let pendingTasksDiv = document.getElementById("pendingTasksDiv")

//store the completed tasks
let completedTasksDiv = document.getElementById("completedTasksDiv")

function removeTask(btn){
    console.log(btn)
    pendingTasksDiv.removeChild(btn.parentElement)
}

function removeTask2(){
    
}

addButton.addEventListener(click,() => {

    let title = enterTaskBox.value

    let taskItemDiv = `<div>
                        <input type='checkbox'/>
                        <label>${title}</label>
                        <button onclick='removeTask(this)'>Remove</button>
                        <button onclick='removeTask2()'>Remove2</button>
                       </div>`
    pendingTasksDiv.insertAdjacentHTML('beforeend', taskItemDiv)

})