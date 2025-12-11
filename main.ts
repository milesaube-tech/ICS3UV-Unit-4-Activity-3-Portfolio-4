/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-10
 * @fileoverview This program collects 5 rainfall values for April, May and June,
 *              calculates each month's average and the overall average, and displays them.
 */

// helper to get a valid number from the user
function getNumberInput(promptText: string): number {
  while (true) {
    const raw = prompt(promptText);
    const value = parseFloat(raw === null ? "" : raw.trim());
    if (!Number.isNaN(value) && Number.isFinite(value)) {
      return value;
    }
    console.log("Invalid input. Please enter a numeric value.");
  }
}

// arrays and totals
const aprilRainfall: number[] = new Array(5);
const mayRainfall: number[] = new Array(5);
const juneRainfall: number[] = new Array(5);

let aprilTotal = 0;
let mayTotal = 0;
let juneTotal = 0;

// input for April
for (let index = 0; index < 5; index++) {
  const value = getNumberInput(`Enter April rainfall #${index + 1}: `);
  aprilRainfall[index] = value;
  aprilTotal += value;
}

// input for May
for (let index = 0; index < 5; index++) {
  const value = getNumberInput(`Enter May rainfall #${index + 1}: `);
  mayRainfall[index] = value;
  mayTotal += value;
}

// input for June
for (let index = 0; index < 5; index++) {
  const value = getNumberInput(`Enter June rainfall #${index + 1}: `);
  juneRainfall[index] = value;
  juneTotal += value;
}

// calculate averages
const aprilAverage = aprilTotal / 5;
const mayAverage = mayTotal / 5;
const juneAverage = juneTotal / 5;
const overallAverage = (aprilTotal + mayTotal + juneTotal) / 15;

// output (formatted like the example)
console.log(`Average rainfall for April is ${aprilAverage.toFixed(1)} mm`);
console.log(`Average rainfall for May is ${mayAverage.toFixed(1)} mm`);
console.log(`Average rainfall for June is ${juneAverage.toFixed(1)} mm`);
console.log(`The average rainfall for all three months is ${overallAverage.toFixed(2)} mm`);
console.log("\nDone.");