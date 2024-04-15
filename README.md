# Tax Calculator
## Overview

This project is a tax calculator application designed to calculate income tax based on specific criteria outlined below. It provides a user-friendly interface for users to input their income details, age, and deductions, and then calculates the applicable tax based on the provided information.

## Tax Calculation Formula

- Overall income (after deductions) under 8 Lakhs is not taxed.
- Income over 8 Lakhs is taxed at different rates based on age:
  - 30% for people with age less than 40
  - 40% for people with age greater than or equal to 40 but less than 60
  - 10% for people with age greater than or equal to 60

## Features

- Input fields for gross annual income, extra income, deductions, and age.
- Error handling for incorrect inputs, including:
  - Highlighting error icon next to input fields with incorrect values.
  - Tooltip showing specific error messages upon hovering over the error icon.
  - Mandatory field validation for the age dropdown.
- Popup display of final tax calculation results upon submission of the form.
- All the edges apart from the assumptions mentioned below are handled properly.

## Assumptions made
1. The input data is taken as integer.
2. Input income should be in rupees as the output result is in INR.
3. Applicable deductions should be less than or equal to (annual + extra) income otherwise the net income will be negative.
4. If the input fields(except the age selection) are left blank then the calculations are done taken the value '0' from input field

## Usage

1. Fill in the input fields with the relevant income, deductions, and age information.
2. Ensure all input fields contain valid numerical values.
3. Select the appropriate age group from the dropdown menu.
4. Click the "Submit" button to calculate the tax.
5. Review the tax calculation displayed in the modal.

## Screenshots/Preview
1. UI of the website showing the hint on hovering on help question mark icon.
   
   <img src="https://github.com/harshit070104/Tax-Calculator/assets/105371858/b7963458-97f9-45d6-96da-42ab155bb11c" width="600px"><br>

2. Error highlighted on entering characters other than numbers and hovering on it shows the error.<br>

   <img src="https://github.com/harshit070104/Tax-Calculator/assets/105371858/a07eab85-c849-4a2a-bd3b-6320496ae351" width="600px"><br>

3. Submitting without choosing the age shows error.<br>
    
   <img src="https://github.com/harshit070104/Tax-Calculator/assets/105371858/2e1a617e-91d9-4edf-adf1-69df854fbca3" width="600px">

4. Submit button will not show results untill all the errors are removed.

   <img src="https://github.com/harshit070104/Tax-Calculator/assets/105371858/5d7473f8-0c5f-4b12-8310-bbb47011949ct" width="600px">
   
5. Valid inputting of all the field. Hence, no error is seen and you can submit to see your net income.  

   <img src="https://github.com/harshit070104/Tax-Calculator/assets/105371858/2c5d23f0-5a1c-4c8f-aa56-1cfad427056a" width="600px">

6. Result pop out according to your corresponding inputs.  

   <img src="https://github.com/harshit070104/Tax-Calculator/assets/105371858/b2c1e784-1869-4023-a324-e91725465e79" width="600px">

## Changes Suggested
1. Better UI/UX for the website
2. Allowing input formats like,
   - Enter the amount in lakhs.
   - Entering the amount with commas for avoiding mistakes or better readablility.
   - Allowing decimals in the input field.
3. Applying more error checks for the calculations, like
   - Tax deductions should not be greater than the sum of (annual + extra) income
   - If result button is pressed on having all the input text fiels set to empty then error must be shown "Enter atleast one field to calculate net income"
4. To make it more general and beneficial, calculate tax and net income for some strong currencies like dollar, pounds, euro according to their tax policies.
5. We can share the resulting net income to mail.
6. Make it fully Responsive.


## Installation

1. Clone the repository to your local machine:
bash
```
git clone <repository-url>
```
2. Navigate to the project directory:
bash
```
cd tax-calculator
```
3. Open the ```index.html``` file in your web browser to launch the application.

## Technologies Used
1. HTML
2. CSS
3. JavaScript
