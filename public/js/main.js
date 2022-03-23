const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
});

const search = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-box');
const aLog = document.querySelector('a#a-nav-login')
const aReg = document.querySelector('a#a-nav-register')
const aCat = document.querySelector('a#a-nav-catalogo')

search.addEventListener('click', function (){
    search.classList.toggle('active-search')
    if (search.classList.contains('active-search')) {
        searchBox.style.display = 'block';
        search.innerHTML = '<i class="fas fa-times"></i>';
        aLog.classList.add('a-nav')
        aReg.classList.add('a-nav')
        aCat.classList.add('a-nav')
    } else {
        searchBox.style.display = 'none';
        search.innerHTML = 'Buscar';
        aLog.classList.remove('a-nav');
        aReg.classList.remove('a-nav');
        aCat.classList.remove('a-nav');
    }
});