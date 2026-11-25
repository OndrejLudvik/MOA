if("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js")
      .then(registration => {
        console.log("Sw registred");
      })
      .catch(error => {
        console.log("Sw registration failed: ", error);
      });
  });
}


let guessingNumber = null;
let gameFinished;
let tryCount = 0;

function Guess() {

  let guess = document.getElementById("NumberInput").value;

  console.log(guessingNumber)
  if (guessingNumber === null || gameFinished === true) {
    guessingNumber = Math.floor(Math.random() * 50);
    gameFinished = false;
    tryCount = 0;
  }
  if (guess == guessingNumber){
    gameFinished = true;
    tryCount++;
    document.getElementById("InformationOutput").innerText =
      "Výborně, uhold jsi tajné číslo: " + guessingNumber + "\n" + "Potřeboval jsi: " + tryCount + " pokusů";
    console.log("Vyhra")
  }
  if (guess > guessingNumber){
    tryCount++;
    document.getElementById("InformationOutput").innerText =
      "Méňe!"
    console.log("Vysoke cislo")
  }
  if (guess < guessingNumber){
    tryCount++;
    document.getElementById("InformationOutput").innerText =
      "Více!"
    console.log("Nizke cislo")
  }
}
