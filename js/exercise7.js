// Exercise 7: Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).


let randomMonth = 1 + Math.floor(Math.random()*(12-1+1));
let randomDay = Math.floor(Math.random()*(6-1+1));

let randomSum =  randomMonth+randomDay;

document.write(`<table>
<tr><th>Random month: </th><td>${randomMonth}</td></tr>
<tr><th>Random day: </th><td>${randomDay}</td></tr>
<tr><th>Sum of random month and day: </th><td>${randomSum}</td></tr>
</table>`)