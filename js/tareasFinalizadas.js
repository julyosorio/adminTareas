finalizadas();

function finalizadas() {

    var caja = document.getElementById("cuerpo");
    caja.innerHTML = "";

    var nomTareaFinalizada =JSON.parse(localStorage.getItem('NOM_TAREA_FINALIZADA')),
        desTareaFinalizada =JSON.parse(localStorage.getItem('DES_TAREA_FINALIZADA')),
        resTareaFinalizada =JSON.parse(localStorage.getItem('RES_TAREA_FINALIZADA')),
        dateTareaFinalizada =JSON.parse(localStorage.getItem('DATE_TAREA_FINALIZADA'));


  var nTareasFinalizada;

    if (nomTareaFinalizada) {
        nTareasFinalizada = nomTareaFinalizada.length;
    }
    else {
        nTareasFinalizada = 0;
    }

    for(var i=0; i<nTareasFinalizada;i++){

         var fila = document.createElement("div");
        fila.className="tarea";


        var nombre = document.createElement("label"),
            descripcion = document.createElement("label"),
            responsables = document.createElement("label"),
            fecha = document.createElement("label");

        nombre.style.textAlign = "center";
      
        var textonombre = document.createTextNode(nomTareaFinalizada[i]),
            textodescripcion = document.createTextNode(desTareaFinalizada[i]),
            textoreponsable = document.createTextNode(resTareaFinalizada[i]),
            textofecha = document.createTextNode(dateTareaFinalizada[i]);

        nombre.appendChild(textonombre);
        descripcion.appendChild(textodescripcion);
        responsables.appendChild(textoreponsable);
        fecha.appendChild(textofecha);

        fila.appendChild(nombre);
        fila.appendChild(descripcion);
        fila.appendChild(responsables);
        fila.appendChild(fecha);

        cuerpo.appendChild(fila);
      };

   } 


