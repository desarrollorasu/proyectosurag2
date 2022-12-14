
export function validarFormulacion(datos){
   //Referencias a etiquetas que quiero validar
   let etiquetaNombre=document.getElementById("nombres")
   let etiquetaDocumento=document.getElementById("documento")
   let etiquetaRegistro=document.getElementById("registroprofesional")

    //Validemos tres campos del formulario
    //Nombre-documento-registro del medico
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
    let registroMedico=datos.registro

    //Agregar todos los caminos posibles para validar el formulario
    if(nombresMedico==""&& documentoMedico==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorio',
          })
    }else if(nombresMedico==""&& documentoMedico!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if(nombresMedico!="" && documentoMedico==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        alert("No vamos para la BD")
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }

}