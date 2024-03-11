let listaDeNumerosSorteios = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabens você acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativa = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemtentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
       } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', `O numero secreto é menor que ${chute}`);
            exibirTextoNaTela ('h1', 'Tente novamente')
         }else {
            exibirTextoNaTela ('p', `O numero secreto é maior que ${chute}`);
            exibirTextoNaTela ('h1', 'Tente novamente')
        }
        tentativa++;
        limparOCampo();
    }
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteios.length;

     if (quantidadeDeElementosNalista == numeroLimite) {
        listaDeNumerosSorteios = [];
     }

    if (listaDeNumerosSorteios.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteios.push(numeroEscolhido)
        return numeroEscolhido;
    }
}
function limparOCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparOCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}
