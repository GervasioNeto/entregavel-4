function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let numero = 5; // Digite o número para verificar

if (isPrime(numero)) {
    console.log(numero + " é primo.");
} else {
    console.log(numero + " não é primo.");
}
