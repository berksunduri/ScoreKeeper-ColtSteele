const p1 = document.querySelector("#p1");
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#resetButton');
const score = document.querySelector('#score');
const select = document.querySelector('#max');

let p1Score = 0;
let p2Score = 0;
let gametype = parseInt(select.value);

select.addEventListener('change', function() {
    console.log("CHANGED!!")
    gametype = parseInt(select.value);
    console.log(`value of gametype:${gametype}`)
});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    score.textContent = `${p1Score} to ${p2Score}`;
}

p1.addEventListener('click', function() {
    console.log(`value of gametype:${gametype}`)
    if (p1Score < gametype && p2Score < gametype) {
        p1Score++;
        score.innerText = `${p1Score} to ${p2Score}`;
        if (p1Score === gametype) {
            setTimeout(() => alert("Player 1 won!!!!!!"), 0);
            setTimeout(() =>resetGame(), 0);
        }
    }
});

p2.addEventListener('click', function() {
    console.log(`value of gametype:${gametype}`)
    if (p1Score < gametype && p2Score < gametype) {
        p2Score++;
        score.textContent = `${p1Score} to ${p2Score}`;
        if (p2Score === gametype) {
            setTimeout(() => alert("Player 2 won!!!!!!"), 0);
            setTimeout(() =>resetGame(), 0);
        }
    }
});

reset.addEventListener('click', function() {
    resetGame();
});