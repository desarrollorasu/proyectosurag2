//importaciones
import{capturarDatos} from '../formularios/formulariomedico.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistroProfesional=document.getElementById("registroprofesional")
let etiquetaEmail=document.getElementById("email")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorario=document.getElementById("horario")
let etiquetaDescripcion=document.getElementById("descripcion")
let etiquetaFoto=document.getElementById("foto")

//detectar el evento clic
etiquetaBoton.addEventListener("click",function(evento){
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroProfesional,etiquetaEmail,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto)

})