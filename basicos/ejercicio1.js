/*
    Usamos .forEach() para recorrer un array
  */
 console.log("\nTenemos un array de frutas.\n");
 const frutas = ["manzana", "pera", "uva"];
 console.log(frutas);

console.log("\nVamos a recorrerlo con forEach() y mostrar cada fruta con su índice.\n");

frutas.forEach(function(fruta, index) {
  console.log("Fruta en posición", index, "es", fruta);
});
console.log("\n===========fin del ejercicio 1============\n");