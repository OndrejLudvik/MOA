if("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(sw.js)
      .then(registration => {
        console.log("Sw registred");
      })
      .error(error => {
        console.log("Sw registration failed: ", error);
      });
  });
}

const prepinac = document.getElementById("marineSwitch");
const obrazek = document.getElementById("marineImg");

prepinac.addEventListener("change", prepniObrazek);

function prepniObrazek(event) {
  if(prepinac.checked){
    obrazek.src = "img/kiss-hehe.gif"+"?a="+Math.random();
  }else {
    obrazek.src = "img/Kiss.png";
  }
}
