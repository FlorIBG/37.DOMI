//Cambiar titulo
var ingresa = document.getElementById("form-signin-heading");
ingresa.innerHTML = "Por favor inicia sesión";
//Cambiar input
document.getElementById("inputEmail").setAttribute("placeholder","Correo Electrónico");
document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");
//Cambiar check-box
var checkBox = document.getElementsByTagName("span")[0];
	checkBox.innerHTML = "Recordar datos";
//Cambiar botón
var boton = document.getElementsByTagName("button")[0];
	boton.innerHTML = "Iniciar sesión";