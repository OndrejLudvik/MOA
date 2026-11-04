if("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(sw.js)
      .then(registration => {
        console.log("Sw registred");
      })
      .catch(error => {
        console.log("Sw registration failed: ", error);
      });
  });
}
let lastPick = null;
let PCPick;

function Calc () {
  if (lastPick === null)
  {
    let randomPick = Math.floor(Math.random() * 3)
    if (randomPick === 0){
        document.getElementById("PC").innerText = "Kamen";
        PCPick = 0;
    }
    if (randomPick === 1){
      document.getElementById("PC").innerText = "Nuzky";
      PCPick = 1;
    }
    if (randomPick === 2){
      document.getElementById("PC").innerText = "Papir";
      PCPick = 2;
    }
  }
  else {
    if (lastPick === 0){
      document.getElementById("PC").innerText = "Papir";
    }
    if (lastPick === 1){
      document.getElementById("PC").innerText = "Kamen";
    }
    if (lastPick === 2){
      document.getElementById("PC").innerText = "Nuzky";
    }
  }

  if (document.getElementById("KamenCheck").checked) {
    lastPick = 0;
  }
  if (document.getElementById("NuzkyCheck").checked) {
    lastPick = 1;
  }
  if (document.getElementById("PapirCheck").checked) {
    lastPick = 2;
  }

  if (lastPick === PCPick)
  {
    document.getElementById("Vysledek").innerText = "Draw";
  }
  if (lastPick === 0 || PCPick === 2){
    document.getElementById("Vysledek").innerText = "Prohra";
  } else if (lastPick === 0 || PCPick === 1){
    document.getElementById("Vysledek").innerText = "Vyhra";
  } else if (lastPick === 1 || PCPick === 0){
    document.getElementById("Vysledek").innerText = "Prohra";
  } else if (lastPick === 1 || PCPick === 2){
    document.getElementById("Vysledek").innerText = "Vyhra";
  } else if (lastPick === 2 || PCPick === 0){
    document.getElementById("Vysledek").innerText = "Vyhra";
  } else if (lastPick === 2 || PCPick === 1){
    document.getElementById("Vysledek").innerText = "Prohra";
  }

}
