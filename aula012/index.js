let A = 'A'; //B
let B = 'B'; //C
let C = 'C'; //A
let aux = A;

A = B;
B = C;
C = aux;

console.log(A, B, C);
