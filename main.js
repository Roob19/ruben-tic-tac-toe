const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const restartB = document.getElementById('restartButton');
const xClass = 'x';
const oClass = 'o';
const cellEle = document.querySelector([data-cell]);

let currentClass;

const winCheck = () => {
    return winArr.some(combo => {
        return combo.every(i => {
            return cellEle[i].classList.contains(currentClass);
        });
    });
}