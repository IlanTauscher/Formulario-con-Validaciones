let nombre = document.querySelector(".nombre")
let mail = document.querySelector(".mail")
let contra = document.querySelector(".contra")
let nuevaContra = document.querySelector(".nuevaContra")
        
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let span4 = document.querySelector(".span4")

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