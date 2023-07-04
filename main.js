let numAdv = document.querySelector(".num-adv");
let quote = document.querySelector(".q");
let btn = document.querySelector(".btn");
let rotate = document.querySelector(".rotate");
function data() {
  let url = "https://api.adviceslip.com/advice";
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();
  quote.innerHTML = "";
  numAdv.innerHTML = "";
  rotate.style.cssText = "animation: rotate 0.9s infinite linear;";
  req.onreadystatechange = function () {
    setTimeout(function () {
      if (req.readyState === 4 && req.status === 200) {
        let jsData = JSON.parse(req.responseText);
        quote.innerHTML = jsData.slip["advice"];
        numAdv.innerHTML = jsData.slip["id"];
        rotate.style.cssText = "animation: ;";
      }
    }, 1000);
  };
}
btn.addEventListener("click", data);
