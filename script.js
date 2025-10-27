//MOVIMENTO DEL PERSONAGGIO
const world = document.getElementById("background");
const player = document.getElementById("player");
const coin = document.getElementById("coin");

let x = 250;
let score = 0;
const step = 10;

//camminare e saltare
document.addEventListener("keydown", (event) => {
    //console.log("hai premuto", event.key);

    if (event.key === "ArrowRight"){
        x+= step;
        render();
    }
    if (event.key === "ArrowLeft"){
        x-=step;
        render();
    }
    if (event.key === "ArrowUp"){
        player.style.bottom = "150px";
        setTimeout(() => {
            player.style.bottom = "60px"
        }, 300);
    }
});

//limiti del mondo di gioco
function clampToWorld() {
    const worldRect = world.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();
    const minX = 0;
    const maxX = worldRect.width - playerRect.width;

    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
};

//interazione moneta
//punteggio
const scoreBoard = document.createElement("div");
scoreBoard.id = "scoreBoard";
scoreBoard.style.position = "absolute";
scoreBoard.style.top = "20px";
scoreBoard.style.left = "30px";
scoreBoard.style.color = "white";
scoreBoard.style.fontSize = "24px";
scoreBoard.style.fontFamily = "Pixelify Sans, sans-serif";
world.appendChild(scoreBoard);
updateScore ();

function updateScore() {
    scoreBoard.textContent = "Punteggio: " + score;
};

//collisione con la moneta
function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const coinRect = coin.getBoundingClientRect();

    const overlap =
        playerRect.left < coinRect.right &&
        playerRect.right > coinRect.left &&
        playerRect.top < coinRect.bottom &&
        playerRect.bottom > coinRect.top;

  return overlap;

}
function collectcoin() {
    coin.style.opacity = "0";
    score ++;
    updateScore ();

    setTimeout(() => {
        movecoin();
        coin.style.opacity = "1";
    }, 1000);
}

function movecoin() {
    const worldRect = world.getBoundingClientRect();
    const maxX = worldRect.width - 60; // margine
  const randomX = Math.random() * maxX;
  coin.style.left = randomX + "px";
}


function render() {
    clampToWorld();
    player.style.left = x + "px";
    if (checkCollision()) {
        collectcoin();
    }
}
