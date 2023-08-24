// JavaScript to add functionality to our Bubble Game // 

const popUp = document.querySelector('#start-popUp');
const startButton = document.querySelector('#startBtn');
const gameContents = document.querySelector('#panel');
const panelBtm = document.querySelector('#panel-btm');
const bubbleTone = document.querySelector('#bubbleSound');


let countDown;
let gameStarted = false;

let randomNum = 0;
let time = 60;
let score = 0;


function createBubble() {

    let content = "";

    for (let i = 1; i <= 153; i++) {

        let randomNum = Math.floor(Math.random() * 20);

        content += `<div class="bubble">${randomNum}</div>`   // here the value will overwrite the values in content so we will use += to remove overwrite and make it save // 

    }

    // We have written this to actually implement the logic on the webpage
    document.querySelector('#panel-btm').innerHTML = content;
    
}

function getTarget () {
    // create a random Target Number 
    randomNum = Math.floor(Math.random() * 20);

    // implement the number on Webpage
    document.querySelector('#target-value').textContent = randomNum;

}

function timerGame() {

    if (!gameStarted) return;

    countDown = setInterval(function () {

        if (time > 0) 
        {
            time--;
            document.querySelector('#time-count').textContent = time;
        }

        else{
            clearInterval(countDown);
            document.querySelector('#target-value').textContent = 0;
            panelBtm.innerHTML = `<h1 id = "end-popUp">Your Score is ${score}</h1>`
        }
    }, 1000)  
}

function scoreValue () {
    // creating the score section by changing the values
    score += 10;  
    
    // implement the score and display the score on webpage
    document.querySelector('#score-value').textContent = score;
}

 
panelBtm.addEventListener("click", function(event) {
    
    let clickNum = parseInt(event.target.textContent);  

    if (clickNum === randomNum) {
        bubbleTone.play();
        scoreValue();
        createBubble();
        getTarget();
    }
});


startButton.addEventListener('click', () => {
    popUp.style.visibility = 'hidden';
    popUp.style.opacity = '0';
    gameContents.style.display = 'block';
    gameStarted = true;
    timerGame();
});


timerGame();
createBubble();
getTarget();

