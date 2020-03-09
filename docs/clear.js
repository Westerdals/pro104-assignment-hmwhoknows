const clrMemberBtn = document.getElementById("clearMember");
const clrTaskBtn = document.getElementById("clearTask");

clrMemberBtn.onclick = function clearMember(){
    localStorage.removeItem("memberList");
    window.location.reload();
};

clrTaskBtn.onclick = function clearTask(){
    localStorage.removeItem("taskList");
    window.location.reload();
};

