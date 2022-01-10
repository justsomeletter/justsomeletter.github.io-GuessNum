"use script";

//What is the secret number we trying to search for?
let secNum = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable coz it's part of so called application state

let highScore = 0;

//Refactoring Functionality
const displayeMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  //typecasting the input from user to string and storing it in a variable guessNum
  let guessNum = Number(document.querySelector(".guess").value);

  //when user inputs nothing
  if (!guessNum) {
    // document.querySelector(".message").textContent = "⛔️ No Number Entered!";
    displayeMessage("⛔️ No Number Entered!");

    //When player wins the game
  } else if (guessNum === secNum) {
    // document.querySelector(".message").textContent = "YaY! Correct guess...🎉";
    displayeMessage("YaY! Correct guess...🎉");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secNum;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessNum !== secNum) {
    // Refactoring the code
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guessNum > secNum ? "📈Too High..!" : "📉Too Low!!...";
      displayeMessage(guessNum > secNum ? "📈Too High..!" : "📉Too Low!!...");
      document.querySelector(".score").textContent = --score;
    } else {
      // document.querySelector(".message").textContent = "👾Game Over!!";
      displayeMessage("👾Game Over!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//when player chooses to high number
// else if (guessNum > secNum) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📈Too High..!";
//     document.querySelector(".score").textContent = --score;
//   } else {
//     document.querySelector(".message").textContent = "👾Game Over!!";
//     document.querySelector(".score").textContent = 0;
//   }

//When Player chooses to low number
// } else if (guessNum < secNum) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📉Too Low!!...";
//     document.querySelector(".score").textContent = --score; // decremeanting score
//   } else {
//     document.querySelector(".message").textContent = "👾 Game Over!!";
//     document.querySelector(".score").textContent = 0;
//   }
// }

// What will happen when we click again button!
document.querySelector(".again").addEventListener("click", function () {
  //setting state variables to initial values.
  score = 20;
  secNum = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing..";
  displayeMessage("Start guessing..");

  document.querySelector(".score").textContent = score;

  //changing the contents of guess box
  document.querySelector(".guess").value = null;

  //resotring the backgrounf color
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
