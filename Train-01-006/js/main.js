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
    
    
    
    const slideMapping = {
        ".img1": "001",
        ".img2": "002",
        ".img3": "003",
        ".img4": "004",
        ".img5": "005"
    };

    Object.keys(slideMapping).forEach((selector) => {
        $(selector).on("touchend click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            const targetSlide = slideMapping[selector];
            console.log("Navigating to slide:", targetSlide);
            if (window.goToSlide) {
                window.goToSlide(targetSlide);
            }
        });
    });

   
   
});
