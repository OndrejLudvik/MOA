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
