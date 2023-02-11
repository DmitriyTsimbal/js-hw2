// Exercise 6: З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
let coconutPrice = parseFloat(prompt("Please enter a price of coconut: ","50"));
let mangoPrice = parseFloat(prompt("Please enter a price of mango: ", "67"));
let figPrice = parseFloat(prompt("Please enter a price of fig: ", "35"));

let coconutCount = parseInt(prompt("Please enter a count of coconut:", "1"));
let mangoCount = parseInt(prompt("Please enter a count of mango: ", "1"));
let figCount = parseInt(prompt("Please enter a count of fig: ", "1"));

let priceOfCoconuts = coconutPrice*coconutCount;
let priceOfMango = mangoPrice*mangoCount;
let priceOfFig = figPrice*figCount;

let totalPrice = priceOfCoconuts+priceOfMango+priceOfFig;


document.write(`<table>
<tr><th>Checkout</th></tr>
<tr><th>Coconuts</th><td>${priceOfCoconuts.toFixed(2)}</td></tr>
<tr><th>Mangos price</th><td>${priceOfMango.toFixed(2)}</td></tr>
<tr><th>Figs price</th><td>${priceOfFig.toFixed(2)}</td></tr>
<tr><th>Total price: </th><th>${totalPrice.toFixed(2)}</th></tr>
</table>`)