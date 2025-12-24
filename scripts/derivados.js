// Desactiva el active de DERIVADOS LÁCTEOS al pasar el mouse por otros sublinks

document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (!dropdownMenu) return;
    const sublinks = dropdownMenu.querySelectorAll('a');
    const derivados = Array.from(sublinks).find(a => a.classList.contains('active'));
    sublinks.forEach(link => {
        if (!link.classList.contains('active')) {
            link.addEventListener('mouseenter', () => {
                if (derivados) derivados.classList.remove('active');
            });
            link.addEventListener('mouseleave', () => {
                if (derivados) derivados.classList.add('active');
            });
        }
    });
});

//Carrousel de productos
window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c1_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c1_left',
            next: '.c1_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c2_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c2_left',
            next: '.c2_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c3_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c3_left',
            next: '.c3_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c4_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c4_left',
            next: '.c4_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c5_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c5_left',
            next: '.c5_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c6_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c6_left',
            next: '.c6_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c7_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c7_left',
            next: '.c7_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

window.addEventListener('DOMContentLoaded', function() {
    new Glider(document.querySelector('.c8_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.c8_left',
            next: '.c8_right'
        },
        responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        },
        {
        breakpoint: 1040,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }
        ]
    });
})

