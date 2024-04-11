//link da ide online onde foi desenvolvido:
//https://www.mycompiler.io/view/FUZg3S0EEuq


let i, j, k: number;

//variaveis para mudar os valores das oprações
i = 1; //i está sendo normalmente associado a linha a ser escolhida
j = 3; // j tambem está sendo selecionado como outra linha a ser escolhida
k = 3; // K está sendo assocido ao valor a ser multiplicado por exemplo


class OperacaoMatriz {
    matriz: number[][];
    matriz2: number[][];
    matriz3: number[][];

    constructor(matriz: number[][]) {
        this.matriz = matriz;
        this.matriz2 = JSON.parse(JSON.stringify(matriz));
        this.matriz3 = JSON.parse(JSON.stringify(matriz));
    }

    // Função para trocar duas linhas da matriz
    trocaLinha(row1: number, row2: number): void {
       [this.matriz[row1], this.matriz[row2]] = [this.matriz[row2], this.matriz[row1]];
    }

    // Função para multiplicar uma linha por um número
    multiplicaLinha(row: number, scalar: number): void {
        this.matriz2[row] = this.matriz2[row].map(element => element * scalar);
    }

    // Função para somar uma linha multiplicada por um número pra outra linha
    coisarLinha(row1: number, row2: number, scalar: number): void {
        const multipliedRow2 = this.matriz3[row2].map(element => element * scalar);
        this.matriz3[row1] = this.matriz3[row1].map((element, index) => element + multipliedRow2[index]);
    }

    // Função para exibir a matriz
    imprimeMatriz(): void {
        console.log("Matriz:");
        this.matriz.forEach(row => console.log(row.join("\t")));
    }
    imprimeMatriz2(): void {
        console.log("Matriz 2:");
        this.matriz2.forEach(row => console.log(row.join("\t")));
    }
    imprimeMatriz3(): void {
        console.log("Matriz 3:");
        this.matriz3.forEach(row => console.log(row.join("\t")));
    }
}

// matriz sendo usada
const matriz = new OperacaoMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [2, 4, 6]
]);

//imprime a matriz inicial
console.log("Matriz inicial:");
matriz.imprimeMatriz();

//Troca as linhas das matrizes, escolhendo as posições sendo 0 a inicial
matriz.trocaLinha(i-1, j-1);
console.log("\nDepois da troca de linhas:");
matriz.imprimeMatriz();

// Multiplica uma linha qualquer por um numero, (linha a ser multiplica , valor da multiplicação)
matriz.multiplicaLinha(i-1, k);
console.log("\nDepois da multiplicação:");
matriz.imprimeMatriz2();

// Soma de uma linha multiplicada por um número à outra linha (posição, a linha e o valor)
matriz.coisarLinha(i-1, j-1, k);
console.log("\nExemplo: Depois da operação linha1 = linha1 + 3 * linha2:");
matriz.imprimeMatriz3();
