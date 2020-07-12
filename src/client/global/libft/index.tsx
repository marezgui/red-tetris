import { START } from '../constant';
import { tetriminosList } from '../constant/index';

type Grid = any[][];
type Position = any[][];

export const getRandomTetrimino = () => { // Mock back-end function
    return tetriminosList[0];
};

export const getStartPosition = (piece: Position) => {
    let position: Position = [];

    piece.forEach((value, index) => {
        const x = value[0] + START[0];
        const y = value[1] + START[1];

        position[index] = [x, y];
    });

    return position;
}

export const includePiece = (grid: Grid, coordinates: Position) => {
    let gridCpy = [...grid];
    let position: Position = getStartPosition(coordinates);

    position.forEach((value, index) => {
        const x = value[0];
        const y = value[1];

        gridCpy[y][x] = 'i';
    });

    return gridCpy;
};

export const moveDown = (position: any[][]) => {
    let newPos = [...position];

    position.forEach((value, index) => {
        const x = value[0];
        const y = value[1] + 1;

        newPos[index] = [x, y];
    });

    return newPos;
};
