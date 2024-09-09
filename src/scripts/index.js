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

const onlineDetector = document.querySelector(".online-detector"),
toolTip = document.querySelector(".tooltip-online");

if(navigator.onLine) {
    onlineDetector.style.background = "#2ecc71";
    onlineDetector.style.boxShadow = "0px 0px 60px 5px rgba(46,204,113,1)";

    toolTip.innerHTML = "You're online!";
} else {
    onlineDetector.style.background = "#e74c3c";
    onlineDetector.style.boxShadow = "0px 0px 60px 5px rgba(231,76,60,1)";

    toolTip.innerHTML = "You're not online";
}

onlineDetector.addEventListener("mouseover", () => {
    toolTip.style.opacity = 1;
})

onlineDetector.addEventListener("mouseleave", () => {
    toolTip.style.opacity = 0;
})