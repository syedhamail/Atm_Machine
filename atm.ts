#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //dollar
let  myPin = 1234;

let pinAnswer = await inquirer.prompt([{
    
    name: "pin",
    type: "number",
    message: "Please enter your pin"
}])

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");

    let balanceAns = await inquirer.prompt([{

        name: "Operation",
        type: "list",
        message: "Please select Option",
        choices: ["Check Balance", "Withdraw"]
    }]);

    if(balanceAns.Operation === "Check Balance"){
        console.log("Your balance is :" + myBalance);
    }

    else if(balanceAns.Operation === "Withdraw"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "Please enter the amount",
            
        }]);
       
         if(amountAns.amount <= myBalance){
            myBalance -=amountAns.amount
        
        console.log("You have withdrawn: " + amountAns.amount);
        console.log("Your remaining balance is: " + myBalance);
         }
         else{
             console.log("Insufficient Balance")
         }
    } 
}
else(
    console.log("Incorrect Pin Code")
)