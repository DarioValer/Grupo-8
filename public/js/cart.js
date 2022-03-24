window.addEventListener('load', function() {

    let arrayProds = JSON.parse(localStorage.arrayCarrito);
   
   
    let arrayReduced = arrayProds.reduce((acc, item) => {
        let title = item.title;
        let price = parseFloat(item.price);
        let image = item.image;
        let id = item.id;
        let quantity = item.quantity;
        let length = acc[item.title] ? quantity = arrayProds.filter((title) => title.title == [item.title]).length : quantity
   
   
        return {...acc, [item.title]:{title, price: price * length, image, quantity: length, id}}
           
    },[]);
   
    let arrayEntries = Object.entries(arrayReduced);
    let arrayFor = arrayEntries.map(x => x[1]) 
    let totalAmount = arrayProds.reduce((acc, item) => {
        return acc = acc + parseFloat(item.price)
    }, 0);
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
   
    if (arrayProds.length === 0) {
        let div = document.querySelector(".main-container-detail-cart");
        div.innerHTML += `<section class="main-container-cart-articles">
        <h2 class="render-if-cart-its-empty">No hay productos en el carrito</h2>
        <form action="/products" method="get">
        <button class="checkout-button-cart">Ver otros productos</button>
        </form>
       </section>`
    } else {
       
        for (let i = 0; i < arrayFor.length; i++) {
            let producto = arrayFor[i]
   
            let div = document.querySelector(".main-container-detail-cart");
            let contenido = `<section class="main-container-cart-articles">
            <div class="main-product-detail-cart">
                <a href="/products/detail/${producto.id}"><img class="image-product-cart" src="${producto.image}" alt="" width="100%" height="100%" name="image-product-cart" id="image-product-cart"></a>
                <h4 class="product-name-cart" name="product-name-cart" >${producto.title}</h4>
                <div class="details-cart-container">
                <p class="price-detail-cart" name="price-detail-cart" >$${producto.price}</p>
       
                    <div class="quantity-and-cart-block">
                    <div class="product-quantity-cart">Cantidad:    ${producto.quantity}</div>
                    <div class="button-container-cart">
                    <div class="reduce-button-cart" type="button" id="reduce-button-cart" product-title="${producto.title}">-</div><div class="add-button-cart" type="button" id="add-button-cart" product-title="${producto.title}">+</div> 
                    </div>
                    
                   
                    </div>
                    </div>
           
        </section>`;
   
          div.innerHTML += contenido;
        }
      }
   if (arrayProds.length != 0) {
       let div = document.querySelector(".total-amount");
       let totalAmount2 = totalAmount;
       let contenido = `<div class="cart-total">
       <div class="total-cart-p">Total:</div> <div>$${totalAmount2}</div>
       </div>
       <div class="clear-button-cart" type="button">Vaciar carrito</div>
       <div class="checkout-button-cart" type="button">Checkout</div>`;
   
       div.innerHTML += contenido;
   }

   let removeButtons = document.querySelectorAll('.reduce-button-cart')
   let addButtons = document.querySelectorAll('.add-button-cart')
   
   removeButtons.forEach((buttons) => {
       buttons.addEventListener('click', (e) => {

   
           productsOnCart = JSON.parse(localStorage.getItem('arrayCarrito'))
   
           let productTitle = e.target.getAttribute('product-title');
           let findIndex = productsOnCart.map(object => object.title).indexOf(productTitle)
           let itemRemoved = productsOnCart.splice(findIndex, 1)
   
           localStorage.setItem('arrayCarrito', JSON.stringify(productsOnCart));
           location.reload();
        })
   })
   
   
   addButtons.forEach((button) => {
       button.addEventListener('click', (e) => {
   
           let productTitle = e.target.getAttribute('product-title');
           let productToAdd = arrayProds.find((product) => product.title === productTitle)
   
   
           productsOnCart = JSON.parse(localStorage.getItem('arrayCarrito'))
           productsOnCart.push(productToAdd)
           localStorage.setItem('arrayCarrito', JSON.stringify(productsOnCart));
           location.reload();
        })
   })
   
   
   //Vaciar Carrito
   let clearCart = document.querySelector('.clear-button-cart')
   clearCart.addEventListener('click', () => { 
       alert('Vaciaste el carrito');
       localStorage.setItem('arrayCarrito', JSON.stringify([]));
       location.reload();
    })
   
   //Botón checkout 
   let checkoutCart = document.querySelector('.checkout-button-cart')
   checkoutCart.addEventListener('click', () => {
       alert('Gracias por tu compra');
       localStorage.setItem('arrayCarrito', JSON.stringify([]));
       location.replace("/products/gracias");
   })
   })

   //Prueba Cart Rocko
/*class Cart{
        //Añadir producto al carrito
    buyProduct(e){
    e.preventDefault();
    if(e.target.classList.contains("add-to-cart")){
        const product = e.target.parentElement.parentElement;
        //this.readProduct(product)
        console.log(product)
    }
    }
}
*/
// const addToCartButtons = document.querySelectorAll('.add-to-cart')
// addToCartButtons.forEach(addToCartButton => {
//     addToCartButton.addEventListener('click', addToCartClicked)
// })

// function addToCartClicked(event) {
//     const button = event.target
//     const item = button.closest('main-container-prods')
//     console.log(item)
// }
