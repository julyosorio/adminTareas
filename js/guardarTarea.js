var arregloNombreTarea=[],
	arregloDescripcion=[],
	arregloResponsables=[],
	arregloFecha=[];

if(localStorage.getItem('NOMBRE_TAREA')!=null){
	arregloNombreTarea=JSON.parse(localStorage.getItem('NOMBRE_TAREA'));
	arregloDescripcion=JSON.parse(localStorage.getItem('DESCRIPCION'));
	arregloResponsables=JSON.parse(localStorage.getItem('RESPONSABLES'));
	arregloFecha=JSON.parse(localStorage.getItem('FECHA'));
}

var botonGuardar=document.querySelector('#btnAgregarTarea');

botonGuardar.addEventListener('click',guardarTarea);

function guardarTarea () {

	var nom=document.querySelector('#nombreTarea').value,
		des=document.querySelector('#descripcion').value,
		date=document.querySelector('#fecha').value;

		var aRespon=[];
		var listaR=document.nuevaTarea.responsables,
			opciones=listaR.options;

			for (i=0;i<opciones.length;i++) {
				
				if (opciones[i].selected == true ) {
					aRespon.push(opciones[i].text);
				}
			}
	

	arregloNombreTarea.push(nom);
	arregloDescripcion.push(des);
	arregloResponsables.push(aRespon);
	arregloFecha.push(date);

	localStorage.setItem('NOMBRE_TAREA', JSON.stringify(arregloNombreTarea));
	localStorage.setItem('DESCRIPCION', JSON.stringify(arregloDescripcion));
	localStorage.setItem('RESPONSABLES', JSON.stringify(arregloResponsables));
	localStorage.setItem('FECHA', JSON.stringify(arregloFecha));

	var ventana = document.getElementById("miVentana");
    ventana.style.display = 'none';

verTareas();

}