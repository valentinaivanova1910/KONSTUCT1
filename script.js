const BURGER__MENU = document.querySelector(".burger__menu").addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('open');
})

