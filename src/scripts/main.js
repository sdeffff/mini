const date = new Date();

if(date.getHours() >= 18 || date.getHours() <= 8) {
    document.body.style.background = "#636e72";
} else {
    document.body.style.background = "#FAEFE3";
}