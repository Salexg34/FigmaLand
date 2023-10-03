const mediaQuery = window.matchMedia("(max-width: 768px)");

function initMediaQuery() {
    console.log('123')
    const notShowImg = document.querySelectorAll('[media-query-disabled]')
    const showImgMedia = document.querySelectorAll('[media-query-enabled]')

    // for (let i=0; i<= 1000000; i++) {console.log(i)}

    const removeArray = mediaQuery.matches
        ? showImgMedia
        : notShowImg

    const addArray = mediaQuery.matches
        ? notShowImg
        : showImgMedia

    removeArray.forEach((image) => {
        image.classList.remove('logo-mobile')
    })
    addArray.forEach((image) => {
        image.classList.add('logo-mobile')
    })
}


export function handleMedia() {

    initMediaQuery()

    mediaQuery.addEventListener('change', initMediaQuery)
}

export function handleWindownSize() {
    initMediaQuery()

    window.addEventListener('resize', mediaQueryDecorator(initMediaQuery))
}

function mediaQueryDecorator(initMediaQuery) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                initMediaQuery()
            }, 100)
        }
    }
