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


function sayHello(){
  if(document.getElementById("Hello").innerText === "Hello World!") {
    document.getElementById("Hello").innerText = "Ahoj Světe!";
  } else{
    document.getElementById("Hello").innerText = "Hello World!";
  }
}
