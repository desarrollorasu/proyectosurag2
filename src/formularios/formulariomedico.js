import{validarFormulacion} from '../formularios/validacionFormularioMedico.js'
//Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroProfesional,etiquetaEmail,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto){
    let nombresMedico=etiquetaNombre.value
    let documentosMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroProfesionalMedico=etiquetaRegistroProfesional.value
    let emailMedico=etiquetaEmail.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcionMedico=etiquetaDescripcion.value
    let fotoMedico=etiquetaFoto.value

//debemos almacenar tdos los valoes del formulario 
//en una sola variable
//objeto=almacenar varios datos en 1 solo espacio de memoria

    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentosMedico,
        especialidad:especialidadMedico,
        registro:registroProfesionalMedico,
        correo:emailMedico,
        sede:sedeMedico,
        horario:horarioMedico,
        descripcion:descripcionMedico,
        foto:fotoMedico,
    }
    validarFormulacion(datosFormularioMedico)

}