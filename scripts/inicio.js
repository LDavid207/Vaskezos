// Carrousel 
window.addEventListener('load', function() {
    new Glider(document.querySelector('.carrousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.arrow__left',
            next: '.arrow__right'
        },
        responsive: [
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        }
        ]
    });
})

