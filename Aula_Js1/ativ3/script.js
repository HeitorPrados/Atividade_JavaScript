function media(x, y, z) {
    soma = x + y + z
    resul = soma / 3
    alert(resul)
}

let num1 = parseFloat(prompt("Digite o primeiro número para a média aritmética: "));
let num2 = parseFloat(prompt("Digite o segundo número para a média aritmética: "));
let num3 = parseFloat(prompt("Digite o terceiro número para a média aritmética: "));

media(num1, num2, num3)