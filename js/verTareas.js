verTareas();

function verTareas() {

    var caja = document.getElementById("cuerpo");
    caja.innerHTML = "";

    var arregloNombreTarea = JSON.parse(localStorage.getItem('NOMBRE_TAREA')),
	 	arregloDescripcion = JSON.parse(localStorage.getItem('DESCRIPCION')),
	 	arregloResponsables = JSON.parse(localStorage.getItem('RESPONSABLES')),
	 	arregloFecha = JSON.parse(localStorage.getItem('FECHA'));

    var nTareas;
    if (arregloNombreTarea) {
        nTareas = arregloNombreTarea.length;
    }
    else {
        nTareas = 0;
    }

    for (var i = 0; i < nTareas; i++) {

        var fila = document.createElement("div");
        fila.className="tarea";


        var nombre = document.createElement("label"),
			descripcion = document.createElement("label"),
			responsables = document.createElement("label"),
			fecha = document.createElement("label");

        nombre.style.textAlign = "center";
        

        var boton = document.createElement("input");
        boton.type = 'button';
        boton.id = 'ver Detalle' + i;
        boton.value = 'Ver Detalle de la Tarea';
        boton.setAttribute("numero", i);


        var botonFinalizar = document.createElement("input");
        botonFinalizar.type = 'button';
        botonFinalizar.id = 'ver Detalle';
        botonFinalizar.value = 'Finalizar Tarea';

        
        botonFinalizar.setAttribute("numero", i);
        if (botonFinalizar.addEventListener) {
            botonFinalizar.addEventListener('click', function () {

                var numero = this.getAttribute("numero");
                finalizarTarea(numero);
            }, false)
        };

        var textonombre = document.createTextNode(arregloNombreTarea[i]),
			textodescripcion = document.createTextNode(arregloDescripcion[i]),
			textoreponsable = document.createTextNode(arregloResponsables[i]),
			textofecha = document.createTextNode(arregloFecha[i]);

        nombre.appendChild(textonombre);
        descripcion.appendChild(textodescripcion);
        responsables.appendChild(textoreponsable);
        fecha.appendChild(textofecha);

        fila.appendChild(nombre);
        fila.appendChild(boton);
        fila.appendChild(botonFinalizar);

        cuerpo.appendChild(fila);

        
        if (boton.addEventListener) {
            boton.addEventListener('click', function () {

                var numero = this.getAttribute("numero");


                var ventanaD = document.getElementById("miVentanaDetalle");
                ventanaD.style.marginTop = "100px";
                ventanaD.style.left = ((document.body.clientWidth - 350) / 2) + "px";
                ventanaD.style.display = 'block';

                var cuerpoDetalle = document.getElementById("contenedor-detalle");
                cuerpoDetalle.innerHTML = "";
                cuerpoDetalle.setAttribute("numero", numero);
                var textonombre2 = document.createTextNode(arregloNombreTarea[numero]),
                    textodescripcion2 = document.createTextNode(arregloDescripcion[numero]),
                    textoreponsable2 = document.createTextNode(arregloResponsables[numero]),
                    textofecha2 = document.createTextNode(arregloFecha[numero]);

                cuerpoDetalle.appendChild(nombre.appendChild(textonombre2));
                cuerpoDetalle.appendChild(document.createElement("BR"));
                cuerpoDetalle.appendChild(descripcion.appendChild(textodescripcion2));
                cuerpoDetalle.appendChild(document.createElement("BR"));
                cuerpoDetalle.appendChild(responsables.appendChild(textoreponsable2));
                cuerpoDetalle.appendChild(document.createElement("BR"));
                cuerpoDetalle.appendChild(fecha.appendChild(textofecha2));
                cuerpoDetalle.appendChild(document.createElement("BR"));                

            }, false);
        }
    }
}

function finalizarTarea(numero) {
    var textonombre = arregloNombreTarea[numero],
			textodescripcion = arregloDescripcion[numero],
			textoreponsable = arregloResponsables[numero],
			textofecha = arregloFecha[numero];
    
    var nomTareaFinalizada = [];
    var desTareaFinalizada = [];
    var resTareaFinalizada = [];
    var dateTareaFinalizada = [];

    if (localStorage.getItem('NOM_TAREA_FINALIZADA')==null) {
        localStorage.setItem('NOM_TAREA_FINALIZADA', JSON.stringify(nomTareaFinalizada));
        localStorage.setItem('DES_TAREA_FINALIZADA', JSON.stringify(desTareaFinalizada));
        localStorage.setItem('RES_TAREA_FINALIZADA', JSON.stringify(resTareaFinalizada));
        localStorage.setItem('DATE_TAREA_FINALIZADA', JSON.stringify(dateTareaFinalizada));
    }

    nomTareaFinalizada = JSON.parse(localStorage.getItem('NOM_TAREA_FINALIZADA'));
    desTareaFinalizada = JSON.parse(localStorage.getItem('DES_TAREA_FINALIZADA'));
    resTareaFinalizada = JSON.parse(localStorage.getItem('RES_TAREA_FINALIZADA'));
    dateTareaFinalizada = JSON.parse(localStorage.getItem('DATE_TAREA_FINALIZADA'));
   
    nomTareaFinalizada.push(textonombre);
    desTareaFinalizada.push(textodescripcion);
    resTareaFinalizada.push(textoreponsable);
    dateTareaFinalizada.push(textofecha);


    localStorage.setItem('NOM_TAREA_FINALIZADA', JSON.stringify(nomTareaFinalizada));
    localStorage.setItem('DES_TAREA_FINALIZADA', JSON.stringify(desTareaFinalizada));
    localStorage.setItem('RES_TAREA_FINALIZADA', JSON.stringify(resTareaFinalizada));
    localStorage.setItem('DATE_TAREA_FINALIZADA', JSON.stringify(dateTareaFinalizada));


    arregloNombreTarea.splice(numero, 1);
    arregloDescripcion.splice(numero, 1);
    arregloResponsables.splice(numero, 1);
    arregloFecha.splice(numero, 1);

    localStorage.setItem('NOMBRE_TAREA', JSON.stringify(arregloNombreTarea));
    localStorage.setItem('DESCRIPCION', JSON.stringify(arregloDescripcion));
    localStorage.setItem('RESPONSABLES', JSON.stringify(arregloResponsables));
    localStorage.setItem('FECHA', JSON.stringify(arregloFecha));

    verTareas();
}




