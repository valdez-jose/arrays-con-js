
console.log("\nCrearemos un array vacío y llenarlo con números pares\n")
// 
console.log("Usaremos for para incrementar números pares de 2 en 2 hasta 10\n");
const pares = [];

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log("Números pares:", pares); // [2, 4, 6, 8, 10]
console.log("\n========Fin del ejercicio===========\n")