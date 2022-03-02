/*window.addEventListener('load', function(){*/
    const formEditproduct = document.querySelector('form.form-editproduct');

    /* PRODUCT */

    formEditproduct.addEventListener('submit', function(event){

        let errors = [];

        let inputTitle = document.querySelector('#title');
    if (inputTitle.value == '') {
        errors.push('El Titulo es un Campo obligatorio')
    }
    else if (inputTitle.value.length < 5) {
        errors.push("El campo Titulo debe tener mas de 5 caracteres");
    }

    let inputDescription = document.querySelector('#descrip');
    if (inputDescription.value.length < 20) {
        errors.push('El campo Descripcion debe mas de 20 caracteres')
    }

    if(errors.length > 0){
        event.preventDefault();
        let ulError = document.querySelector('div.errors ul');
        for (let i = 0; i < errors.length; i++) {
            ulError.innerHTML +='<li>'+ errors[i]+'</li>';
        }
    }

    })
    
/*})*/