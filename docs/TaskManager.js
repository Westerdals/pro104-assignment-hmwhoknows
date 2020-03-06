/*//IDs
const inputField = "task-input";
const divOutputField = "task-output";

//set values for Task-list into localStorage
function createTask() {
    //prevents the website from automaticly updating
    //(prevents default action)
    event.preventDefault();
    //get inputfiewld value
    const task = document.getElementById(inputField).value;
    console.log(task);
    //Grab array from localstorage
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
    //Add members into select element
    for(const member of memberList) {
        selectEl.innerText += `<option>${member}</option>`;
    }
    //add tasks into output div as li elements
    for(const task of taskList) {
        //Create list element
        const liElement = document.createElement("LI");
        //check if the task field is empty
        //if not add tasks and members to li element
        if(task != "") {
        liElement.innerText = `<h1>${task}</h1> <select>${selectEl.innerText}</select>`;
        }
        //output to the screen
        divOutput.innerHTML += liElement.innerText;
    }

    
}

//Display tasks on page load
displayTasks();
*/ 

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

    //Add members into select element
    for(const member of memberList) {
        selectEl.innerText += `<option>${member}</option>`;
    }
    
    //add tasks into output div as li elements
    for(const task of taskList) {
        //Create list element
        const liElement = document.createElement("LI");
        //check if the task field is empty
        //if not add tasks and members to li element
        if(task != "") {
        liElement.innerText = `<p>${task}</p> <select>${selectEl.innerText}</select>`;
        }
        //output to the screen
        divOutput.innerHTML += liElement.innerText;
    }

    
}

//Display tasks on page load
displayTasks();