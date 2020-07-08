type Start = number[];
type Grid = any[][];
type Piece = any[][];

export const includePiece = (grid: Grid, piece: Piece, start: Start) => {
    let gridCpy = [...grid];

    piece.forEach((value, index) => {
        const x = value[1] + start[1];
        const y = value[0] + start[0];

        gridCpy[y][x] = 'i';
    });

    return gridCpy;
};

export const moveDown = (currentPosition: any[][]) => {

};
