//IDs
const inputField = "task-input"
const divOutputField = "task-output";

//set values for Task-list into localStorage
function createTask() {
    //prevents the website from automaticly updating
    //(prevents default action)
    event.preventDefault();
    //get inputfield value
    const task = document.getElementById(inputField).value;
    //Grab array from localstorage or set as empty array
    const taskList = JSON.parse(localStorage.getItem('taskList')) ?? [];
    //Add new input to array
    taskList.push(task);

    //place the array back in local storage
    localStorage.setItem('taskList', JSON.stringify(taskList));

    //output
    displayTasks();
    //clears input field
    event.target.reset();
}

//Get tasklist and memberlist from localStorage
//Display tasklist as LI elements and members as option elements
function displayTasks() {
    //Get output position
    const divOutput = document.getElementById(divOutputField);
    //Get localStorage lists
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const memberList = JSON.parse(localStorage.getItem('memberList')) || [];
    //Clear list
    divOutput.innerHTML = "";
    //Create select container
    const selectEl = document.createElement("select");
    const optionEl = document.createElement("option");

    selectEl.setAttribute("onchange", "storeChange(this.previousElementSibling.innerHTML, this.value)");

    optionEl.innerHTML = "Choose a member";
    selectEl.innerHTML = "";
    selectEl.appendChild(optionEl);

    
    //Add members into select element
    for(const member of memberList) {
        const optionEl = document.createElement("option");
        optionEl.innerHTML = member;
        selectEl.appendChild(optionEl);
    }
    
    //add tasks into output div as li elements
    for(const task of taskList) {
        //Create list element
        const liElement = document.createElement("LI");
        const pElement = document.createElement("P");
        //check if the task field is empty
        //if not add tasks and members to li element
        if(task != "") {
            pElement.innerHTML = task;
            liElement.innerHTML += pElement.outerHTML + selectEl.outerHTML;
            // liElement.appendChild(selectEl);
        }
        //output to the screen
        divOutput.appendChild(liElement);
    }

    
}

//add member to task and store it in local storage
//Called from select when changed
function storeChange(task, member) {
    //Create list
    const taskAndMemberList = JSON.parse(localStorage.getItem('taskAndMemberList')) ?? [];
    for(const listIndex in taskAndMemberList) {
        if(taskAndMemberList[listIndex].tasks.toString() == task) {
            taskAndMemberList.splice(listIndex);
        }
    }
    const taskAndMember = {
        tasks: task,
        members: member
    };

    taskAndMemberList.push(taskAndMember);

    localStorage.setItem('taskAndMemberList', JSON.stringify(taskAndMemberList));
}

//Display tasks on page load
displayTasks();