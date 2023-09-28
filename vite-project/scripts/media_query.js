export function handleMedia() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function initMediaQuery() {
        const notShowImg = document.querySelectorAll('[media-query-disabled]')
        const showImgMedia = document.querySelectorAll('[media-query-enabled]')
        if (mediaQuery.matches) {
            notShowImg.forEach(function (image) {
                image.classList.add('logo-mobile')
            })
            showImgMedia.forEach(function (image) {
                image.classList.remove('logo-mobile')
            })
        } else {
            notShowImg.forEach(function (image) {
                image.classList.remove('logo-mobile')
            })
            showImgMedia.forEach(function (image) {
                image.classList.add('logo-mobile')
            })
        }
    }

    initMediaQuery()

    mediaQuery.addEventListener('change', () => {
        initMediaQuery()
    })
}   