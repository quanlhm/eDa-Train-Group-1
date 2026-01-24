$(document).ready(function () {
    // setting slide
    currentSlide = "005";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        300: [".clip-container"],
        500: [".pop1"],
        600: [".pop2"],
        700: [".pop3"],
        
       
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("006");
        }
        if (swipedir == 'right') {
            window.goToSlide("004");
        }
    });
});
