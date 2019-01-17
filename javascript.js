// array of quote objects

var labowskiQuotes = [
    {
        quote: "Obviously you’re not a golfer",
        source: "The Dude",
    },
    {
        quote: "Nice marmot",
        source: "The Dude",
    },
    {
        quote: "Mind if I do a J?",
        source: "The Dude",
    },
    {
        quote: "This is not ‘Nam. This is bowling. There are rules.",
        source: "Walter",
    },
    {
        quote: "You know, a lotta ins, a lotta outs, lotta what-have-yous.",
        source: "The Dude",
    },
    {
        quote: "This aggression will not stand, man",
        source: "The Dude",
    },
    {
        quote: "Eight-year-olds, Dude.",
        source: "Walter Solcheck",
    },
    {
        quote: "Yeah, well, you know, that’s just, like, your opinion, man.",
        source: "The Dude"
    }
];

// Getting my random quote
function getQuote(quotes) {
    var randQuote = Math.floor(Math.random() * quotes.length);
    console.log(randQuote);
    return quotes[randQuote];
}

console.log(getQuote(labowskiQuotes));