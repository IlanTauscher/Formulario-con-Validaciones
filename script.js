const nombre = document.querySelector(".nombre")
const mail = document.querySelector(".mail")
const contra = document.querySelector(".contra") 
const nuevaContra = document.querySelector(".nuevaContra")   
const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")
const span3 = document.querySelector(".span3")
const span4 = document.querySelector(".span4")
const formulario = document.querySelector(".form")
let mensajeNombre

nombre.addEventListener("input", (event) => {
    if(nombre.value.length <= 3 ){
        mensajeNombre = "El nombre debe de tener mas de tres caracteres."
        span1.innerHTML = mensajeNombre
        span1.style.color = "#ff0000"
    }else if(nombre.value.length > 3){
        mensajeNombre = "Nombre valido."
        span1.innerHTML = mensajeNombre
        span1.style.color = "#15b000"
    }
});

let mensajeMail
mail.addEventListener("input", (event) => {
    if(mail.value.includes("@")){
        mensajeMail = "Mail valido."
        span2.innerHTML = mensajeMail
        span2.style.color = "#15b000"
    }else{
        mensajeMail = "El mail tiene formato incorrecto."
        span2.innerHTML = mensajeMail
        span2.style.color = "#ff0000"
    }
});

const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
let mensajeContra
contra.addEventListener("input", (event) => {
    let validar = ValidarContra(contra)
    if(validar){
        mensajeContra = "Contraseña valida."
        span3.innerHTML = mensajeContra
        span3.style.color = "#15b000"
    }else{
        mensajeContra = "Contraseña invalida. la contraseña debe de tener al menos 8 caracteres una letra y un numero."
        span3.innerHTML = mensajeContra
        span3.style.color = "#ff0000"
    }
});

function ValidarContra(contraseña){
    return regex.test(contraseña.value)
}

let mensajeContraNueva
nuevaContra.addEventListener("input", (event) => {
    if(nuevaContra.value == contra.value){
        mensajeContraNueva = "Contraseña valida."
        span4.innerHTML = mensajeContraNueva
        span4.style.color = "#15b000"
    }else if(nuevaContra.value != contra.value){
        mensajeContraNueva = "La contraseña debe de ser igual a la anterior."
        span4.innerHTML = mensajeContraNueva
        span4.style.color = "#ff0000"
    }
});

formulario.addEventListener("submit", (event)=>{

    event.preventDefault();
    let validar = ValidarContra(contra)
    if(nombre.value.length <= 3 || !mail.value.includes("@") || !validar || nuevaContra.value != contra.value){
        alert("No se a podido enviar, tienes algun campo mal.");
    }
    else{
        alert("Se a enviado correctamente.");
    }
})