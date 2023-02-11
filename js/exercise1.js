// Exercise 1: Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

let num1 = parseFloat(prompt("Enter a num: ", "0"));
let num2 = parseFloat(prompt("Enter a num: ", "0"));

let add = (num1+num2).toFixed(4);
let mul = (num1*num2).toFixed(4);
let div = (num1/num2).toFixed(4);

document.write(`<table>
<tr>
<th>Operation</th>
<th>Result</th>
</tr>
<tr>
<td>Addition</td>
<td>${add}</td>
</tr>
<tr>
<td>Multiply</td>
<td>${mul}</td>
</tr>
<tr>
<td>Division</td>
<td>${div}</td>
</tr>
</table>`);