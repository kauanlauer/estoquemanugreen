const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const mainContent = document.querySelector('main');
const menuIcon = document.getElementById('menu-icon');

let menuOpen = false;

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

// Função para ativar o modo Android
function enableAndroidMode() {
    // Coloque aqui o código para ativar o modo Android
    alert('Modo Android ativado');
    
    // Verificar se estamos em um dispositivo Android
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        // Ativar a orientação retrato se estiver no modo Android
        screen.orientation.lock('portrait').catch(error => {
            console.error('Erro ao definir a orientação:', error);
        });
    }
}

// Função para ativar o modo Android
function enableAndroidMode() {
    // Coloque aqui o código para ativar o modo Android
    alert('Modo Android ativado');
    
    // Verificar se estamos em um dispositivo Android
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        // Ativar a orientação paisagem se estiver no modo Android
        screen.orientation.lock('landscape').catch(error => {
            console.error('Erro ao definir a orientação:', error);
        });
    }
}

// Botão "Modo Desktop" - Ativa o modo Desktop
document.getElementById('desktopButton').addEventListener('click', () => {
    enableDesktopMode();
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
