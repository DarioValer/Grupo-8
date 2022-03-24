window.addEventListener('load', function() {

    if (JSON.parse(localStorage.getItem('arrayCarrito')) == undefined) {
         localStorage.setItem('arrayCarrito', JSON.stringify([]));
        } else {
         JSON.parse(localStorage.getItem('arrayCarrito'))
        }
        
     let itemsInCarrito = JSON.parse(localStorage.arrayCarrito).length;
     (itemsInCarrito) =>  itemsInCarrito == undefined || [] || NaN ? itemsInCarrito = 0 : itemsInCarrito = JSON.parse(localStorage.arrayCarrito).length
      
     //console.log('itemsInCarrito ' + typeof(itemsInCarrito) + ' ' + itemsInCarrito) 
     let itemsInCart = document.getElementById('cart-item-counter').innerHTML += itemsInCarrito  
     //console.log('itemsInCart ' + typeof(itemsInCart) + ' ' + itemsInCart)

     let addToCart = document.querySelector('.add-cart-button');
     let title = document.querySelector('.product-name').title;
     let price = document.querySelector('.price-detail').title;
     let image = document.querySelector('.image-product-detail').title;
     let id = document.querySelector('.id-detail-product').title;
    
    //console.log('id ' + ' ' + typeof(id) + ' ' + id)
    
    
    //Agregamos los items en el array, con sus atributos. Y los pasamos a New Item.
     let productsOnCart = [];
    
     addToCart.addEventListener('click', () => {
             productsOnCart = JSON.parse(localStorage.getItem('arrayCarrito')) || [];
             let newItem = {
                 title: title,
                 price: price,
                 image: image,
                 id: id,
                 quantity: 1
             }
    
             //console.log('contenido del local : ' + localStorage.getItem('arrayCarrito'))
    
             //console.log('productsOnCart adentro ' + productsOnCart)
             productsOnCart.push(newItem)
             localStorage.setItem('arrayCarrito', JSON.stringify(productsOnCart));
             location.reload();
         })
     //console.log('productsOnCart ' + productsOnCart)
     //console.log('contenido del local 2: ' + localStorage.getItem('arrayCarrito'))
    
     
     })