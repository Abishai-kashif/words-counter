#!/usr/bin/env node
// making a simple word counter CLI project.
import inquirer from "inquirer";
import chalk from "chalk";
// creating colors for my cli project
const white = chalk.hex("#FEFAF6");
const lightBrown = chalk.hex("#EADBC8");
const brown = chalk.hex("#DAC0A3");
const navy = chalk.hex("#102C57");
const bgNavy = chalk.bgHex("#102C57");
// Welcome message
console.log(`\n\t\t${navy.bold("<<")}${white.bold("-----------------------------")}${navy.bold(">>")}`);
console.log(`\t  ${navy.bold("<<<")}${white.bold("--- ")} ${bgNavy.bold.italic("WELCOME TO MY WORDS COUNTER !")} ${white.bold(" ---")}${navy.bold(">>>")}`);
console.log(`\t\t${navy.bold("<<")}${white.bold("-----------------------------")}${navy.bold(">>")}\n\n\n`);
while (true) {
    // asking user for sentence
    const answer = await inquirer.prompt({
        name: "sentence",
        type: "input",
        message: brown.bold("Enter a sentence: "),
    });
    // Created a function for cleaning the sentence
    let cleanSentence = (input) => {
        // Replace extra spaces and consecutive tabs with a single space,using re.
        const cleanedInput = input.replace(/ +|\t+/g, " ");
        // Trim leading and trailing whitespace.
        return cleanedInput.trim();
    };
    // making the sentence clean using clean sentence func
    const cleanedSentence = cleanSentence(answer.sentence);
    // splitting the cleaned sentence on the basis of space,so we can get words iindivisualy in array
    const words = cleanedSentence.split(" ");
    // showing user the list of words
    console.log(`\n\n\t\t${navy("<<")}----------------------------${navy(">>")}`);
    console.log(`\t\t  ${bgNavy.bold.italic("The words in your Sentence :")}`);
    console.log((`\t\t${navy("<<")}----------------------------${navy(">>")}\n`));
    words.forEach((word) => console.log(lightBrown.bold(`${chalk.green.bold("*")} ${word}.`)));
    // telling user the count of words in his sentence
    console.log(brown(`\n\n${chalk.green.bold("->")} The total count of words you have in the Sentence is : ${chalk.green.bold(`${words.length}`)} \n\n`));
    //asking user if he wants to continue
    const wanTo = await inquirer.prompt({
        name: "continue",
        type: "confirm",
        message: brown("Do you wants too continue ?"),
        default: true
    });
    //stop or continue the loop,based on users want
    if (wanTo.continue) {
        console.log(chalk.white.bold("\n\nJust a sec...\n\n"));
    }
    else {
        break;
    }
    ;
}
;
