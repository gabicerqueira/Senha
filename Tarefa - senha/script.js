var medidorPoder = document.getElementById('medidorPoder');
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinuscula = document.getElementById('requisitoMinuscula');
var requisitoMaiuscula = document.getElementById('requisitoMaiuscula');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var mostrarSenha = document.getElementById('mostrarSenha');

entradaSenha.addEventListener('input', function () {
    var senha = entradaSenha.value;
    var Poder = verificarPoder(senha);
    var cor = Poder < 31 ? 'red' : Poder < 75 ? 'yellow' : 'green';

    //Transições css
    medidorPoder.style.width = Poder + '%';
    medidorPoder.style.backgroundColor = cor;

    atualizar(senha); //Atualiza os indicadores de requisitos
});

mostrarSenha.addEventListener('click', function () {
    entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password';
    mostrarSenha.innerHTML = entradaSenha.type === 'password' ?
        '<i class="fa-solid fa-eye" style="color: #c7c7c7;"></i>' :
        '<i class="fa-solid fa-eye-slash" style="color: #c7c7c7;"></i>';
});

var textoPoder = document.getElementById('textoPoder');

function verificarPoder(senha) {
    var comprimentoMinimo = 8;
    var possuiMinuscula = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    var Poder = 0; //Pontos com base nas regras

    if (senha.length >= comprimentoMinimo) {
        Poder += 15;
        requisitoComprimento.classList.remove('vermelho');
        requisitoComprimento.classList.add('verde');
    } else {
        requisitoComprimento.classList.remove('verde');
        requisitoComprimento.classList.add('vermelho');
    }

    if (possuiMinuscula) {
        Poder += 15;
        requisitoMinuscula.classList.remove('vermelho');
        requisitoMinuscula.classList.add('verde');
    } else {
        requisitoMinuscula.classList.remove('verde');
        requisitoMinuscula.classList.add('vermelho');
    }

    if (possuiMaiuscula) {
        Poder += 15;
        requisitoMaiuscula.classList.remove('vermelho');
        requisitoMaiuscula.classList.add('verde');
    } else {
        requisitoMaiuscula.classList.remove('verde');
        requisitoMaiuscula.classList.add('vermelho');
    }

    if (possuiNumeros) {
        Poder += 15;
        requisitoNumero.classList.remove('vermelho');
        requisitoNumero.classList.add('verde');
    } else {
        requisitoNumero.classList.remove('verde');
        requisitoNumero.classList.add('vermelho');
    }

    if (possuiSimbolo) {
        Poder += 15;
        requisitoSimbolo.classList.remove('vermelho');
        requisitoSimbolo.classList.add('verde');
    } else {
        requisitoSimbolo.classList.remove('verde');
        requisitoSimbolo.classList.add('vermelho');
    }

    // Atualiza a largura da barra de poder
    var largura = Poder + '%';
    medidorPoder.style.width = largura;

    // Calcula a posição da imagem do pânico
    var posicao = Poder;

    // Atualiza a posição da imagem do pânico
    imgPanico.style.left = posicao + '%';

    var textoPoder = document.getElementById('textoPoder');

    // Atualiza o texto dinâmico
    var texto;
    if (Poder < 16) {
        texto = 'O pânico te achou!';
    } else if (Poder < 31) {
        texto = 'O pânico está perto de você!';
    } else if (Poder < 75) {
        texto = 'O pânico está te procurando!';
    } else {
        texto = 'O pânico está longe de você!';
    }

    // Adiciona a classe 'texto' ao elemento
    textoPoder.textContent = texto;
    textoPoder.style.fontFamily = 'Mont';
    textoPoder.style.fontSize = '30px';
    textoPoder.style.fontWeight = '700';
    textoPoder.style.marginTop = '20px'

    return Math.min(100, Poder);
}

function atualizar(senha) {
    var Poder = verificarPoder(senha);
} 
