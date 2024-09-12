const result = document.getElementById("pwd-res").children[0],
copyBtn = document.getElementById("pwd-res").children[1],
pwdLength = document.querySelector(".pwd-length").children[1],
numbers = document.getElementById("numbers"),
uppercased = document.getElementById("uppercased"),
symbols = document.getElementById("symbols"),
generateBtn = document.getElementById("generate");

const generatePwd = () => {
    if(parseInt(pwdLength.value, 10) < 8) {
        alert("Minimum size of password is: 8");
        return;
    } 

    if(parseInt(pwdLength.value, 10) > 24) {
        alert("Maximum size of password is: 24");
        return;
    }

    let str = "qwertyuiopasdfghjklzxcvbnm";

    if(numbers.checked) str += "1234567890";
    if(uppercased.checked) str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    if(symbols.checked) str += "!?{}[]-_=+";

    let res = "";

    for(let i = 0; i < parseInt(pwdLength.value, 10); i++) {
        res += str[Math.floor(Math.random() * str.length)];
    }

    result.value = res;
}

generateBtn.addEventListener("click", generatePwd);

copyBtn.addEventListener("click", () => {
    if(result.value !== '') {
        navigator.clipboard.writeText(result.value);

        alert("Password copied to clipboard!");
    }
})