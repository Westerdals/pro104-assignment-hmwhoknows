
/* 
//Get and set values for Member list
=======
//IDs
const inputField = "member-input";
const divOutputField = "member-output";

//Get and set values for Member list into localStorage
function createMember(){
    //prevents the website from automaticly updating
    //(prevents default action)
    event.preventDefault();
    //get inputfield value
    const member = document.getElementById(inputField).value;
     //Grab array from localstorage
     const memberList = JSON.parse(localStorage.getItem('memberList'));
     //Add new input to array
    memberList.push(member);

    //place the array back in local storage
    localStorage.setItem('memberList', JSON.stringify(memberList));

    //output
    displayMembers();
    //clears input field
    event.target.reset();
}

//Get tasklist and memberlist from localStorage
//Display tasklist as LI elements and members as option elements
function displayMembers(){
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
displayMembers();
>>>>>>> c376a06841cdc53b97c2fd2ec986277b647605f7 */
