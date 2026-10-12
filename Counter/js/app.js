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

let count = 0;
const MAX_count = 10;
const MIN_count = -10;

function add() {
  count++;
  document.getElementById("counter_span").innerText = count;
}

function sub() {
  count--;
  document.getElementById("counter_span").innerText = count;
}

function reset() {
  count = 0;
  document.getElementById("counter_span").innerText = count;
}


function  UpravCounter(operation){
  let pom = 1;
  if (document.getElementById("double_check").checked){
    pom = 2;
  }


  switch (operation) {
    case "add":
      if (count < MAX_count){
        count += pom;
      }
      break;
    case "sub":
      if (count > MIN_count){
        count -= pom;
      }
      break;
    case "reset":
      count = 0;
      break;
  }

  document.getElementById("counter_span").innerText = count;
}

