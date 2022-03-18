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
const addToCartButtons = document.querySelectorAll('.add-to-cart')
addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event) {
    const button = event.target
    const item = button.closest('main-container-prods')
    console.log(item)
}