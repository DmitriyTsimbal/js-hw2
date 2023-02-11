// Exercise 0: Обчислити значення виразу S1=a+12+b, S2=sqrt((a+b)/(2*a)), S3=cbrt((a+b)*c),S4=sin(a/-b)

let num0 = parseFloat(prompt("Enter a num: ", "0"));
let num1 = parseFloat(prompt("Enter a num: ", "0"));
let num2 = parseFloat(prompt("Enter a num: ", "0"))

let S1 = (num0+12+num1).toFixed(4);
let S2 = Math.sqrt((num0+num1)/(2*num0)).toFixed(4);
let S3 = Math.cbrt((num0+num1)*num2).toFixed(4);
let S4 = Math.sin(num0/-num1).toFixed(4);

document.write (
    `Значення виразу S1=a+12+b:${ S1 }
<hr>
Значення виразу S2=sqrt((a+b)/(2*a)):${ S2 }
<hr>
Значення виразу S3=cbrt((a+b)*c):${ S3 }
<hr>
Значення виразу S4=sin(a/-b):${ S4 }
<hr>`);