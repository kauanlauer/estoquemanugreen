const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const mainContent = document.querySelector('main');
const menuIcon = document.getElementById('menu-icon'); // Adicione um ID para o ícone de menu

let menuOpen = false; // Adicione uma variável para rastrear o estado do menu

menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menu.style.left = '0px';
        mainContent.style.marginLeft = '250px';
    } else {
        menu.style.left = '-250px';
        mainContent.style.marginLeft = '0px';
    }
    menuOpen = !menuOpen; // Inverte o estado do menu
});

// Fecha o menu quando o usuário clica fora dele
document.addEventListener('click', (event) => {
    if (menuOpen && event.target !== menuButton && event.target !== menuIcon) {
        menu.style.left = '-250px';
        mainContent.style.marginLeft = '0px';
        menuOpen = false; // Fecha o menu e atualiza o estado
    }
});

// Impede que o clique no menu feche imediatamente
menu.addEventListener('click', (event) => {
    event.stopPropagation();
});
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

function startSlideshow() {
    setInterval(() => {
        showSlide(slideIndex);
    }, 5000); // Altere o intervalo para a transição automática dos slides (em milissegundos)
}

// Inicialize o slideshow
startSlideshow();

