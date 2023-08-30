/**
 * обрабатывает функциональность бургер меню и управляет классами
 * @function
 */

export function handleBurgerMenu() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');

    document.querySelector('.header__burger-btn').addEventListener('click', function () {
        if (!body.classList.contains('lock-body')) {
            body.classList.add('lock-body');
            setTimeout(function () {
                header.classList.add('active');
            }, 200);
        } else setTimeout(function () {
            body.classList.remove('lock-body');
        }, 500);
        header.classList.remove('active');
    });
}
