 /*window.addEventListener('load', function(){*/
/* const formLogin = document.querySelector('form.form-login');

 /* LOGIN */

/* formLogin.addEventListener('submit', function(event){

     let errors = [];

     let inputEmail = document.querySelector('#email');
     let errorEmail = document.getElementById('errorEmail')
 if (inputEmail.value == '') {
    // errors.push('Email es un Campo obligatorio')
    errorEmail.innerHTML = '';
    errorEmail.innerHTML = 'Email es un campooo obligatorio'
 } 

 let inputPassword = document.querySelector('#password');
 let errorPassword = document.getElementById('errorPassword');
 if (inputPassword.value == '') {
     //errors.push('Contrasena es un Campo obligatorio')
     errorPassword.innerHTML = '';
     errorPassword.innerHTML = "Contraseña es un campo obligatorio"
 }

 if(errors.length > 0){
     event.preventDefault();
     let ulError = document.querySelector('div.error ul');
     for (let i = 0; i < errors.length; i++) {
         ulError.innerHTML +='<li>'+ errors[i]+'</li>';
     }
 }

 })

/*})*/