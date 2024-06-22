const content = document.getElementById("content"),
launchBtn = document.querySelector(".launch");

launchBtn.addEventListener("click", () => {
    for(let i = 0; i < content.children.length; i++) {
        if(content.children[i].children[1].style.animationName === "move") {
            content.children[i].children[1].style.animationName = ""
            setTimeout(() => {
                content.children[i].children[1].style.animationName = "move";
            }, 0)
        } else {
            content.children[i].children[1].style.animationName = "move";
        }
    }
})