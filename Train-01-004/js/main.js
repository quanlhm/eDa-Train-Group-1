$(document).ready(function () {
    // setting slide
    currentSlide = "004";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        300: [".class1", ".hello"],
        500: [".class2"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("005");
        }
        if (swipedir == 'right') {
            window.goToSlide("003");
        }
    });
});

$("#chart").ready(function () {
    const ctx = document.getElementById('chart').getContext('2d');


    const blueGradient = ctx.createLinearGradient(0, 0, 0, 100);
    blueGradient.addColorStop(0, '#70c6d9');
    blueGradient.addColorStop(1, '#174f2f');

    const greyGradient = ctx.createLinearGradient(0, 0, 0, 150);
    greyGradient.addColorStop(0, '#ffffff');
    greyGradient.addColorStop(1, '#666666');

    const data = {
        labels: ['1 Lorem', '2 Lorem', '3 Lorem', '4 Lorem', '5 Lorem'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [70, 50, 54, 42, 68],
                backgroundColor: blueGradient,
                borderRadius: { topLeft: 12, topRight: 12 },
                borderSkipped: false,
                barPercentage: 0.7,
                categoryPercentage: 0.7
            },
            {
                label: 'Dataset 2',
                data: [38, 62, 34, 48, 43],
                backgroundColor: greyGradient,
                borderRadius: { topLeft: 12, topRight: 12 },
                borderSkipped: false,
                barPercentage: 0.7,
                categoryPercentage: 0.7
            }
        ]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        plugins: [ChartDataLabels],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: '#fff',
                    anchor: 'center',
                    align: 'center',
                    font: { weight: 'bold', size: 14 },
                    formatter: (value) => value + '%'
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#174f2f' },
                    border: { display: true, color: '#000' },
                    barPercentage: 1,
                },
                y: {
                    beginAtZero: true,
                    max: 80,
                    ticks: { stepSize: 10 },
                    grid: { display: false },
                    border: { display: true, color: '#000' }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart',
            },
            animations: {
                y: {
                    from: 500,
                }
            }
        }
    });
})
