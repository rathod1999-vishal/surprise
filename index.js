console.log("Happy birthday");

let box = document.getElementById("box");
box.addEventListener("click", wishes);

function wishes() {
  let html = `<div style="transition: width 2s;">
  <h2 style="font-family: Chango; font-size:3rem;">Happy Birthday, Sheetal</h2>
  </div>`;
  box.innerHTML = html;
  song();
}

function song() {
  let music = new Audio("hbd.mp3");
  music.play();
}
