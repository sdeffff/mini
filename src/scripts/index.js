const content = document.getElementById("content");

for(let i = 0; i < content.children.length; i++) {
    switch(i % 3) {
        case 1 : {
            content.children[i].style.background = "#D2EAF4";

            break;
        }

        case 2: {
            content.children[i].style.background = "#EFC48F";

            break;
        }

        case 0: {
            content.children[i].style.background = "#EECFCD";

            break;
        }
    }
}

const onlineDetector = document.querySelector(".online-detector");

if(navigator.onLine) {
    onlineDetector.style.background = "#2ecc71"
    onlineDetector.style.boxShadow = "0px 0px 60px 5px rgba(46,204,113,1)"

    onlineDetector.addEventListener("mouseover", () => {
        onlineDetector.style.boxShadow = "0px 0px 50px 5px rgba(46,204,113,1)"
    })

    onlineDetector.addEventListener("mouseout", () => {
        onlineDetector.style.boxShadow = "0px 0px 60px 5px rgba(46,204,113,1)"
    })
} else {
    onlineDetector.style.background = "#e74c3c"
    onlineDetector.style.boxShadow = "0px 0px 60px 5px rgba(231,76,60,1)";

    onlineDetector.addEventListener("mouseover", () => {
        onlineDetector.style.boxShadow = "0px 0px 50px 5px rgba(231,76,60,1)"
    })

    onlineDetector.addEventListener("mouseout", () => {
        onlineDetector.style.boxShadow = "0px 0px 50px 5px rgba(231,76,60,1)"
    })
}