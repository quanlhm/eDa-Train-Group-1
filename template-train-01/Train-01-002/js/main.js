$(document).ready(function () {
    // setting slide
    currentSlide = "002";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
      300: [".main-title"],
      500: [
        ".chart-title",
        ".x-label",
        ".x-tick-labels",
        ".chart-legends",
        ".y-label",
        ".chart-note",
      ],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("003");
        }
        if (swipedir == 'right') {
            // disableSwipe = true;
            window.goToSlide("001");
        }
    });
});
