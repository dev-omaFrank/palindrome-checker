var input = document.querySelector('.test-word'),
    infoTxt = document.querySelector(".info-txt"),
    checkButton = document.querySelector('.button');

if (inputValue === "") {
    var inputValue = input.value;
    infoTxt.innerHTML = "Please enter a word!"
}

function validateWord(inputValue) {
    var inputValue = document.querySelector('.test-word').value.toString()
    var regExp = /[^A-Za-z0-9]/g;
    var lowRegVal = inputValue.toLowerCase().replace(regExp, '');

    var reverseVal = lowRegVal.split('').reverse().join('');

    if (reverseVal === "") {
        infoTxt.innerHTML = "Please enter a word!"
    } else if (reverseVal === lowRegVal) {
        infoTxt.innerHTML = lowRegVal + " is a palindrome";
    } else if (reverseVal != lowRegVal) {
        infoTxt.innerHTML = lowRegVal + " is not a palindrome";
    } else {
        infoTxt.innerHTML = "Please enter a word!";
    };
    return;
}



checkButton.onclick = function palindromeChecker(inputValue) {
    validateWord(inputValue);
}