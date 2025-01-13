var arrOfQuotes = [
  {
    author: "--Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "--Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    author: "--Martin Luther King",
    quote: "“Darkness cannot drive out darkness: only light can do that.”",
  },
  {
    author: "--Oscar Wilde",
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
  },
  {
    author: "--Dr. Seuss",
    quote:
      "“Sometimes the questions are complicated and the answers are simple.”",
  },
  {
    author: "--Albert Einstein",
    quote:
      "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
  },
];
var preRandom;
function Quote() {
  var random = Math.round(Math.random() * (arrOfQuotes.length - 1));
  if (random != preRandom) {
    document.getElementById("quote").innerHTML = arrOfQuotes[random].quote;
    document.getElementById("author").innerHTML = arrOfQuotes[random].author;
    preRandom = random;
  } else {
    Quote();
  }
}
