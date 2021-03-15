const qoutes = [
  {
    name:"Nelson Mandela", 
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  {
    name:"Walt Disney",
    quote:"The way to get started is to quit talking and begin doing."
  },
  {
    name:"Steve Jobs",
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
  },
  {
    name:"Eleanor Roosevelt",
    quote:"If life were predictable it would cease to be life, and be without flavor."
  },
  {
    name:"Mother Teresa",
    quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier."
  },
  {
    name:"Benjamin Franklin",
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn."
  },
  {
    name:"Oscar Wilde",
    quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not."
  },
  {
    name:"Albert Einstein",
    quote:"Only a life lived for others is a life worthwhile."
  },
  {
    name:"John Lennon",
    quote:"Life is what happens when you're busy making other plans."
  },
  {
    name:"Bob Marley",
    quote:"Love the life you live. Live the life you love."
  },
];


const quoteBtn = document.getElementById("quoteBtn");
const author = document.getElementById("quoteAuthor");
const quote = document.getElementById("quote");

quoteBtn.addEventListener("click", makeQuote);

function makeQuote() {
  let random = Math.floor(Math.random()* qoutes.length);

  author.innerHTML = qoutes[random].name;
  quote.innerHTML = qoutes[random].quote;
};