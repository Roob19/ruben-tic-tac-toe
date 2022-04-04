const sq0 = document.getElementById('sq0');
const sq1 = document.getElementById('sq1');
const sq2 = document.getElementById('sq2');
const sq3 = document.getElementById('sq3');
const sq4 = document.getElementById('sq4');
const sq5 = document.getElementById('sq5');
const sq6 = document.getElementById('sq6');
const sq7 = document.getElementById('sq7');
const sq8 = document.getElementById('sq8');
const topRow = [sq0, sq1, sq2];
const midRow = [sq3, sq4, sq5];
const lowRow = [sq6, sq7, sq8];
const lCol = [sq0, sq3, sq6];
const mCol = [sq1, sq4, sq7];
const rCol = [sq2, sq5, sq8];
const lDiag = [sq0, sq4, sq8];
const rDiag = [sq2, sq4, sq6];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const allCells = document.querySelectorAll('cell');
// const board = [allCells];
const xClass = 'X';
const oClass = 'O';
const winMsg = document.querySelector('h1');
const reset = document.getElementById('reset');

const lookUp = {
    '1' : 'X', 
    '-1' : 'O', 
    'null' : 'draw'
}
const squares = document.querySelectorAll('td div');
const message = document.querySelector('h1');

let board; 
let turn;
let winner;
let draw;

const render = () => {
    board.forEach(function(sq, idx) {
        squares[idx].style.background = lookUp[sq];
    });
    if (winner === 'draw') {
        winMsg.innerText = 'DRAW!'
    } else if (winner){
        winMsg.innerText = `${lookUp[winner].toUpperCase()} WINS!!!`;
    } else {
        winMsg.innerText = `${lookUp[turn].toUpperCase()}'s turn: `;
    }
}

const startGame =() => {
    // allCells.innerText = ' ';
    // board = new Array(9).fill(null);
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1;
    winner = null;
    render();
}

startGame();

const handleMove = (e) => {
    const idx = parseInt(e.target.id.replace('sq', ''));
    if (board[idx] || winner) {
        return;
    }
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

document.querySelector('table').addEventListener('click', handleMove);
reset.addEventListener('click', startGame);

const getWinner = () => {
    for (let i=0; i<winningCombos.length; i++) {
        if (Math.abs(winningCombos[i][0] + winningCombos[i][1] + winningCombos[i][2]) === 3) {
            return board[winningCombos[i][0]];
        }
    }
    if (board.includes(null)) {
        return null;
    }
    return 'draw';
}