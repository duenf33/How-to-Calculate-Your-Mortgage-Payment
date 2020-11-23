const readline = require('readline');
const fs = require('fs');

let info = [];
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayIntro = () => {
    const intro = `

**************** Loan Calculator ******************
Understanding your mortgage helps you make better financial decisions. 
Compare your monthly payments for several different 
home loans.
***************************************************


`


    interface.question(intro, loanAmount);
}

fs.readFile('./info.json', 'utf8', (err, data) => {
    if(err){
    console.log(err);
    }
    const obj = JSON.parse(data);
    info = obj.info;
    displayIntro();
})

const saveInfo = () => {
    const obj = {info: info}
    const data = JSON.stringify(obj, null, 2);
    fs.writeFile('./info.json', data, 'utf8', (err) => {
    if(err){
        console.log(error);
        return;
    }
    console.log('input have been saved.');
    displayIntro();
    })
}

const loanAmount = ans => {
    if(!isNaN(ans)){
    console.log(`Loan amount is ${ans}`);
    interface.question('\nPlease enter the loan amount:\n', interestRate)
    saveInfo();
    } else {
        console.log('Please enter amount in Number format')
    }
    displayIntro();
}
const interestRate = ans => {
    if(!isNaN(ans)){
    console.log(`Interest rate is ${ans} %`);
    interface.question('\nwhat is your interest rate?\n', numberMonths)
    } else {
    console.log('Please enter a Number')
    } 
}
const numberMonths = ans => {
    if(!isNaN(ans)){
    console.log(`Interest rate is ${ans} %`);
    interface.question('\nwhat is your interest rate?\n', interestRate)
    } else {
    console.log('Please enter a Number')
    } 
}

// interface.question('enter any question here',questions);

// Calculation Formula
// let monthlyPaymentAmount = (
// principalAmount *
// ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPaymentsAmount)) /
//     (Math.pow(1 + monthlyRate, numberOfPaymentsAmount) - 1))
// ).toFixed(2);

// let completeTotalAmount = (
// monthlyPaymentAmount * numberOfPaymentsAmount
// ).toFixed(2);

// let totalInterestAmount = (completeTotalAmount - principalAmount).toFixed(2);


displayIntro();