#! /usr/bin/env node

import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 10 + 1);

let numberGame = await inquirer.prompt([
    { message: "Guess a Number", type: "number", name: "GuessedNumber" }
]);

console.log(numberGame)

if (numberGame.GuessedNumber === randomNumber) {
    console.log("Congratulation! You Won")
} else {
    console.log("Please Try Again")
}