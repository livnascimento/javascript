const nome = "Lívia";
const sobrenome = "Nascimento";
const idade = 21;
const pesoEmKg = 50;
const alturaEmMetro = 1.80;

let imc = pesoEmKg / (alturaEmMetro ^ 2);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoEmKg} kg,\ntem ${alturaEmMetro} m e seu IMC é ${imc}`);