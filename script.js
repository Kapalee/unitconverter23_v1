"use strict";

window.addEventListener("load", start);

function start() {
    console.log("Unit Converter 23 is running");
    document.querySelector("#conversiontype").addEventListener("change", conversionChange);
    document.querySelector("#inputvalue").addEventListener("keyup", inputChange);
}

function conversionChange() {
    selectConversion(this.value);
}

function selectConversion(conversion) {
    console.log(`Selected conversion: ${conversion}`);
    setConversionType(conversion);
    displayInputUnit(conversion);
    displayOutputUnit(conversion);
    performConversion();
}

function inputChange() {
    if(this.value) {
        // only accept valid inputs
        selectInput(this.value);
    }
}

function selectInput(inputvalue) {
    console.log(`input value: ${inputValue}`);
    setInputValue(inputValue);
    performConversion()
}

function performConversion() {
    const type = getConversionType();
    const value = getInputValue();

    const result = convert(type,value);
    displayOutputValue(result);
}

/* ********************************* */
