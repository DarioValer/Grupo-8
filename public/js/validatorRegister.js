/*window.addEventListener('load', function(){*/
const formRegister = document.querySelector('form.form-register');

/* REGISTER */

formRegister.addEventListener('submit', function(event){

let errors = [];
let inputName = document.querySelector('#name');
let errorName = document.getElementById("errorName");
if (inputName.value == '') {
    errorName.innerHTML = ''
    //errors.push('Nombre es un Campo obligatorio')
    errorName.innerHTML = "Nombre es un Campo obligatorio wey";
} else if (inputName.value.length < 2) {
    errorName.innerHTML = ''
    errorName.innerHTML = "El campo Nombre debe tener al menos 2 caracteres";
    //errors.push('El campo Nombre debe tener al menos 2 caracteres')
} else {
    errorName.innerHTML = ''
}


let inputLastName = document.querySelector('#lastName');
let errorLastName = document.getElementById("errorLastName")
if(inputLastName.value == '') {
    errorLastName.innerHTML = ''
    errorLastName.innerHTML = 'Apellido es un Campo obligatorio'
   // errors.push('Apellido es un Campo obligatorio')
} else if (inputLastName.value.length < 2) {
    errorLastName.innerHTML = '';
    errorLastName.innerHTML = 'El campo Apellido debe tener al menos 2 caracteres'
    //errors.push('El campo Apellido debe tener al menos 2 caracteres')
} else {
    errorLastName.innerHTML = ''
}

let inputUser = document.querySelector('#user');
let errorUser = document.getElementById("errorUser");
if (inputUser.value == '') {
    errorUser.innerHTML = ''
    errorUser.innerHTML = 'Usuario es un Campo obligatorio'
   // errors.push('Usuario es un Campo obligatorio')
} else {
    errorUser.innerHTML = ''
}

let inputEmail = document.querySelector('#email');
let errorEmail = document.getElementById("errorEmail");
if (inputEmail.value == '' ) {
    errorEmail.innerHTML = ''
    errorEmail.innerHTML = 'Email es un Campo obligatorio'
    // errors.push('Email es un Campo obligatorio')
} else {
    errorEmail.innerHTML = ''
}

let inputPassword = document.querySelector('#password');
let errorPassword = document.getElementById("errorPassword");
if (inputPassword.value == '') {
    errorPassword.innerHTML = ''
    errorPassword.innerHTML = 'Contrasena es un Campo obligatorio'
    //errors.push('Contrasena es un Campo obligatorio')
} else if (inputPassword.value.length < 2) {
    errorPassword.innerHTML = '';
    errorPassword.innerHTML = 'El campo Contrasena debe tener al menos 8 caracteres'
    //errors.push('El campo Contrasena debe tener al menos 8 caracteres')
} else if (inputPassword.value.indexOf(number) == -1) {
    errorPassword.innerHTML = '';
    errorPassword.innerHTML = 'El campo Contrasena debe tener al menos un número'
    //errors.push('El campo Contrasena debe tener al menos un número')
} else {
    errorPassword.innerHTML = '';
}

    /*let fileInput = document.getElementById('file');*/
/* let inputAvatar = document.querySelector('#avatar')
    /*let filePath = fileInput.value;*/
/*let extensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!extensions.exec(inputAvatar.value)){
        errors.push('Por favor seleccion un archivo .jpeg/.jpg/.png/.gif');
        inputAvatar.value = '';
        return false;
    }else{
        //Image preview
        if (inputAvatar.files && inputAvatar.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(inputAvatar.files[0]);
        }
    }*/

/* let inputAvatar = document.querySelector('#avatar');
let extensions = ['.jpg', '.jpeg', '.png', '.gif']
if (inputAvatar.value) {
    let extension = (inputAvatar.value.substring(inputAvatar.value.lastIndexOf('.'))).toLoweCase();
    let allowed = false;
    for (let i = 0; i < extensions.length; i++) {
        if (extensions[i] == extension) {
            allowed = true
            break
        }
       
    }
    if (!allowed) {
        errors.push('La extension de archivo no es permitida. Solo se pueden subir archivos con extensiones: ' + extensions.join())
    }
} */

/*if(errors.length > 0){
    event.preventDefault();
    let ulErrors = document.querySelector('div.errors ul');
    ulErrors.innerHTML = ''
    for (let i = 0; i < errors.length; i++) {
        ulErrors.innerHTML += '<li>' + errors[i] + '</li>'
    }
}*/
event.preventDefault();
})
/*})*/