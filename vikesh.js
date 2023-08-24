let start = 40;
let score = 0;
let yooo = 0;
let gameActive = true;
var audio = new Audio("bubble-bursting-popping-14423-[AudioTrimmer.com]-[AudioTrimmer.com].mp3");
var audio1 = new Audio("error-126627-[AudioTrimmer.com].mp3");
document.querySelector(`#binner`).innerHTML = `
    <div style="width: 1300px; height: 500px; border: 5px solid #50C878; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 50px; font-weight: 800; color: #4CBB17; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; font-family: 'Courier New', monospace;">
        <div style="margin-top: -15px; text-align: center; font-weight: 800;"><u>Welcome to the Bubble Game!</u></div>

        <span style="font-size: 30px; font-family: 'Roboto Mono', monospace; margin-top: 10px; text-align: left;"> &#8226; You have ${start} seconds to play the game.</span>

        <span style="font-size: 30px; font-family: 'Roboto Mono', monospace; margin-top: 20px; margin-left: 30px; text-align: left;"> &#8226; Clicking on a bubble with the correct number will earn you 100 points.</span>

        <span style="font-size: 30px; font-family: 'Roboto Mono', monospace; margin-top: 20px; margin-left: 30px; text-align: left;"> &#8226; Making a wrong click on a bubble will result in a deduction of 10 points.</span>

        <span style="font-size: 30px; font-family: 'Roboto Mono', monospace; margin-top: 20px; margin-left: 30px; text-align: left;"> &#8226; Try to score as many points as you can within the given time limit.</span>

        <button id="startButton" style="margin-top: 30px; margin-left: 30px; background-color: #4CAF50; color: white; padding: 20px 40px; border: none; border-radius: 5px; font-size: 30px;  cursor: pointer;"  onclick="startGame()">Start Game</button>
    </div>
`;





function newNumber(){
    yooo = Math.floor(Math.random()*10)
    document.querySelector(`#newNumber`).textContent = yooo;
}

function bubbleMaker(){
    let num = "";
    for(let i = 1; i<=119 ; i++){
        let ran= Math.floor(Math.random()*10)
        num += `<div class="bubble">${ran}</div>`
    }
    document.querySelector(`#binner`).innerHTML = num;
}

function Timmer() {
    var Timeskip = setInterval(function () {
        if (start > 0) {
            start--;
            document.querySelector("#Timmer").textContent = start;
        } else {
            clearInterval(Timeskip);
            gameActive=false;
            // Center the content within #binner
            document.querySelector(`#binner`).style.display = 'flex';
            document.querySelector(`#binner`).style.alignItems = 'center';
            document.querySelector(`#binner`).style.justifyContent = 'center';

            // Change the innerHTML of the #binner element
            document.querySelector(`#binner`).innerHTML = `
                <div style="width: 800px; height: 400px; border: 5px solid #50C878; border-radius: 10px; display: flex; flex-direction: column; align-items: center; font-size: 60px; font-weight: 800; color: #4CBB17; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; font-family: 'Courier New', monospace;">
                    <div style="margin-top: 20px;">&#x2B50; Times Up &#x2B50;</div>
                    <span style="font-size: 30px; font-family: 'Roboto Mono', monospace; margin-top: 50px; margin-bottom: 50px;">Congratulations your score is :- ${score}</span>
                    <span style="font-size: 30px; font-family: Orbitron, sans-serif;">Thanks for Playing :&#41;</span>
                    <button id="playAgainButton" style="margin-top: 15px; margin-left: 30px; background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 30px;" onclick="location.reload();">Play Again</button>
                </div>`;
        }
    }, 1000);
}

function Iscore(points){
    score += points;
    document.querySelector(`#Increase`).textContent = score;
}

function startGame() {
    start = 40;
    // Hide the initial message
    document.querySelector("#binner").innerHTML = '';

    // Start the timer and other game functions
    Timmer();
    bubbleMaker();
    newNumber();
}

document.querySelector(`#binner`).addEventListener("click", function(event) {
    if (event.target.id === "startButton") {
        // Clicked on the "Start Game" button
        startGame();
    } else {
        // Clicked on a bubble
        let click = Number(event.target.textContent);
        if (gameActive) {
            if (click === yooo) {
                Iscore(100);
                bubbleMaker();
                newNumber();
                audio.play();
            } else {
                Iscore(-10);
                bubbleMaker();
                newNumber();
                audio1.play();
            }
        }
    }
});




// });