#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operators === "Addition") {
    console.log(`Your Answer Is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operators === "Subtraction") {
    console.log(`Your Answer Is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operators === "Multiplication") {
    console.log(`Your Answer Is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operators === "Division") {
    console.log(`Your Answer Is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log(`Please Choose A Valid Operator`);
}
