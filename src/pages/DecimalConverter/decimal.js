const num = document.getElementById('num'),
type = document.getElementById('numberSys'),
res = document.getElementById('res');

window.addEventListener('keydown', (e) => {
    if(e.key === "Enter" && num.value != false) {
        let index = type.options.selectedIndex;

        let numberType = type.options[index].innerText;


        switch(numberType) {
            case 'Binary': {
                res.style.color = "#2C3A47";
                res.innerText = parseInt(num.value, 10).toString(2);

                break;
            }

            case 'Hexadecimal': {
                res.style.color = "#2C3A47";
                res.innerText = parseInt(num.value, 10).toString(16);

                break;
            }

            case 'Octal': {
                res.style.color = "#2C3A47";
                res.innerText = parseInt(num.value, 10).toString(8);

                break;
            }

            case 'Roman': {

                const intToRoman = (number) => {
                    const obj = {
                        M: 1000,
                        CM: 900,
                        D: 500,
                        CD: 400,
                        C: 100,
                        XC: 90,
                        L: 50,
                        XL: 40,
                        X: 10,
                        IX: 9,
                        V: 5,
                        IV: 4,
                        I: 1,
                    }
                    
                    return Object 
                        .entries(obj)
                        .reduce(
                            (result, [letter, n]) => {
                                result += letter
                                    .repeat(
                                        Math.floor(number / n)
                                    );
                                number %= n;
                                return result;
                            }, '');
                }

                res.style.color = "#2C3A47";

                res.innerText = intToRoman(parseInt(num.value, 10));

                break;
            }
            
            default: {
                res.style.color = "#c0392b";
                res.innerText = "Choose correct option please"
                break;
            }
            }

            console.log(numberType)
        } 
})