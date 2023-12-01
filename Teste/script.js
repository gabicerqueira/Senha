var entradaSenha = document.getElementById('entradaSenha');
var medidorPoder = document.getElementById('medidorPoder');
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinuscula = document.getElementById('requisitoMinuscula');
var requisitoMaiuscula = document.getElementById('requisitoMaiuscula');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var mostrarSenha = document.getElementById('mostrarSenha');

entradaSenha.addEventListener('input', function (){
    var senha = entradaSenha.value;
    var Poder = verificarPoder(senha);
    var cor = Poder < 50 ? 'red' : Poder < 80 ? 'yellow' : 'green';

    //Transições css
    medidorPoder.style.width = Poder + '%';
    medidorPoder.style.backgroundColor = cor;

    textoPoder.textContent = 'Força da Senha: ' + Poder + '%'; //Atualiza o texto
    atualizar(senha); //Atualiza os indicadores de requisitos
});

mostrarSenha.addEventListener('click', function (){
    entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password';
});

function verificarPoder(senha) {
    var comprimentoMinimo = 8;
    var possuiMinuscula = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    var Poder = 0; //Pontos com base nas regras

    if (senha.length >= comprimentoMinimo) {
        Poder += 25;
        requisitoComprimento.classList.remove('vermelho');
        requisitoComprimento.classList.add('verde');
    } else{
        requisitoComprimento.classList.remove('verde');
        requisitoComprimento.classList.add('vermelho');
    }

    if (possuiMinuscula) {
        Poder += 25;
        requisitoMinuscula.classList.remove('vermelho');
        requisitoMinuscula.classList.add('verde');
    } else{
        requisitoMinuscula.classList.remove('verde');
        requisitoMinuscula.classList.add('vermelho');
    }

    if (possuiMaiuscula) {
        Poder += 25;
        requisitoMaiuscula.classList.remove('vermelho');
        requisitoMaiuscula.classList.add('verde');
    } else{
        requisitoMaiuscula.classList.remove('verde');
        requisitoMaiuscula.classList.add('vermelho');
    }

    if (possuiNumeros) {
        Poder += 25;
        requisitoNumero.classList.remove('vermelho');
        requisitoNumero.classList.add('verde');
    } else{
        requisitoNumero.classList.remove('verde');
        requisitoNumero.classList.add('vermelho');
    }

    if (possuiSimbolo) {
        Poder += 25;
        requisitoSimbolo.classList.remove('vermelho');
        requisitoSimbolo.classList.add('verde');
    } else{
        requisitoSimbolo.classList.remove('verde');
        requisitoSimbolo.classList.add('vermelho');
    }

    return Math.min(100, Poder);
}

function atualizar(senha){
    verificarPoder(senha);
}