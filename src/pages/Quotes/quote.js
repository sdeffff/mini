const quotes = {
        "Mahatma Gandhi": "“You must be the change you wish to see in the world.”",
        "Mother Teresa": "“Spread love everywhere you go. Let no one ever come to you without leaving happier.”",
        "Franklin D. Roosevelt": "“The only thing we have to fear is fear itself.”",
        "Martin Luther King Jr.": "“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.”",
        "Eleanor Roosevelt": "“Do one thing every day that scares you.”",
        "Benjamin Franklin": "“Well done is better than well said.”",
        "Helen Keller": "“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”",
        "Aristotle": "“It is during our darkest moments that we must focus to see the light.”",
        "Ralph Waldo Emerson": "“Do not go where the path may lead; go instead where there is no path and leave a trail.”",
        "Oscar Wilde": "“Be yourself; everyone else is already taken.”"
}

const getRandomQuote = (data, txt, autor, img) => {
    let randomNum = Math.floor(Math.random() * Object.keys(data).length);

    txt.innerText = Object.values(data)[randomNum];
    autor.innerText = `- ${Object.keys(data)[randomNum]}`;
    img.src = `../../images/quotes-images/${Object.keys(data)[randomNum]}.jpg`;
} 

const quoteTxt = document.querySelector(".quote-txt"),
quoteAutor = document.querySelector(".quote-autor"),
generate = document.querySelector(".generate-quote"),
autorImg = document.querySelector(".autor-img");

generate.addEventListener("click", () => {
    getRandomQuote(quotes, quoteTxt, quoteAutor, autorImg);
})