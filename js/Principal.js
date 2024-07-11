/*MAYORES DE EDAD
Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16);*/

import  { Cl_Persona }  from "./persona.js";
import Cl_Contador from "./contador.js";

let persona1=new Cl_Persona("Luis",15)
let persona2=new Cl_Persona("Ana",19)
let persona3=new Cl_Persona("Jose",21)
let persona4=new Cl_Persona("Carmen",17)
let persona5=new Cl_Persona("Rosa",18)
let persona6=new Cl_Persona("Jose",22)
let persona7=new Cl_Persona("Maria",17)
let persona8=new Cl_Persona("Luz",19)
let persona9=new Cl_Persona("Rafael",23)
let persona10=new Cl_Persona("Liz",15)
let persona11=new Cl_Persona("Marcos",20)
let persona12=new Cl_Persona("Leo",16)

let contador=new Cl_Contador()
contador.procesarPersona(persona1)
contador.procesarPersona(persona2)
contador.procesarPersona(persona3)
contador.procesarPersona(persona4)
contador.procesarPersona(persona5)
contador.procesarPersona(persona6)
contador.procesarPersona(persona7)
contador.procesarPersona(persona8)
contador.procesarPersona(persona9)
contador.procesarPersona(persona10)
contador.procesarPersona(persona11)
contador.procesarPersona(persona12)

let salida = document.getElementById("salida");
salida.innerHTML= "Resultado"
salida.innerHTML+="<br> Cantitdad de Personas:"+ contador.ContPersonas()
salida.innerHTML+="<br> Cantitdad d Personas Mayor Edad:"+ contador.ContMayor()
salida.innerHTML+="<br> Porcentaje Mayor Edad:"+ contador.PorcMayor()
