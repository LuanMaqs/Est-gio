const readline = require('readline');

// Função para calcular o valor final da variável SOMA
function calcularSoma() {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    console.log(`Valor da variável SOMA: ${SOMA}`);
}

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === a || num === b) return true;
    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

function verificarFibonacci() {
    rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (answer) => {
        let number = parseInt(answer);
        if (isFibonacci(number)) {
            console.log(`${number} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${number} não pertence à sequência de Fibonacci.`);
        }
        menu(); // Retorna ao menu após a verificação
    });
}

// Função para calcular e analisar o faturamento diário
function analisarFaturamento() {
    const faturamentoDiario = [
        5000, 6000, 8000, 4000, 5500, 7000, 8000,
        6500, 7000, 8000, 8500, 9000, 10000, 9500
    ];

    const menorFaturamento = Math.min(...faturamentoDiario);
    const maiorFaturamento = Math.max(...faturamentoDiario);

    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    const mediaMensal = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
    menu(); // Retorna ao menu após a análise
}

// Função para calcular o percentual de representação por estado
function calcularPercentualEstado() {
    const faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, val) => acc + val, 0);

    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        console.log(`Percentual de representação de ${estado}: ${percentual.toFixed(2)}%`);
    }
    menu(); // Retorna ao menu após o cálculo
}

// Função para inverter uma string
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

function inverterStringInput() {
    rl.question("Digite uma string para inverter: ", (answer) => {
        let stringInvertida = inverterString(answer);
        console.log(`String original: ${answer}`);
        console.log(`String invertida: ${stringInvertida}`);
        menu(); // Retorna ao menu após a inversão
    });
}

// Função do menu
function menu() {
    console.log("\nEscolha uma opção:");
    console.log("1: Calcular o valor da variável SOMA");
    console.log("2: Verificar se um número pertence à sequência de Fibonacci");
    console.log("3: Analisar o faturamento diário");
    console.log("4: Calcular o percentual de representação por estado");
    console.log("5: Inverter uma string");

    rl.question("Digite o número da opção desejada: ", (opcao) => {
        switch (parseInt(opcao)) {
            case 1:
                calcularSoma();
                break;
            case 2:
                verificarFibonacci();
                break;
            case 3:
                analisarFaturamento();
                break;
            case 4:
                calcularPercentualEstado();
                break;
            case 5:
                inverterStringInput();
                break;
            default:
                console.log("Opção inválida.");
                menu(); // Volta ao menu se a opção for inválida
        }
    });
}

// Configuração do readline para capturar entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Chama o menu para iniciar
menu();
