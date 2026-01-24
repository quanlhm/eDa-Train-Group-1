$(document).ready(function () {
    // setting slide
    currentSlide = "006";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        300: [".g1"],
        400: [".g2"],
        500: [".g3"],
        600: [".g4"],
        700: [".g5"],
        
       
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            disableSwipe = false;
        }
        if (swipedir == 'right') {
            window.goToSlide("005");
            
        }
    });
});
