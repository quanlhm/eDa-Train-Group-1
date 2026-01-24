$(document).ready(function () {
    // setting slide
    currentSlide = "003";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        300: [".title"],
        500: [".pop1", ".pop2"],
        700: [".image"],
        
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("002");
        }
        if (swipedir == 'right') {
            window.goToSlide("004");
        }
    });
});
