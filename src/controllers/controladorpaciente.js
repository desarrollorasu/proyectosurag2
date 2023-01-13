import{capturarDatos} from '../formularios/formulariopaciente.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombre")
let etiquetaBoton=document.getElementById("botonenviar")
let etiquetaIdentificacion=document.getElementById("identificacion")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaTelefono=document.getElementById("telefono")
let etiquetaEmail=document.getElementById("correo")
let etiquetaGrupo=document.getElementById("grupoingreso")
let etiquetaCuota=document.getElementById("cuota")


//detectar el evento clic
etiquetaBoton.addEventListener("click",function(evento){
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaBoton,etiquetaIdentificacion,etiquetaRegimen,etiquetaTelefono,etiquetaEmail,etiquetaGrupo,etiquetaCuota)

})