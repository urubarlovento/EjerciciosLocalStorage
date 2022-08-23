const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

buttonText.addEventListener("click", (evt) => {
  // Si tenemos texto ingresado en el input, lo guardamos en el localStorage
  if (inputText.value !="") {
    localStorage.setItem("text", inputText.value);}
    else{
    alert("Por favor ingresa un texto");
    }
});

console.log(localStorage.getItem("text"));

// Escribe el código a continuación