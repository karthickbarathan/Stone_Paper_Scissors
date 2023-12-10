// let playGame = confirm("shall we play rock, paper,scissors");
// if(playGame){
//     while(playGame){
//         const playChoice = prompt("Enter rock, paper,scissors");
//         if(playChoice || playChoice === ""){
//             const playOne = playChoice.trim().toLowerCase();
//             if(playOne ==="rock" ||
//             playOne ==="paper" ||
//             playOne ==="scissors"
//             ){
//                 const computerChoice = Math.floor(Math.random()*3);
//                 const rpsArray =["rock","paper","scissors"];
//                 const computer = rpsArray[computerChoice];

//                 const result = 
//                     playOne === computerChoice
//                     ? "Tie Game!"
//                     : playOne ==="rock" && computer==="paper"
//                     ? `playerOne ${playOne}\n Computer ${computer}\n Computer Wins`
//                     : playOne ==="paper" && computer==="scissors"
//                     ? `playerOne ${playOne}\n Computer ${computer}\n Computer Wins`
//                     : playOne ==="scissors" && computer==="rock"
//                     ? `playerOne ${playOne}\n Computer ${computer}\n Computer Wins`
//                     : `playerOne ${playOne}\n Computer ${computer}\n PlayOne Wins`
//                 alert(result);
//                 playGame = confirm("Play Again?");
//                 if(!playGame) alert("Ok ,thanks for playing");
//                 continue;
//             }else{
//                 alert("You didnt enter rock, paper,scissors");
//                 continue;
//             }
//             }else{
//                 alert("I guess you changed your mind. Maybe next time.");
//                 break;
//             }
//         }
//     }
// else{
//     alert("ok, maybe next time");
// }

// using functions

// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };
  
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
  };
  
  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
  };
  
  const evaluatePlayerChoice = (playerChoice) => {
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      return false;
    }
  };
  
  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
  };
  
  const determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };
  
  const displayResult = (result) => {
    alert(result);
  };
  
  const askToPlayAgain = () => {
    return confirm("Play Again?");
  };
  
  const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
  };
  
  initGame();