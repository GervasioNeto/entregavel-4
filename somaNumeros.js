let numeros = [10, 20, 30, 40, 50]; // Digite os números a serem somados no array.
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("A soma dos " + (numeros.length) + " números é " + soma);
