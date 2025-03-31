/*
Name: Lilly Jarvis (Banuelos)
Date: 03/18/23
*/

function setup()
{
    // BOARD SETUP
    // This is the number returned in the random number function
    var holder;

    // These are variables that hold the random numbers generated from the random number generator function
    var numb1;
    var numb2;
    
    // These variables keep track of the number of pixels from the left the player images are
    var counter = 0;
    var counter2 = 0;

    // CREATES THE FINISH LINE
    // Creates an image element
    var finish = document.createElement('img');
    // Assigns the finish line image to the source
    finish.src = "finishLineBackground.webp";
    // Adds the id for finish
    finish.id = "finish";

    // Appends finish line to the page
    document.body.appendChild(finish);

    // PLAYER CREATION
    // Creates player 1 car
    // Creates an image element
    var play1 = document.createElement('img');
    // Assigns the car1 image to the source
    play1.src = "car1.png";
    // Adds the id for player 1
    play1.id = "play1";

    // Creates player 2 car
    // Creates an image element
    var play2 = document.createElement('img');
    // Assigns the car2 image to the source
    play2.src = "car2.png";
    // Adds the id for player 2
    play2.id = "play2";

    // Appends player cars to the page
    document.body.appendChild(play1);
    document.body.appendChild(play2);

    // SIGN CREATION
    // Creates the sign that can either be green or red, starting out on red
    // Creates an image element
    var sign = document.createElement('img');
    // Assigns the stop sign image to the source
    sign.src = "stopSign.png";
    // Adds the id for sign
    sign.id = 'sign';

    // Appends the stop sign to the page
    document.body.appendChild(sign);

    // Gets the h3 element in the div and stores it in a variable
    var subTitle = document.getElementById('subTitle');

    // CREATES THE WINNER IMAGE
    // Creates an image element
    var playWin = document.createElement('img');
    // Adds the id for playWin
    playWin.id = "playWin";

    // This adds an event listener on the winning image, that when clicked will run the restart function
    playWin.addEventListener('click', restart)

    // Runs after clicking the stop sign and starts the race
    function startRace()
    {
        // Changes the sign img to the go sign
        sign.src = "goSign.png";

        // Calls the checkWin function
        checkWin();
    }

    // This function runs only after the sign has been clicked and the race has started. This moves the players and checks to see if there is a winner. If not, the timer and checkWin functions are run
    function checkWin()
    {
        // Calls the playersMove function
        playersMove()

        // Runs only if player 1 or 2 have reached the edge of the screen (checks for win condition)
        // Runs if player 1 is over 850 pixels from the left of the screen and player 2 is less than that
        if (counter >= 850 && counter2 < 850)
        {
            // Changes the h3 element's text in the body
            subTitle.innerHTML = 'Player 1 Wins! Play Again?';
            // Changes the source of the winning player image to car 1
            playWin.src = 'car1.png';
            // Appends playWin to the body
            document.body.appendChild(playWin);
        }
        // Runs if player 2 is over 850 pixels from the left of the screen and player 1 is less than that
        else if (counter2 >= 850 && counter < 850)
        {
            // Changes the h3 element's text in the body
            subTitle.innerHTML = 'Player 2 Wins! Play Again?';
            // Changes the source of the winning player image to car 2
            playWin.src = 'car2.png';
            // Appends playWin to the body
            document.body.appendChild(playWin);
        }
        // Runs if there is no winner yet and race has already started
        else
        {
            // Creates a timer function that runs once after 1 second, calling the checkWin function at that time
            const myTimer = setTimeout(checkWin, 1000);
        }
    }

    // Adds a click event listener to the stop sign img that calls the startRace function
    sign.addEventListener('click', startRace);

    // Sets up the players initial positions
    play1.style.left = 0;
    play1.style.bottom = '200px';
    play2.style.left = 0;
    play2.style.bottom = 0;

    // Moves the players when called
    function playersMove()
    {
        // Calls the random number generator
        // Stores a random number in a variable
        numb1 = randm();
        // Stores a random number in a variable
        numb2 = randm();
        //console.log(play1.style.left)

        // Adds the 1st random number to the counter variable keeping track of the number of pixels from the left player 1 is
        counter += numb1;
        // Adds the 2nd random number to the counter variable keeping track of the number of pixels from the left player 2 is
        counter2 += numb2;

        //console.log(counter + ' ' + counter2)

        // Changes the number of pixels left the 1st player is depending on the number of counter
        play1.style.left = counter + 'px';
        // Changes the number of pixels left the 2nd player is depending on the number of counter2
        play2.style.left = counter2 + 'px';
    }



    // Random num generator for timer
    function randm()
    {
        // Chooses a random number between 1000 and 5000
        holder = Math.floor(Math.random() * 100) + 50;
        //console.log(holder)
        // Returns the number that holder is
        return holder;
    }
}

// Calls the setup function
setup()

// RESTART FUNCTION
// This function restarts the game after the winning image is clicked
function restart()
{
    // Clears out and resets page by removing the player images, the winning player image, and the sign image
    play1.remove()
    play2.remove()
    playWin.remove();
    sign.remove();

    // This changes the h3 element's text in the body
    subTitle.innerHTML = 'Who will win? Place your bets now!'

    // Calls the setup function
    setup();
}