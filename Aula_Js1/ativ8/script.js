var precooriginal = parseFloat(prompt("Digite o preço original do produto:"));
var porcentagemdesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));
var desconto = precooriginal * (porcentagemdesconto / 100);
var precfinal = precooriginal - desconto;

alert("O preço final após o desconto é: " + precfinal);
