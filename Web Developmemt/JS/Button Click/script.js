function logout(element) {
    var button = document.getElementById("Login");
    if (button.innerText == "Logout") {
      button.innerText = "Login";
    } 
    else {
      button.innerText = "Logout";
    }
}

function removeDefinition(element){
    element.remove()
}


