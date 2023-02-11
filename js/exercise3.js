// Exercise 3: Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

let itemPrice = parseFloat(prompt("Please enter item price: ","20"));
let itemCount = parseInt(prompt("Please enter item count:", "1"));

let totalPrice = itemPrice*itemCount;
let vat = totalPrice*0.05;

document.write(`<table>
<tr>
<th>Total price: </th>
<td>${totalPrice.toFixed(2)}</td>
</tr>
<tr>
<th>VAT: </th>
<td>${vat.toFixed(2)}</td>
</tr>
</table>`)