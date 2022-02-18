//Redireccionar al hacer click en los servicios principales

var Home_Pantry = document.getElementById('home_pantry');
var Retail_Scanning = document.getElementById('scanning');
var Execution = document.getElementById('execution');

Home_Pantry.addEventListener('click', () => {
    window.location.href = "#"
});
Retail_Scanning.addEventListener('click', () => {
    window.location.href = "#"
});
Execution.addEventListener('click', () => {
    window.location.href = "#"
})

var menuHP = document.getElementById('menuHP');
var menuRSc = document.getElementById('menuRSc');
var menuEx = document.getElementById('menuEx');
var menuCI = document.getElementById('menuCI');


var counterVal2 = 0;
var updateDisplay2;

function incrementClick2() {
    updateDisplay2 = ++counterVal2;
}

menuHP.addEventListener('click', () => {
    if (updateDisplay2 % 2) {
        blockHP.style.display = "block";
        menuHP.style.transform = "rotate(180deg)"
        menuHP.style.animationName = "none"

    } else {
        document.getElementById('desplegableHP').style.display = "none"
        menuHP.style.transform = "rotate(0deg)"
        menuHP.style.animationName = "pulse"

    }
});
var counterVal1 = 0;
var updateDisplay1;
var blockRSc = document.getElementById('desplegableRSc');
var blockEx = document.getElementById('desplegableEx');
var blockCI = document.getElementById('desplegableCI');
var blockHP = document.getElementById('desplegableHP');

function incrementClick1() {
    updateDisplay1 = ++counterVal1;
}


menuRSc.addEventListener('click', () => {
    if (updateDisplay1 % 2) {
        blockRSc.style.display = "block";
        menuRSc.style.transform = "rotate(180deg)"
        menuRSc.style.animationName = "none"

    } else {
        document.getElementById('desplegableRSc').style.display = "none";
        menuRSc.style.transform = "rotate(0deg)"
        menuRSc.style.animationName = "pulse"

    }
});
var counterVal3 = 0;
var updateDisplay3;

function incrementClick3() {
    updateDisplay3 = ++counterVal3;
}

menuEx.addEventListener('click', () => {

    if (updateDisplay3 % 2) {
        blockEx.style.display = "block";
        menuEx.style.transform = "rotate(180deg)"
        menuEx.style.animationName = "none"

    } else {

        document.getElementById('desplegableEx').style.display = "none";
        menuEx.style.transform = "rotate(0deg)"
        menuEx.style.animationName = "pulse"

    }
})
var counterVal4 = 0;
var updateDisplay4;

function incrementClick4() {
    updateDisplay4 = ++counterVal4;
}
menuCI.addEventListener('click', () => {

    if (updateDisplay4 % 2) {
        blockCI.style.display = "block";
        menuCI.style.transform = "rotate(180deg)"
        menuCI.style.animationName = "none"

    } else {

        document.getElementById('desplegableCI').style.display = "none";
        menuCI.style.transform = "rotate(0deg)"
        menuCI.style.animationName = "pulse"

    }
})