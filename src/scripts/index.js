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