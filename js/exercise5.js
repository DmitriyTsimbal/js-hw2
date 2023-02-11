// Exercise 5: Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

let timeConverter = (timeSeconds = parseInt(prompt("Please enter the seconds: ","1000"))) =>{
const timeMilliseconds = timeSeconds*1000;
    return new Date ( timeMilliseconds ).toISOString ().slice ( 11, 19 );
};

document.write(`<p>Time convert result(HH:mm:ss format): ${timeConverter()}</p>`)