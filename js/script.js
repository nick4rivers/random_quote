/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var programmerQuotes = [
  { quote: "Computers are useless.  They can only give you answers.", source: "Pablo Picasso" },
  { quote: "Computers are like bikinis. They save people a lot of guesswork.", source: "Sam Ewing" },
  { quote: "They have computers, and they may have other weapons of mass destruction.", source: "Janet Reno" },
  { quote: "That’s what’s cool about working with computers.  They don’t argue, they remember everything, and they don’t drink all your beer.", source: "Paul Leary" },
  { quote: "If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.", source: "Robert X. Cringely" },
  { quote: "Computers are getting smarter all the time.  Scientists tell us that soon they will be able to talk to us.  (And by ‘they’, I mean ‘computers’.  I doubt scientists will ever be able to talk to us.)", source: "Dave Barr" },
  { quote: "I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.", source: "Larry DeLuca" },
  { quote: "The question of whether computers can think is like the question of whether submarines can swim.", source: "Edsger W. Dijkstr" },
  { quote: "It’s ridiculous to live 100 years and only be able to remember 30 million bytes.  You know, less than a compact disc.  The human condition is really becoming more obsolete every minute.", source: "Marvin Minsky" },
  { quote: "The city’s central computer told you?  R2D2, you know better than to trust a strange computer!", source: "C3PO" },
  { quote: "Never trust a computer you can’t throw out a window.", source: "Steve Wozniak" },
  { quote: "Hardware: The parts of a computer system that can be kicked.", source: "Jeff Pesis" },
  { quote: "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", source: "Alan Kay" },
  { quote: "I’ve finally learned what ‘upward compatible’ means.  It means we get to keep all our old mistakes.", source: "Dennie van Tassel" },
  { quote: "There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence.", source: "Jeremy S. Anderso" },
  { quote: "19 Jan 2038 at 3:14:07 AM", source: "End of the word according to Unix–2^32 seconds after January 1, 197" },
  { quote: "Every operating system out there is about equal… We all suck.", source: "Microsoft senior vice president Brian Valentine describing the state of the art in OS security" },
  { quote: "Microsoft has a new version out, Windows XP, which according to everybody is the ‘most reliable Windows ever.‘  To me, this is like saying that asparagus is ‘the most articulate vegetable ever.‘ ", source: "Dave Barr" },
  { quote: "The Internet?  Is that thing still around?”  ", source: "Homer Simpso" },
  { quote: "The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.", source: "Nytwin" },
  { quote: "Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare.", source: "Blair Houghto" },
  { quote: "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.", source: "Henry Petroski" },
  { quote: "True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it.", source: "Timm Marti" },
  { quote: "It has been said that the great scientific disciplines are examples of giants standing on the shoulders of other giants.  It has also been said that the software industry is an example of midgets standing on the toes of other midgets.", source: "Alan Coope" },
  { quote: "It is not about bits, bytes and protocols, but profits, losses and margins.", source: "Lou Gerstner" },
  { quote: "We are Microsoft.  Resistance Is Futile.  You Will Be Assimilated.", source: "Bumper sticke" },
  { quote: "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.", source: "Mark Gibbs" },
  { quote: "The bulk of all patents are crap.  Spending time reading them is stupid.  It’s up to the patent owner to do so, and to enforce them.", source: "Linus Torvald" },
  { quote: "Controlling complexity is the essence of computer programming.", source: "Brian Kernigan" },
  { quote: "Complexity kills.  It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration.", source: "Ray Ozzie" },
  { quote: "There are two ways of constructing a software design.  One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.", source: "C.A.R. Hoar" },
  { quote: "The function of good software is to make the complex appear to be simple.”", source: "Grady Booc" },
  { quote: "Just remember: you’re not a ‘dummy,’ no matter what those computer books claim.  The real dummies are the people who–though technically expert–couldn’t design hardware and software that’s usable by normal consumers if their lives depended upon it.", source: "Walter Mossberg" },
  { quote: "Software suppliers are trying to make their software packages more ‘user-friendly’…  Their best approach so far has been to take all the old brochures and stamp the words ‘user-friendly’ on the cover.", source: "Bill Gate" },
  { quote: "There’s an old story about the person who wished his computer were as easy to use as his telephone.  That wish has come true, since I no longer know how to use my telephone.", source: "Bjarne Stroustrup" },
  { quote: "Any fool can use a computer.  Many do.", source: "Ted Nelson" },
  { quote: "There are only two industries that refer to their customers as ‘users’.", source: "Edward Tufte" },
  { quote: "Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots.  So far the Universe is winning.", source: "Rich Cook" },
  { quote: "Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris.", source: "Larry Wall" },
  { quote: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", source: "Seymour Cray" },
  { quote: "That’s the thing about people who think they hate computers.  What they really hate is lousy programmers.", source: "Larry Niven" },
  { quote: "For a long time it puzzled me how something so expensive, so leading edge, could be so useless.  And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things.  They are, in short, a perfect match.", source: "Bill Bryso" },
  { quote: "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", source: "Eric Raymond" },
  { quote: "A programmer is a person who passes as an exacting expert on the basis of being able to turn out, after innumerable punching, an infinite series of incomprehensive answers calculated with micrometric precisions from vague assumptions based on debatable figures taken from inconclusive documents and carried out on instruments of problematical accuracy by persons of dubious reliability and questionable mentality for the avowed purpose of annoying and confounding a hopelessly defenseless department that was unfortunate enough to ask for the information in the first place.", source: "IEEE Grid newsmagazine" },
  { quote: "A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year.  IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.", source: "Peter Seebach" },
  { quote: "The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.", source: "Randall E. Stros" },
  { quote: "A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.", source: "Bill Gates" },
  { quote: "Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job.”", source: "Mosher’s Law of Software Engineerin" },
  { quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", source: "Bill Gate" },
  { quote: "Writing code has a place in the human hierarchy worth somewhere above grave robbing and beneath managing.", source: "Gerald Weinberg" },
  { quote: "First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack.", source: "George Carrette" },
  { quote: "First, solve the problem. Then, write the code.", source: "John Johnson" },
  { quote: "Optimism is an occupational hazard of programming; feedback is the treatment.", source: "Kent Beck" },
  { quote: "To iterate is human, to recurse divine.", source: "L. Peter Deutsch" },
  { quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.", source: "Anonymous" },
  { quote: "Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration.", source: "Stan Kelly-Bootle" },
  { quote: "There are only two kinds of programming languages: those people always bitch about and those nobody uses.", source: "Bjarne Stroustrup" },
  { quote: "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals.", source: "Jon Ribben" },
  { quote: "The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.", source: "E.W. Dijkstr" },
  { quote: "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC.  As potential programmers, they are mentally mutilated beyond hope of regeneration.", source: "E. W. Dijkstr" },
  { quote: "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.", source: "Okta" },
  { quote: "There is no programming language–no matter how structured–that will prevent programmers from making bad programs.", source: "Larry Flon" },
  { quote: "Computer language design is just like a stroll in the park.  Jurassic Park, that is.", source: "Larry Wall" },
  { quote: "Fifty years of programming language research, and we end up with C++?", source: "Richard A. O’Keef" },
  { quote: "Writing in C or C++ is like running a chain saw with all the safety guards removed.", source: "Bob Gra" },
  { quote: "In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.", source: "Bjarne Stroustru" },
  { quote: "C++ : Where friends have access to your private members.", source: "Gavin Russell Bake" },
  { quote: "One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.", source: "Robert Firth" },
  { quote: "Java is, in many ways, C++–.", source: "Michael Feldma" },
  { quote: "Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.", source: "Alann" },
  { quote: "Fine, Java MIGHT be a good example of what a programming language should be like.  But Java applications are good examples of what applications SHOULDN’T be like.", source: "pixade" },
  { quote: "If Java had true garbage collection, most programs would delete themselves upon execution.", source: "Robert Sewell" },
  { quote: "Software is like sex: It’s better when it’s free.", source: "Linus Torvalds" },
  { quote: "The only people who have anything to fear from free software are those whose products are worth even less.", source: "David Emer" },
  { quote: "Good code is its own best documentation.", source: "Steve McConnel" },
  { quote: "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.", source: "Eagleson’s Law" },
  { quote: "The first 90% of the code accounts for the first 90% of the development time.  The remaining 10% of the code accounts for the other 90% of the development time.", source: "Tom Cargill" },
  { quote: "Good programmers use their brains, but good guidelines save us having to think out every case.", source: "Francis Glassborow" },
  { quote: "In software, we rarely have meaningful requirements.  Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.", source: "Jeff Atwoo" },
  { quote: "Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.", source: "Bill Clinton" },
  { quote: "You can’t have great software without a great team, and most software teams behave like dysfunctional families.", source: "Jim McCarth" },
  { quote: "As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.", source: "Maurice Wilkes discovers debugging, 1949" },
  { quote: "Debugging is twice as hard as writing the code in the first place.  Therefore, if you write the code as cleverly as possible, you are–by definition–not smart enough to debug it.", source: "Brian Kernigha" },
  { quote: "If debugging is the process of removing bugs, then programming must be the process of putting them in.", source: "Edsger W. Dijkstra" },
  { quote: "I don’t care if it works on your machine!  We are not shipping your machine!", source: "Vidiu Plato" },
  { quote: "Programming is like sex: one mistake and you’re providing support for a lifetime.", source: "Michael Sin" },
  { quote: "There are two ways to write error-free programs; only the third one works.", source: "Alan J. Perli" },
  { quote: "You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time.", source: "Bertrand Meyer" },
  { quote: "If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’ ", source: "Mark Minasi" },
  { quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", source: "Martin Goldin" },
  { quote: "To err is human, but to really foul things up you need a computer.", source: "Paul Ehrlich" },
  { quote: "A computer lets you make more mistakes faster than any invention in human history–with the possible exceptions of handguns and tequila.", source: "Mitch Radcliffe" },
  { quote: "Everything that can be invented has been invented.", source: "Charles H. Duell, Commissioner, U.S. Office of Patents, 1899" },
  { quote: "I think there’s a world market for about 5 computers.", source: "Thomas J. Watson, Chairman of the Board, IBM, circa 1944" },
  { quote: "It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.” ", source: "John Von Neumann, circa 1944" },
  { quote: "But what is it good for?", source: "Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1965" },
  { quote: "There is no reason for any individual to have a computer in his home.", source: "Ken Olson, President, Digital Equipment Corporation, 1972" },
  { quote: "640K ought to be enough for anybody.", source: "Bill Gates, 1981" },
  { quote: "Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need.", source: "Microsoft, on the development of Windows NT, 1999" },
  { quote: "We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.", source: "Andy Pierso" },
  { quote: "If it keeps up, man will atrophy all his limbs but the push-button finger.", source: "Frank Lloyd Wright" }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(quotes) {
    var randQuote = Math.floor(Math.random() * quotes.length);
    console.log(randQuote);
    return quotes[randQuote];
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var randomQuote = getRandomQuote(programmerQuotes);
  var theQuote = randomQuote.quote;
  var theSource = randomQuote.quote;
  var htmlString = '<p class = "quote">' + theQuote + '</p>';
  document.getElementById("quote-box").innerHTML = htmlString;
  console.log(htmlString);
}

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
