    let numeroSecreto = parseInt(Math.random() * 100) + 1;
    const tentativasMax = 10;
    let tentativasRestantes = tentativasMax;

//função assistente

function fimDoJogo() {
    document.getElementById("chancesRestantes").textContent = `Suas chances acabaram! O número secreto era ${numeroSecreto}! O jogo irá reiniciar agora.`;
    document.getElementById("dica").textContent = "";
    setTimeout(() => {
        reiniciarJogo();
    }, 4000);
}


function sistemaAdivinhacao() {
    let palpite = parseInt(document.getElementById("numeroJogador").value);
    document.getElementById("numeroJogador").value = "";

    //numero não é válido
    if (isNaN(palpite)) {
        document.getElementById("resultado").innerText = "Insira somente números!";
        return;
    }

    //numero fora do intervalo
    if (palpite < 1 || palpite > 100) {
        document.getElementById("resultado").innerText = "Valores somente entre 1 a 100!";
        return;
    }

    //numero correto ou incorreto
    if (palpite === numeroSecreto) {
        document.getElementById("resultado").textContent = "Resultado: Você acertou, parabéns!";
        document.getElementById("dica").textContent = "";
        return; 
    }

    else if (palpite > numeroSecreto) {
        tentativasRestantes--;
        document.getElementById("resultado").textContent = "Resultado: Não foi dessa vez!";
        document.getElementById("dica").textContent = "Dica: O número secreto é menor";
        document.getElementById("chancesRestantes").textContent = `Chances restantes: ${tentativasRestantes}`;
        if (tentativasRestantes === 0) {
            fimDoJogo();
        }

        return;
    }
    //acabaram as chances
    else {
        tentativasRestantes--;
        document.getElementById("resultado").textContent = "Resultado: Não foi dessa vez!";
        document.getElementById("dica").textContent = "Dica: O número secreto é maior";
        document.getElementById("chancesRestantes").textContent = `Chances restantes: ${tentativasRestantes}`;
        if (tentativasRestantes === 0) {
            fimDoJogo();
        }
        return;
    }
}

//reset
function reiniciarJogo () {
    numeroSecreto = parseInt(Math.random() * 100) + 1;
    tentativasRestantes = tentativasMax;
    document.getElementById("resultado").textContent = "Resultado: ";
    document.getElementById("dica").textContent = "";
    document.getElementById("chancesRestantes").textContent = "Chaces restantes: 10";
    return;
}