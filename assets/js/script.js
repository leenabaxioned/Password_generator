/* Author: */
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerSet = "abcdefghijklmnopqrstuvwxyz"
var numberSet = "1234567890"
var symbolSet = "~!@#$%^&*()_+/"

// selectors
var passBox = document.getElementById("pass-box")
var totalChar = document.getElementById("total-char")
var upperInput = document.getElementById("upper-case")
var lowerInput = document.getElementById("lower-case")
var numberInput = document.getElementById("numbers")
var symbolInput = document.getElementById("symbols")
var copyIcon = document.getElementById("copyIcon");

var getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

var generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}

generatePassword();

document.getElementById("btn").addEventListener("click",function() {
        generatePassword();
    }

)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        console.log(subStr);
        return subStr;
    } else {
        return str;
    }
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
       navigator.clipboard.writeText(passBox.value);
        //copyIcon.innerText = "check";
       alert(passBox.innerText  + "\nPassword copied to clipboard");
        copyIcon.title = "Password copied to clipboard";

        // setTimeout(()=>{
        //     copyIcon.innerHTML = "content_copy";
        //     copyIcon.title = "";
        // }, 3000)
    }
});