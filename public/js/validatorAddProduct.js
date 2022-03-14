 /*window.addEventListener('load', function(){*/
 const formAddProduct = document.querySelector('form.form-addprod');

 /* AddProduct */

 formAddProduct.addEventListener('submit', function(event){

     let errors = [];

     let inputTitle = document.querySelector('#title');
 if (inputTitle.value == '') {
     errors.push('Titulo es un Campo obligatorio')
 } else if (inputTitle.value.length < 5) {
     errors.push('El campo Titulo debe tener al menos 5 caracteres')
 }

 let inputDescription = document.querySelector('#description');
 if (inputDescription.value.length < 20) {
     errors.push('El campo Descripción debe tener al menos 20 caracteres')
 }

 let inputPrice = document.querySelector('#number');
 if (inputPrice.value == '') {
     errors.push('Precio es un Campo obligatorio')
 }

 let inputCategory = document.querySelector('#category');
 if (inputCategory.value == '') {
     errors.push('Categoria es un Campo obligatorio')
 }

 let imageInput = document.querySelector("#avatar");
 let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
 let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
 if(imageInput.value != ""){
    if(!allowedExtensions.exec(imageInput.value)){
        errors.image = `Los tipos de archivos permitidos son ${acceptedExtensions.join(', ')}`;
    }
}




 if(errors.length > 0){
     event.preventDefault();
     let ulError = document.querySelector('div.errors ul');
     for (let i = 0; i < errors.length; i++) {
         ulError.innerHTML += '<li>' + errors[i] + '</li>';
     }
 }
 })

/*})*/