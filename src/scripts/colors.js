const grid = document.getElementById("grid");
const overflow = document.querySelector(".overflow");

const date = new Date();

const createRandomColor = () => {
    let col = "#";

    let chars = "abcdefABCDEF1234567890";

    for(let j = 0; j < 6; j++) {
        col += chars[Math.floor(Math.random() * chars.length)];
    }

    return col;
}

const rbgToHex = (r, g, b) => {
    const toHex = (component) => {
        const hex = component.toString(16);
    
        return hex.length === 1 ? '0' + hex : hex;
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const rbgToCols = (string) => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    string = string.split(',');

    for(let i = 0; i < string.length; i++) {
        string[i] = string[i].split('');
    
        string[i] = string[i].filter((el) => {
            return nums.includes(parseInt(el));
        })
    
        string[i] = string[i].join('');
    }

    return string;
}

for(let i = 0; i < grid.children.length; i++) {
    let currCol = createRandomColor();

    grid.children[i].style.background = currCol;

    grid.children[i].addEventListener("click", () => {
        navigator.clipboard.writeText(currCol);

        console.log(date.getHours());

        if(date.getHours() >= 18) {
            overflow.style.background = "#2c3e50";

            overflow.children[0].children[1].style.color = "#bdc3c7";
        } else {
            overflow.style.background = "#bdc3c7";

            overflow.children[0].children[1].style.color = "#2c3e50";
        }

        overflow.style.opacity = 1;
        overflow.style.visibility = "visible";

        setTimeout(() => {
            overflow.style.opacity = 0;
            overflow.style.visibility = "hidden";
        }, 1000);
    })
}