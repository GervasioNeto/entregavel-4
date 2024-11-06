function fibonacci(n) {
    let termo1 = 0;
    let termo2 = 1;
    let termo3;
    let resultados = [termo1, termo2]; // Inicializa o array com os primeiros dois termos.

    for (let i = 3; i <= n; i++) {
        termo3 = termo1 + termo2;
        resultados.push(termo3); // Adiciona o termo calculado ao array de resultados.
        termo1 = termo2;
        termo2 = termo3;
    }

    return resultados; // Retorna a sequência inteira de Fibonacci.
}

module.exports = fibonacci;