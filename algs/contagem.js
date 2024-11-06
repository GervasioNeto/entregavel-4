// contagem.js
function contarNumerosInteiros(numeros) {
    let count = 0;
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        if (Number.isInteger(numero)) {
            count++;
        }
    }
    
    return count; 
}

module.exports = contarNumerosInteiros; 
