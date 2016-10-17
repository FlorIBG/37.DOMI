
function validateForm () {
	//validar que los campos esten llenos
	var nombre = document.getElementById("name").value;
	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  		alert("Ingresa tu nombre");
  		return false;
	}
	var apellido = document.getElementById("lastname").value;
	if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
  		alert("Ingresa tu apellido");
  		return false;
	}
	var correoElectronico = document.getElementById("input-email").value;
	if (correoElectronico == null || correoElectronico.length == 0 || /^\s+$/.test(correoElectronico)) {
  		alert("Ingresa tu correo electrónico");
  		return false;
	}
	var contraseña = document.getElementById("input-password").value;
	if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
  		alert("Ingresa tu contraseña");
  		return false;
	}
	//Validar que solo se ingrese mayúscula la primera letra
/*	if ( !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre)) ) {
		alert("Solo se aceptan caracteres alfabeticos en el nombre");
		return false;
	}*/
	if (/[a-z]/.test(nombre[0]) || /[a-z]/.test(apellido[0])) {
		alert("Solo se acepta la primera letra en mayúscula en el nombre y en el apellido");
	 	return false;
	}
	//Validar contraseña tenga al menos 6 caracteres
	if (contraseña.length < 6 || contraseña == "password" || contraseña == "123456" || contraseña == "0987654") {
		alert("La contraseña debe ser mayor a 6 caracteres,no puede ser igual a password ó 123456 ó 098754");
		return false;
	}
	//Validar que se elija una opción de la lista de bicicletas
	var listaDeBicicletas = document.getElementById("Opciones").selectedIndex;
	if (listaDeBicicletas == null || listaDeBicicletas == 0) {
		alert("No elegiste ninguna opción de la lista de bicicletas");
		return false;
	}
	return true;
}

