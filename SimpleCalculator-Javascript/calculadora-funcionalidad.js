var number = "";
var pile = 0;

// there are 4 variables that check the operation when onclick equals button
var add = false;
var sub = false;
var mul = false;
var div = false

function displayNumbers(arg) {
    document.getElementById("display").value = number + arg;
    number = document.getElementById("display").value;
}

function addition() {
    pile += parseInt(number);
    document.getElementById("display").value = pile;
    number = "";
    add = true;
}

function substraction() {
    pile -= parseInt(number);
    document.getElementById("display").value = pile;
    number = "";
    sub = true;
}

function multiplication() {
    pile *= parseInt(number);
    document.getElementById("display").value = pile;
    number = "";
    mul = true;
}

function division() {
    pile /= parseInt(number);
    document.getElementById("display").value = pile;
    number = "";
    div = true;
}

function equals() {
    if (add) {
        document.getElementById("display").value = pile + parseInt(number);
    } else if (sub) {
        document.getElementById("display").value = pile - parseInt(number);
    } else if (mul) {
        document.getElementById("display").value = pile * parseInt(number);
    } else {
        document.getElementById("display").value = pile / parseInt(number);
    }

    add = false;
    sub = false;
    mul = false;
    div = false;
}