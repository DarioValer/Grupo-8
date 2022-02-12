const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
});

const search = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-box')

search.addEventListener('click', function (){
    search.classList.toggle('active-search')
    if (search.classList.contains('active-search')) {
        searchBox.style.display = 'block';
        search.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        searchBox.style.display = 'none';
        search.innerHTML = 'Buscar'
    }
});