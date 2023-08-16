function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField);
    const inputFieldValueString = inputField.value;
    // console.log(inputFieldValueString);
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
console.log('mehedi hasan');