const grid = document.getElementById("grid");
const overflow = document.querySelector(".overflow");

const date = new Date();

const createRandomColor = () => {
    let col = "#";

    let chars = "abcdefABCDEF1234567890";

    for(let i = 0; i < 6; i++) {
        col += chars[Math.floor(Math.random() * chars.length)];
    }

    return col;
}

for(let i = 0; i < grid.children.length; i++) {
    let currCol = createRandomColor();

    grid.children[i].style.background = currCol;

    grid.children[i].addEventListener("click", () => {
        navigator.clipboard.writeText(currCol);

        if(date.getHours() >= 18) {
            overflow.style.background = "#2c3e50";

            overflow.children[0].children[1].style.color = "#bdc3c7";
        } else {
            overflow.style.background = "#bdc3c7";

            overflow.children[0].children[1].style.color = "#2c3e50";
        }

        let eff = new Audio("../../music/success.wav");
        eff.volume = 0.45;

        eff.play();

        overflow.style.opacity = 1;
        overflow.style.visibility = "visible";

        setTimeout(() => {
            overflow.style.opacity = 0;
            overflow.style.visibility = "hidden";
        }, 1000);
    })
}