var currentUserIndex=1;
var userArray=[  
    {"name":"John Doe", "gender":"Male","image":"images/john.png"},
    {"name":"Jane Doe", "gender":"Female","image":"images/jane.png"}
];
// selects next user and passes to display user function to render
function toggleUser(){
    currentUserIndex=1-currentUserIndex;
    var nextUser=userArray[currentUserIndex];
    displayUser(nextUser);
}
//DOM Manipulation
function displayUser(user){
    document.getElementById("userImage").src = user.image;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}
