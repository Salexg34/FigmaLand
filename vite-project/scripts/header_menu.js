export function burgerMenu() {
    document.querySelector('.header__burger-btn').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('active');
    })
}