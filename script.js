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
const allCells = document.querySelectorAll('cell');
const board = [allCells];
const xClass = 'X';
const oClass = 'O';

let turn;

const startGame =() => {
    allCells.innerText = null;
    let turn = xClass;
    


}