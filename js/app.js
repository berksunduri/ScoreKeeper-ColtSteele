const p1 = document.querySelector("#p1");
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#resetButton');
const score = document.querySelector('#score');
const select = document.querySelector('#max');

let p1Score = 0;
let p2Score = 0;
let gametype = parseInt(select.value);

select.addEventListener('change', function() {
    gametype = parseInt(select.value);
});

function updateScore() {
    score.textContent = `${p1Score} to ${p2Score}`;
}

function checkWinner() {
    if (p1Score === gametype) {
        setTimeout(() => alert("Player 1 won!!!!!!"), 0);
        setTimeout(() => resetGame(), 0);
    } else if (p2Score === gametype) {
        setTimeout(() => alert("Player 2 won!!!!!!"), 0);
        setTimeout(() => resetGame(), 0);
    }
}

function handleClick(player) {
    if (p1Score < gametype && p2Score < gametype) {
        if (player === 'p1') {
            p1Score++;
        } else if (player === 'p2') {
            p2Score++;
        }
        updateScore();
        checkWinner();
    }
}

p1.addEventListener('click', function() {
    handleClick('p1');
});

p2.addEventListener('click', function() {
    handleClick('p2');
});

reset.addEventListener('click', function() {
    resetGame();
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    updateScore();
}
