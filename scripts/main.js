// --- Active link logic for header ---
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links > li > a.link_primary');
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const subLinks = dropdownMenu ? dropdownMenu.querySelectorAll('a') : [];

    let realActive = null;
    let realSubActive = null;

    navLinks.forEach(link => link.classList.remove('active'));
    if (dropdownToggle) dropdownToggle.classList.remove('active');
    subLinks.forEach(link => link.classList.remove('active'));

    if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
        realActive = Array.from(navLinks).find(a => a.textContent.trim().toUpperCase() === 'INICIO');
        if (realActive) realActive.classList.add('active');
    } else if (path.endsWith('quesos.html')) {
        if (dropdownToggle) {
            dropdownToggle.classList.add('active');
            realActive = dropdownToggle;
        }
        subLinks.forEach(link => {
            if (link.textContent.trim().toUpperCase() === 'QUESOS') {
                link.classList.add('active');
                realSubActive = link;
            }
        });
    } else if (path.endsWith('contacto.html')) {
        realActive = Array.from(navLinks).find(a => a.textContent.trim().toUpperCase() === 'CONTACTO');
        if (realActive) realActive.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (realActive && realActive !== link) realActive.classList.remove('active');
        });
        link.addEventListener('mouseleave', function() {
            if (realActive && realActive !== link) realActive.classList.add('active');
        });
    });

    subLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (realSubActive && realSubActive !== link) realSubActive.classList.remove('active');
        });
        link.addEventListener('mouseleave', function() {
            if (realSubActive && realSubActive !== link) realSubActive.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dropdownToggle');
    const menu = document.getElementById('dropdownMenu');
    const arrow = toggle ? toggle.querySelector('.dropdown-arrow') : null;
    let open = false;
    
    if (toggle && menu && arrow) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            open = !open;
            if (open) {
                menu.style.display = 'flex';
                arrow.classList.add('open');
            } else {
                menu.style.display = '';
                arrow.classList.remove('open');
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = '';
                arrow.classList.remove('open');
                open = false;
            }
        });
    }
    
    const links = document.querySelectorAll('.header .navbar .links a');
    const inicio = document.querySelector('.header .navbar .links a.active');
    links.forEach(link => {
        if (!link.classList.contains('active')) {
            link.addEventListener('mouseenter', () => {
                if (inicio) inicio.classList.remove('active');
            });
            link.addEventListener('mouseleave', () => {
                if (inicio) inicio.classList.add('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('btn-menu');
    const navContent = document.querySelector('.nav_content');

    if (menuBtn && navContent) {
        menuBtn.addEventListener('click', function() {
            navContent.classList.toggle('active');
        });
    }
});