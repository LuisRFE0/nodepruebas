const esPalindromo = (frase) => {
    frase = frase.toLowerCase().replace(/\s/g, '');
    return frase === frase.split('').reverse().join('') ? true : false;
}
module.exports = { esPalindromo };