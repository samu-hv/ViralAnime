//Carousel para pasar los animes SEASON del index
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function () {
    const menuItem2 = document.getElementsByClassName('card__main__season')[0].setAttribute('data-active-two', '');

    const buttonsTwo = document.querySelectorAll("[data-carousel-button-two]")

    buttonsTwo.forEach(button => {
        button.addEventListener("click", () => {
            const offsetTwo = button.dataset.carouselButtonTwo === "next" ? 1 : -1
            const slidesTwo = button.closest("[data-carousel]").querySelector("[data-slides]")

            const activeSlideTwo = document.querySelector("[data-active-two]")

            let newIndexTwo = [...slidesTwo.children].indexOf(activeSlideTwo) + offsetTwo
            if (newIndexTwo < 0) newIndexTwo = slidesTwo.children.length - 1
            if (newIndexTwo >= slidesTwo.children.length) newIndexTwo = 0

            slidesTwo.children[newIndexTwo].dataset.activeTwo = true
            delete activeSlideTwo.dataset.activeTwo
        })
    })
}, 1000);