import "./styles.css";

let a: number[] = new Array(6);
let b: number[] = new Array(6);
let suma: number[] = new Array(6);

for (let i = 0; i < 6; i++) {
  a[i] = Number(prompt("Ingrese 6 sumando"));
  b[i] = Number(prompt("Ingrese los 6 restantes sumando"));
  suma[i] = a[i] + b[i];
  console.log(`El resultado de la suma de ${a[i]} + ${b[i]} es: ${suma[i]}`);
}
