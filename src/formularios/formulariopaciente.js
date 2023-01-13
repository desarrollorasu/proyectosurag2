import{validarFormulacion} from '../formularios/validacionFormularioPaciente.js'
//Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaBoton,etiquetaIdentificacion,etiquetaRegimen,etiquetaTelefono,etiquetaEmail,etiquetaGrupo,etiquetaCuota){
    let nombresPaciente=etiquetaNombre.value
    let IdentificacionPaciente=etiquetaIdentificacion.value
    let regimenPaciente=etiquetaRegimen.value
    let telefonoPaciente=etiquetaTelefono.value
    let grupoPaciente=etiquetaGrupo.value
    let cuotaPaciente=etiquetaCuota.value
    let BotonPaciente=etiquetaBoton.value
    
//debemos almacenar tdos los valoes del formulario 
//en una sola variable
//objeto=almacenar varios datos en 1 solo espacio de memoria

    let datosFormularioPaciente={
        nombre:nombresPaciente,
        documento:IdentificacionPaciente,
        regimen:regimenPaciente,
        telefono:telefonoPaciente,
        grupo:grupoPaciente,
        cuota:cuotaPaciente,
        boton:BotonPaciente,
        
    }
    validarFormulacion(datosFormularioPaciente)
}