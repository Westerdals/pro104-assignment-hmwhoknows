//IDs
const inputField1 = "member-input";
const divOutputField1 = "member-output";

//Get and set values for Member list into localStorage
function createMember(){
    //prevents the website from automaticly updating
    //(prevents default action)
    event.preventDefault();
    //get inputfield value
    const member = document.getElementById(inputField1).value;
     //Grab array from localstorage
     const memberList = JSON.parse(localStorage.getItem('memberList')) ?? [];
     //Add new input to array
    memberList.push(member);

    //place the array back in local storage
    localStorage.setItem('memberList', JSON.stringify(memberList));

    //output
    displayMembers();
    //clears input field
    event.target.reset();
    //refers to the tasklist
    displayTasks();
}

//Get tasklist and memberlist from localStorage
//Display tasklist as LI elements and members as option elements
function displayMembers(){

    //Get output position
    const divOutput = document.getElementById(divOutputField1);

    //Get localStorage lists
    const memberList = JSON.parse(localStorage.getItem('memberList')) || [];

    //Clear list
    divOutput.innerHTML = "";

    //add tasks into output div as li elements
    for(const member of memberList) {

        //Create list element
        const liElement = document.createElement("LI");

        //check if the task field is empty
        //if not add tasks and members to li element
        if(member != "") {
        liElement.innerText = `<h1>${member}</h1>`;
        }

        //output to the screen
        divOutput.innerHTML += liElement.innerText;
    }

    
}

//Display members on page load
displayMembers();