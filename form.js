const emailInput = document.getElementById("emailInput");
const emailValResult = document.getElementById("resultEmail");

function comprobarCorreo(){
    event.preventDefault()
    emailValResult.innerHTML = emailInput.value;
}