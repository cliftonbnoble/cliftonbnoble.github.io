//Listing out global variables used
let playerList = ["curry", "jordan", "olajuwon", "bird", "durant", "magic", "pippen", "shaq", "ampntetokounmpo", "lebron"];
//used for no double presses
let doubleWord = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Stores the random word selected from playerList
let chosenWord = [""];
//Stores letters in word
let letters = [];
//used to place underscores per letter in playerList
let underscoreBlanks = 0;
//hold successful guesses
let successfulGuesses = [];
//hold wrong guesses
let wrongGuesses = [];
//holds link to images
// let image = {
//     'curry': 'assets/images/curry.jpg',
//     'jordan': 'assets/images/jordan.jpg',
//     'olajuwon': 'assets/images/olajuwon.jpg',
//     'bird': 'assets/images/bird.jpg',
//     'durant': 'assets/images/durant.jpg',
//     'magic': 'assets/images/magic.jpg',
//     'pippen': 'assets/images/pippen.jpg',
//     'shaq': 'assets/images/shaq.jpg',
//     'ampntetokounmpo': 'assets/images/ampntetokounmpo.jpg',
//     'lebron': 'assets/images/lebron.jpg',
// }

//counters
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let rightGuess = 0;

//Reset Function
function reset() {
    //Choose player
    chosenWord = playerList[Math.floor(Math.random() * playerList.length)];
    // chosenWord = playerList[Math.floor(Math.random() * playerList.length)];
    //Now to split the chosen player into single characters
    letters = chosenWord.split('');
    //Find the number of blanks
    underscoreBlanks = letters.length;

    //RESET the guesses left, doubleWord, chosenWord, doubleWord, 
    doubleWord = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    successfulGuesses =[];
    wrongGuesses =[];
    guessesLeft = 10;
    rightGuess = 0;
    letterGuesses = 0;

    test=false;
    startGame();
    }

//win or lose function
function winLose()
{
	// When number blanks if filled with right words then you win
	if(rightGuess === underscoreBlanks)
	{
		//Counts Wins 
		wins++;
		//Changes HTML
        document.getElementById('wins').innerHTML = wins;
        //changes picture
        document.getElementById('player-pic').src= 'assets/images/winner.gif';
        
        //plays raphorn
        document.getElementById('rap-horn').play();
		alert('You Win');
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		losses++;
		//Changes HTML
        document.getElementById('losses').innerHTML = losses;
        //changes picture to crying Jordan
        document.getElementById('player-pic').src='assets/images/cry.jpg';
        //plays wrong
        document.getElementById('wrong').play();
		alert('You Lose');
		reset();
	}
}
//Start Game
function startGame() {

    //Chooses word randomly
    chosenWord = playerList[Math.floor(Math.random() * playerList.length)];
    //Splits word into letters
    letters = chosenWord.split('');
    //Find the number of underscores
    underscoreBlanks = letters.length;

    //Reset
    doubleWord = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    successfulGuesses =[];
    wrongGuesses =[];
    guessesLeft = 10;
    rightGuess = 0;
    letterGuesses = 0;
                      
        //Polulate underscores
        for (let i = 0; i < underscoreBlanks; i++) {
            
            successfulGuesses.push('_');
            document.getElementById('playerToGuess').innerHTML = successfulGuesses;
        }
        //Changes the text
        document.getElementById('playerToGuess').innerHTML = successfulGuesses.join(' ');
        document.getElementById('numGuesses').innerHTML = guessesLeft
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('letterGuesses').innerHTML = wrongGuesses;
        //Testing purposes
        console.log(chosenWord);
        console.log(wrongGuesses);
        console.log(underscoreBlanks);
        console.log(successfulGuesses);
}

function compareLetters(userKey) 
{
    //if user key exist in choosen word then perform this function
    if (chosenWord.indexOf(userKey) > -1) 
    {
        //loops for the amount of blanks spaces
        for(let i = 0; i < underscoreBlanks; i++)
        {
        //fills in right index with userKey
        if(letters[i] === userKey)
        {
            rightGuess++;
            successfulGuesses[i] = userKey;
            document.getElementById("playerToGuess").innerHTML = successfulGuesses.join(' ');
        }
    }
    console.log(successfulGuesses);
}
    //wrong guesses
    else 
    {
        wrongGuesses.push(userKey);
        guessesLeft--;
        //changes page
        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('letterGuesses').innerHTML = wrongGuesses;
        //test
        console.log('Wrong Letter = '  + wrongGuesses);
        console.log('Guesses left are ' + guessesLeft);
    }
}
//Initiates Game
startGame();

document.onkeyup = function(event)
{
    test = true;
    let letterGuesses = event.key;
    for(let i = 0; i < doubleWord.length; i++)
    {
        if(letterGuesses === doubleWord[i] && test === true)
        {
            let splicedWord = doubleWord.splice(i,1);
            console.log('Double word is = ' + doubleWord[i])
            console.log('Spliced Word is = ' + splicedWord);

            compareLetters(letterGuesses);
            winLose();
        }
    }
}