# How-to-Calculate-Your-Mortgage-Payment

 **Understanding** your mortgage helps you make better financial decisions. Instead of just accepting offers blindly, it’s wise to look at the numbers behind any loan, especially a significant loan like a home loan.

People tend to focus on the monthly payment, but there are other important features that you can use to analyze your mortgage, such as:

* Comparing the monthly payment for several different home loans
* Figuring how much you pay in interest monthly, and over the life of the loan
* Tallying how much you actually pay off over the life of the loan versus the principal borrowed to see how much you actually paid extra

---
## **Calculation Formula**<br>
For these fixed loans, use the formula below to calculate the payment.Note that the carat (^) indicates that you’re raising a number to the power indicated after the carat. 
Payment = P x (r / n) x (1 + r / n)^n(t)] / (1 + r / n)^n(t) - 1
```javascript
let monthlyPaymentAmount = (principalAmount * ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPaymentsAmount)) / (Math.pow(1 + monthlyRate, numberOfPaymentsAmount) - 1))).toFixed(2);

let completeTotalAmount = (monthlyPaymentAmount * numberOfPaymentsAmount).toFixed(2);

let totalInterestAmount = (completeTotalAmount - principalAmount).toFixed(2);
```

## **The Inputs**<br>

Start by gathering the information needed to calculate your payments and understand other aspects of the loan. You need the details below. The letter in parentheses tells you where we’ll use these items in calculations (if you choose to calculate this yourself, but you can also use online calculators):

* The loan amount (P) or principal, which is the home purchase price plus any other charges, minus the down payment
* The annual interest rate (r) on the loan, but beware that this is not necessarily the APR, because the mortgage is paid monthly, not annually, and that creates a slight difference between the APR and the interest rate
* The number of years (t) you have to repay, also known as the term
* The number of payments per year (n), which would be 12 for monthly payments
* The type of loan: fixed-rate, interest-only, adjustable, etc.
* The market value of the home
* Your monthly income

## **What's the difference?**<br> 
APR is the annual cost of a loan to a borrower — including fees. Like an interest rate, the APR is expressed as a percentage. Unlike an interest rate, however, it includes other charges or fees such as mortgage insurance, most closing costs, discount points and loan origination fees.

## **Stretch goals**<br>
adding APIs later with different fees and insurance rates depending of your state and being able to add that to your final amount.