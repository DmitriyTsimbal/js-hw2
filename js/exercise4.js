// Exercise 4: Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let lengthCentimeters = parseFloat(prompt("Please enter a length(cm): ","5"));
let lengthMeters = lengthCentimeters * 0.01;
let lengthKilometers = lengthMeters * 0.001;

document.write(`<table>
<tr>
<th>Length centimeters: </th>
<td>${lengthCentimeters.toFixed(2)} Cm</td>
</tr>
<tr>
<th>Length meters: </th>
<td>${lengthMeters.toFixed(2)} M</td>
</tr>
<tr>
<th>Lenth kilometers: </th>
<td>${lengthKilometers.toFixed(4)} Km</td>
</tr>
</table>`)