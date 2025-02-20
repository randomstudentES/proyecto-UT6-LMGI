const emailInput = document.getElementById("emailInput");
const emailValResult = document.getElementById("resultEmail");

function comprobarCorreo(){
    event.preventDefault()
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;
    if (regex.test(emailInput.value)){
        emailValResult.style.color = "green";
        emailValResult.innerHTML = `${emailInput.value} is valid :)`;
    } else{
        emailValResult.style.color = "red";
        emailValResult.innerHTML = `${emailInput.value} is not correct, please retry :(`;
    }
}

function activar(){
    event.preventDefault();
    location.href = "menu.html"
}