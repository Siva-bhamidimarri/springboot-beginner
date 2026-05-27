function displayUser(user){
    document.getElementById("userImage").src = user.image;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}
function getAndDisplayRandomUser(){
    fetch("https://randomuser.me/api")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
       var userData=data.results[0];
       var MyUserObject={};
       MyUserObject.name=userData.name.title+" "+userData.name.first+" "+userData.name.last;
       MyUserObject.gender=userData.gender;
       MyUserObject.image=userData.picture.large;
       displayUser(MyUserObject);
    })
    .catch(function(err){
        console.log(err);
    });
}