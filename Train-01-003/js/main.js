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
            window.goToSlide("004");
        }
        if (swipedir == 'right') {
            window.goToSlide("002");
        }
    });
   
    
   
    const allContainers = document.querySelectorAll('.pop-up-ai');
    allContainers.forEach(function(container) {
        const popup = container.querySelector('.hide-popup');
        const btnI = container.querySelector('.i.po');
        const handleToggle = function(e) {
            if (popup) {
                if (popup.classList.contains('hidden')) {
                    // HIỆN
                    popup.classList.replace('hidden', 'show');
                    if(btnI) btnI.innerHTML = '&times;';
                    btnI.style.left = '35.2vh';
                } else {
                    // ẨN
                    popup.classList.replace('show', 'hidden');
                    if(btnI) btnI.innerText = 'i'; 
                    btnI.style.left = '35.7vh';
                }
            }
        };
        container.addEventListener('touchend', function(e) {
            e.preventDefault(); 
            handleToggle(e);
        });
        container.addEventListener('click', function(e) {
            handleToggle(e);
        });
    });
});
