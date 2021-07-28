var number = "";
var pile = 0;

// there are 4 variables that check the operation that is been done onclick 
var add = false;
var sub = false;
var mul = false;
var div = false;

var firstOperation = true;

function displayNumbers(arg) {
    document.getElementById("display").value = Number(number + arg);
    number = document.getElementById("display").value;
}

function addition() {
    if (sub) {
        pile -= parseInt(number);
    } else if (mul) {
        pile *= parseInt(number);
    } else if (div) {
        pile /= parseInt(number);
    } else {
        pile += parseInt(number);
    }
    document.getElementById("display").value = pile;
    number = "";
    add = true;
    sub = false;
    mul = false;
    div = false;
    firstOperation = false;
}

function substraction() {
    if (firstOperation) {
        pile = parseInt(number);
        firstOperation = false;
    } else {
        if (add) {
            pile += parseInt(number);
        } else if (mul) {
            pile *= parseInt(number);
        } else if (div) {
            pile /= parseInt(number);
        } else {
            pile -= parseInt(number);
        }
    }
    document.getElementById("display").value = pile;
    number = "";
    sub = true;
    add = false;
    mul = false;
    div = false;
}

function multiplication() {
    if (firstOperation) {
        pile = parseInt(number);
        firstOperation = false;
    } else {
        if (add) {
            pile += parseInt(number);
        } else if (sub) {
            pile -= parseInt(number);
        } else if (div) {
            pile /= parseInt(number);
        } else {
            pile *= parseInt(number);
        }
    }
    document.getElementById("display").value = pile;
    number = "";
    mul = true;
    add = false;
    sub = false;
    div = false;
}

function division() {
    if (firstOperation) {
        pile = parseInt(number);
        firstOperation = false;
    } else {
        if (add) {
            pile += parseInt(number);
        } else if (sub) {
            pile -= parseInt(number);
        } else if (mul) {
            pile *= parseInt(number);
        } else {
            pile /= parseInt(number);
        }
    }

    document.getElementById("display").value = pile;
    number = "";
    div = true;
    add = false;
    sub = false;
    mul = false;
}

function resetAC() {
    number = "";
    pile = 0;
    document.getElementById("display").value = Number(number + pile);
    number = document.getElementById("display").value;
}

function resetC() {
    number = "";
    document.getElementById("display").value = Number(number + pile);
    number = document.getElementById("display").value;
}

function percentage() {
    if (add) {
        document.getElementById("display").value = pile + Number(number / 100);
    } else if (sub) {
        document.getElementById("display").value = pile - Number(number / 100);
    } else if (mul) {
        document.getElementById("display").value = pile * Number(number / 100);
    } else if (div) {
        document.getElementById("display").value = pile / Number(number / 100);
    }

}

function squareRoot() {
    document.getElementById("display").value = Math.sqrt(number);
}

function equals() {
    if (add) {
        document.getElementById("display").value = pile + parseInt(number);
    } else if (sub) {
        document.getElementById("display").value = pile - parseInt(number);
    } else if (mul) {
        document.getElementById("display").value = pile * parseInt(number);
    } else if (div) {
        document.getElementById("display").value = pile / parseInt(number);
    }

    pile = parseInt(document.getElementById("display").value);
    number = 0;

}