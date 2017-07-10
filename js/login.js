var usuarios = [
	{ 
		user: "ana",
		pass: "123"
	},
	{ 
		user: "juan",
		pass: "246"
	}

];

function login() {
	var usuario = document.getElementById('usuario').value;
	var contraseña = document.getElementById('contraseña').value;

	for(var i = 0; i < usuarios.length; i++) {
		
		if(usuario == usuarios[i].user && contraseña == usuarios[i].pass) {
			window.location = ("adminTareas.html"); 
			return
		}
		else if(usuario==0 && contraseña==0){
		alert("ingrese nombre de usuario y contraseña");
		return
		}
		else {
			alert("los datos ingresados son incorrectos");
			return
		}
		


	}
	

}