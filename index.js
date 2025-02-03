let maxValue = 5;
let randomNum = Math.floor(Math.random() * 5 + 1);
let correctAnswer = false; 





while (!correctAnswer) {

    let promptVar = prompt("Enter a number between 1 - 5");
    promptVar = Number(promptVar);

    if (randomNum === promptVar) {
        correctAnswer = true;
        console.log("Hey you got the correct Number!");
    } else {
        console.log(`${promptVar} was not the correct number. The correct number is ${randomNum} `);
    }
};