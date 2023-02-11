// Exercise 2: Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

let yearNow = new Date().getFullYear();
let birthYear = parseInt(prompt("Enter a birth year(>1920 and <2023): "));
let yearsOld = (birthYear > 1919) && (birthYear<2024) ? `You are ${yearNow-birthYear} years old` : "Wrong birth date";

document.write(yearsOld);