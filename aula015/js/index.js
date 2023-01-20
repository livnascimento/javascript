const numero = Number(prompt("Digite um número:"));

document.body.innerHTML += `<h1>O número é: ${numero}<h1/><br/>`;
document.body.innerHTML += `A raíz quadrada desse número é: ${numero ** (1/2)}<br/>`;
document.body.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero) ? "sim" : "não"}<br/>`;
document.body.innerHTML += `${numero} é NaN? ${Number.isNaN(numero) ? "sim" : "não"}<br/>`;
document.body.innerHTML += `Arredondado pra cima: ${Math.ceil(numero)}<br/>`;
document.body.innerHTML += `Arredondado pra baixo: ${Math.floor(numero)}<br/>`;
document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br/>`;
