document.getElementById("prod-image").onchange = function(e) {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
  
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);
  
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      let preview = document.getElementById('preview'),
              image = document.createElement('img');
            image.classList.add('profile-avatar');
            image.setAttribute('id','profile-avatar')
      image.src = reader.result;
      let previousImg = document.getElementById('profile-avatar')
      previousImg.classList.remove('profile-avatar')
      previousImg.classList.add('previous-img')

      preview.innerHTML = '';
      preview.append(image);
    };
  }
