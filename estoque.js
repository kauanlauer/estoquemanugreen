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
