function math(num1, num2) {
  console.log(`Multiplikation von ${num1} und ${num2}: ${num1 * num2}`);
  console.log(`Division von ${num1} und ${num2}: ${num1 / num2}`);
}

function allFunc(){
  math(10, 2);
  math(30, 20);
  math(100, 100);
  math(5, 0);  // Achtung: Division durch 0 ergibt Infinity
  math(45, 173);
  math(1, 1000);
}
// Testaufrufe der Funktion
