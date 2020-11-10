function addNumberDisplay(number) {
    // Function to add number to calculator display

    // Get current display
    var currentDisplay = document.getElementById("display-expression").textContent;

    // If current display is 0
    if (currentDisplay == "0") {
        // Set current display equal to number
        document.getElementById("display-expression").textContent = number;
    } else {
        // Else add number to current display
        document.getElementById("display-expression").textContent += number;
    }
}

function addOperatorDisplay(operator) {
    // Function to add operator to calculator display

    // Get current display
    var currentDisplay = document.getElementById("display-expression").textContent;

    // If current display does not include operator
    if(!currentDisplay.includes(operator)) {
        // Add operator to current diplay
        document.getElementById("display-expression").textContent += operator;
        // Disable other buttons
        disableOtherButtons(operator);
    }
}

function addDecimalPointDisplay () {
    // Function to add decimal point to calculator display

    // Get current display
    var currentDisplay = document.getElementById("display-expression").textContent;

    // If current display does not include a decimal point
    if (!currentDisplay.includes(".")) {
        // Add a decimal point
        document.getElementById("display-expression").textContent += ".";
    } else {
        // Else create a list of operators
        var operators = ["+", "-", "X", "/"];

        // Iterate through list of operators
        var index;
        for (index = 0; index < operators.length; index++) {
            operator = operators[index];
            // If current display includes operator
            if (currentDisplay.includes(operator)) {
                // Get the index of the operator
                operatorIndex = currentDisplay.indexOf(operator);
                // If current display after operator index does not include a decimal point
                if (!currentDisplay.includes(".", operatorIndex)) {
                    // Add a decimal point
                    document.getElementById("display-expression").textContent += ".";
                }
            }
        }
    }
}

function allClear() {
    // Function to reset calculator display

    // Set calculator display to 0
    document.getElementById("display-expression").textContent = 0;

    // Enable all the buttons
    enableAllButtons();
}

function deleteDisplay() {
    // Function to delete a number or operator from calculator display

    // Get current display
    var currentDisplay = document.getElementById("display-expression").textContent;

    // If current display only has 1 number
    if (currentDisplay.length == 1) {
        // Set current display to 0
        document.getElementById("display-expression").textContent = 0;
    } else {
        // Get substring of current display without last char
        var newDisplay = currentDisplay.substring(0, currentDisplay.length-1);
        // Set current display to sub string
        document.getElementById("display-expression").textContent = newDisplay;

        // List of operators
        var operators = ["+", "-", "X", "/"];
        // Get last char of previous display
        var lastChar = currentDisplay.slice(-1);
        // Check if last char is a operator in operators list
        var lastCharIsOperator = operators.includes(lastChar);
        // If last char is an operator
        if(lastCharIsOperator) {
            // Enable all buttons
            enableAllButtons();
        }
    }
}

function squareNumber() {
    // Function to square calculator display

    // Get current display
    var currentNumber = Number(document.getElementById("display-expression").textContent);
    // Square number
    alert(currentNumber * currentNumber);
    // Clear calculator display
    allClear();
}

function squareRootNumber() {
    // Function to square root calculator display

    // Get current display
    var currentNumber = Number(document.getElementById("display-expression").textContent);
    // Square root number
    alert(Math.sqrt(currentNumber));
    // Clear calculator display
    allClear();
}

function solveSin(sinFunction) {
    // Function to calculate sine calculator display based on the given sinFunction

    // Get current display
    var number = Number(document.getElementById("display-expression").textContent);

    // If sine function is sin
    if(sinFunction == "sin") {
        // Calculate sine
        alert(Math.sin(number));
    // Else if sine function is asin
    } else if (sinFunction == "asin") {
        // Calculate arcsine
        alert(Math.asin(number));
    } else {
        // Else calculate hyperbolic arcsine
        alert(Math.asinh(number));
    }
    // Clear calculator display
    allClear();
}

function solveCos(cosFunction) {
    // Function to calculate cosine calculator display based on the given cosFunction

    // Get current display
    var number = Number(document.getElementById("display-expression").textContent);

    // If cosine function is cos
    if(cosFunction == "cos") {
        // Calculate cosine
        alert(Math.cos(number));
    // Else if cosine function is acos
    } else if (cosFunction == "acos") {
        // Calculate arccosine
        alert(Math.acos(number));
    } else {
        // Else calculate hyperbolic arccosine
        alert(Math.acosh(number));
    }
    // Clear calculator display
    allClear();
}

function solveTan(tanFunction) {
    var number = Number(document.getElementById("display-expression").textContent);
    // If tangent function is tan
    if(tanFunction == "tan") {
        // Calculate tangent
        alert(Math.tan(number));
    // Else if tangent function is atan
    } else if (tanFunction == "atan") {
        // Calculate arctangent
        alert(Math.atan(number));
    } else {
        // Else calculate hyperbolic arctangent
        alert(Math.atanh(number));
    }
    // Clear calculator display
    allClear();
}

function disableOtherButtons(selectedButton) {
    // Function to disable calculator buttons except for selectedButton

    // List of buttons
    var buttons = ["+", "-", "X", "/",
                   "sin", "asin", "asinh",
                   "cos", "acos", "acosh",
                   "tan", "atan", "atanh",
                   "square", "square-root"];
    // Iterate through list of buttons
    var counter;
    for (counter = 0; counter < buttons.length; counter++) {
        var button = buttons[counter];
        // If button is not equal to selected button
        if (button != selectedButton) {
            // Disable button
            disableButton(button);
        }
    }
}

function disableButton(button) {
    // Helper function to display given button

    // If button is equal to +
    if (button == "+") {
        // Disable + button
        document.getElementById("addition-button").disabled=true;
    // Else if button is equal to -
    } else if (button == "-") {
        // Disable - button
        document.getElementById("subtraction-button").disabled=true;
    // Else if button is equal to X
    } else if (button == "X") {
        // Disable X button
        document.getElementById("multiplication-button").disabled=true;
    // Else if button is equal to /
    } else if (button == "/") {
        // Disable / button
        document.getElementById("division-button").disabled=true;
    // Else if button is equal to sin
    } else if (button == "sin") {
        // Disable sine button
        document.getElementById("sin-button").disabled=true;
    // Else if button is equal to asin
    } else if (button == "asin") {
        // Disable arcsine button
        document.getElementById("asin-button").disabled=true;
    // Else if button is equal to asinh
    } else if (button == "asinh") {
        // Disable hyperbolic arcshine button
        document.getElementById("asinh-button").disabled=true;
    // Else if button is equal to cos
    } else if (button == "cos") {
        // Disable cosine button
        document.getElementById("cos-button").disabled=true;
    // Else if button is equal to acos
    } else if (button == "acos") {
        // Disable arccosine button
        document.getElementById("acos-button").disabled=true;
    // Else if button is equal to acosh
    } else if (button == "acosh") {
        // Disable hyperbolic arccosine button
        document.getElementById("acosh-button").disabled=true;
    // Else if button is equal to tan
    } else if (button == "tan") {
        // Disable tangent button
        document.getElementById("tan-button").disabled=true;
    // Else if button is equal to atan
    } else if (button == "atan") {
        // Disable arctangent button
        document.getElementById("atan-button").disabled=true;
    // Else if button is equal to atanh
    } else if (button == "atanh") {
        // Disable hyperbolic arctangent button
        document.getElementById("atanh-button").disabled=true;
    // Else if button is equal to square
    } else if (button == "square") {
        // Disable square button
        document.getElementById("square-button").disabled=true;
    // Else if button is equal to sqaure-root
    } else if (button == "square-root") {
        // Disable square root button
        document.getElementById("square-root-button").disabled=true;
    }
}

function enableAllButtons() {
    // Function to enable all buttons

    // List of buttons
    var buttons = ["+", "-", "X", "/",
                   "sin", "asin", "asinh",
                   "cos", "acos", "acosh",
                   "tan", "atan", "atanh",
                   "square", "square-root"];
    // Iterate through list
    var counter;
    for (counter = 0; counter < buttons.length; counter++) {
        var button = buttons[counter];
        // Enable button
        enableButton(button);
    }
}

function enableButton(button) {
    // Helper function to enable given button

    // If button is equal to +
    if (button == "+") {
        // Enable + button
        document.getElementById("addition-button").disabled=false;
    // If button is equal to -
    } else if (button == "-") {
        // Enable - button
        document.getElementById("subtraction-button").disabled=false;
    // If button is equal to X
    } else if (button == "X") {
        // Enable X button
        document.getElementById("multiplication-button").disabled=false;
    // If button is equal to /
    } else if (button == "/") {
        // Enable / button
        document.getElementById("division-button").disabled=false;
    // If button is equal to sin
    } else if (button == "sin") {
        // Enable sine button
        document.getElementById("sin-button").disabled=false;
    // If button is equal to asin
    } else if (button == "asin") {
        // Enable arcsine button
        document.getElementById("asin-button").disabled=false;
    // If button is equal to asinh
    } else if (button == "asinh") {
        // Enable hypberbolic arcsine button
        document.getElementById("asinh-button").disabled=false;
    // If button is equal to cos
    } else if (button == "cos") {
        // Enable cosine button
        document.getElementById("cos-button").disabled=false;
    // If button is equal to acos
    } else if (button == "acos") {
        // Enable arccosine button
        document.getElementById("acos-button").disabled=false;
    // If button is equal to acosh
    } else if (button == "acosh") {
        // Enable hyperbolic arccosine button
        document.getElementById("acosh-button").disabled=false;
    // If button is equal to tan
    } else if (button == "tan") {
        // Enable tangent button
        document.getElementById("tan-button").disabled=false;
    // If button is equal to atan
    } else if (button == "atan") {
        // Enable arctangent button
        document.getElementById("atan-button").disabled=false;
    // If button is equal to atanh
    } else if (button == "atanh") {
        // Enable hyperbolic arctangent button
        document.getElementById("atanh-button").disabled=false;
    // If button is equal to square
    } else if (button == "square") {
        // Enable square button
        document.getElementById("square-button").disabled=false;
    // If button is equal to square-root
    } else if (button == "square-root") {
        // Enable square root button
        document.getElementById("square-root-button").disabled=false;
    }
}

function equalButton() {
    // Function to solve calculator display

    // Get current display
    var currentDisplay = document.getElementById("display-expression").textContent;
    // List of operators
    var operators = ["+", "-", "X", "/"];
    // Variable to determine if operator found in display
    var operatorFound = false;
    //Iterate through list
    var index;
    for (index = 0; index < operators.length; index++) {
        operator = operators[index];
        // If current display includes operator
        if (currentDisplay.includes(operator)) {
            // Split current display using operator
            var numbers = currentDisplay.split(operator);
            // Solve math expression
            solveMathExpression(numbers, operator);
            // Set operator found to true
            operatorFound = true;
        }
    }
    // If operator not found
    if(!operatorFound) {
        // Display current display
        alert(currentDisplay);
    }
    // Clear calculator display
    allClear();
}

function solveMathExpression(numbers, operator) {
    // Function to solve calculator display

    // If operator equals +
    if (operator == "+") {
        // Add numbers
        var result = Number(numbers[0]) + Number(numbers[1]);
        alert(result);
    } else if (operator == "-") {
        // Subtract numbers
        var result = Number(numbers[0]) - Number(numbers[1]);
        alert(result);
    } else if (operator == "X") {
        // Multiply numbers
        var result = Number(numbers[0]) * Number(numbers[1]);
        alert(result);
    } else {
        // Else check if second number is a form of 0
        if (numbers[1] == "0" || numbers[1] == "" || numbers[1] =="." || numbers[1] == ".0") {
            // Display message of not dividing by 0
            alert("Cannot divide by 0");
        } else {
            // Divide numbers
            var result = Number(numbers[0]) / Number(numbers[1]);
            alert(result.toFixed(2));
        }
    }
}