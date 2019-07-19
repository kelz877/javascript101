

$(document).ready(() => {
    let taskTitleBox = $("#taskTitleBox")
    let taskPendingDiv = $("#taskPendingDiv")
    let taskCompletedDiv = $("#taskCompletedDiv")




    $("#addButton").click(() => {

        let title = taskTitleBox.val()
        console.log(title)


        let userCheckBox = $('<input class="userCheckBox" type="checkbox" />')
        let userRemoveButton = $('<button class="userRemoveButton">Remove</button>')

        let taskItemDiv = $("<div class='classDiv' >")



        taskItemDiv.html(title);
        taskItemDiv.append(userCheckBox);
        taskItemDiv.append(userRemoveButton);


        taskPendingDiv.append(taskItemDiv)

        userRemoveButton.click(() => {
            $(taskItemDiv).empty();
        })

        userCheckBox.change(function() {
            if(this.checked){
                taskCompletedDiv.append(taskItemDiv)
            } else {
                taskPendingDiv.append(taskItemDiv)
            }
        })





    })









})