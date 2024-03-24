#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ message: "Enter First number", type: "number", name: "firstnumber" },
{ message: "Enter second number", type: "number", name: "secondnumber" },
{
message: "select one of operator to perform action",
type: "list",
name: "operator",
choices: ["addition", "subtraction", "Multiplication", "Division"],
},
]);

//conditionnal statement
if (answer.operator === "addition")
{
console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction")
{
console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") 
{
console.log(answer.firstnumber * answer.secondnumber);
} 
else if (answer.operator === "Division")
{
console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid  operator");
}
