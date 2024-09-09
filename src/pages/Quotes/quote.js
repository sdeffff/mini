const quotes = {
        "Mahatma Gandhi": "“You must be the change you wish to see in the world.”",
        "Mother Teresa": "“Spread love everywhere you go. Let no one ever come to you without leaving happier.”",
        "Franklin D. Roosevelt": "“The only thing we have to fear is fear itself.”",
        "Martin Luther King Jr.": "“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.”",
        "Eleanor Roosevelt": "“Do one thing every day that scares you.”",
        "Benjamin Franklin": "“Well done is better than well said.”",
        "Helen Keller": "“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”",
        "Aristotle": "“It is during our darkest moments that we must focus to see the light.”",
        "Ralph Waldo Emerson": "“Do not go where the path may lead; go inste,ad where there is no path and leave a trail.”",
        "Oscar Wilde": "“Be yourself; everyone else is already taken.”",
        "Abraham Lincoln": "“In the end, it's not the years in your life that count. It's the life in your years.”",
        "Ralph Waldo Emerson": "“Life is a succession of lessons which must be lived to be understood.”",
        "Maya Angelou": "“You will face many defeats in life, but never let yourself be defeated.”",
        "Babe Ruth": "“Never let the fear of striking out keep you from playing the game.”",
        "Tony Robbins": "“The only impossible journey is the one you never begin.”",
        "Albert Einstein": "“Only a life lived for others is a life worthwhile.”",
        "Dalai Lama": "“The purpose of our lives is to be happy.”",
        "John Lennon": "“You may say I‘m a dreamer, but I’m not the only one. I hope someday you'll join us. And the world will live as one.”",
        "Mae West": "“You only live once, but if you do it right, once is enough.”",
        "Confucius": "“Life is really simple, but we insist on making it complicated.”",
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