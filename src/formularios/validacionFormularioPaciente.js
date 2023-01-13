
export function validarFormulacion(datos){
    //Referencias a etiquetas que quiero validar
    let etiquetaNombre=document.getElementById("nombre")
    let etiquetaDocumento=document.getElementById("identificacion")

    console.log(datos)
    
 
     //Validemos tres campos del formulario
     //Nombre-documento-registro del medico
     let nombresPaciente=datos.nombre
     let documentoPaciente=datos.documento
     
 
     //Agregar todos los caminos posibles para validar el formulario
     if(nombresPaciente==""&& documentoPaciente==""){
         etiquetaNombre.classList.add("is-invalid")
         etiquetaDocumento.classList.add("is-invalid")
         Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'Nombre y documento son obligatorio',
           })
     }else if(nombresPaciente==""&& documentoPaciente!=""){
         etiquetaNombre.classList.add("is-invalid")
         etiquetaDocumento.classList.remove("is-invalid")
     }else if(nombresPaciente!="" && documentoPaciente==""){
         etiquetaNombre.classList.remove("is-invalid")
         etiquetaDocumento.classList.add("is-invalid")
     }else{
         alert("No vamos para la BD")
         etiquetaNombre.classList.remove("is-invalid")
         etiquetaDocumento.classList.remove("is-invalid")
     }
 
 }