// Grid
export const ROWS = 20;
export const COLS = 10;

// Start Position (x, y)
export const START = [3, 0];

// TETRIMINOS (x, y)
const I = [[0, 1], [1, 1], [2, 1], [3, 1]];
const L = [[0, 0], [0, 1], [1, 1], [2, 1]];
// const J = [[0, 0], [0, 0], [0, 0], [0, 0]];
// const O = [[0, 0], [0, 0], [0, 0], [0, 0]];
// const S = [[0, 0], [0, 0], [0, 0], [0, 0]];
// const T = [[0, 0], [0, 0], [0, 0], [0, 0]];
export const Z = [[0, 0], [1, 0], [1, 1], [2, 1]];

export const tetriminosList = [
    I,
    L,
    Z
];