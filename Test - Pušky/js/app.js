if("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js")
      .then(registration => {
        console.log("SW registered");
      })
      .error(error => {
        console.log("SW registration failed: ", error);
      });
  });
}

const prepinacScope = document.getElementById("nerfSwitch");
const prepinacBarrel = document.getElementById("nerfSwitch2");
const obrazek = document.getElementById("nerfImg");

prepinacScope.addEventListener("change", prepniObrazek);
prepinacBarrel.addEventListener("change", prepniObrazek);

function prepniObrazek(event) {
  if(!prepinacScope.checked && !prepinacBarrel.checked){
    obrazek.src = "img/LongStrike.png";
  }
  else if(prepinacScope.checked && prepinacBarrel.checked){
    obrazek.src = "img/LongStrikeWithScopeAndBarrel.png";
  }
  else if (prepinacScope.checked){
    obrazek.src = "img/LongStrikeWithScope.png";
  }
  else if (prepinacBarrel.checked){
    obrazek.src = "img/LongStrikeWithBarrel.png";
  }
}
