function getInputById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldStr);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const getElementValueByIdStr = element.innerText;
    const value = parseFloat(getElementValueByIdStr);
    return value;
}

function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}