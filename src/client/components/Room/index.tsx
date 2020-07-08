import React, { useState, useEffect } from 'react';
import Grid from '../Grid';
import { includePiece, moveDown } from '../../libft';

const START = [0, 3];
const ROWS = 20; // X
const COLS = 10; // Y
const I = [[1, 0], [1, 1], [1, 2], [1, 3]]; // [Y][X]

const Room = () => {
    const [gridArray, setGridArray] = useState(new Array(ROWS).fill(null).map(item =>(new Array(COLS).fill(null))));

    useEffect(() => {
        let piece = I;
        let updatedGrid = includePiece(gridArray, piece, START);

        setGridArray(updatedGrid)
    }, []);

    setInterval(() => {
    }, 1000);

    return (
        <div>
            <Grid gridArray={gridArray} />
            <div> Next preview:  </div>
        </div>
    )
};

export default Room;
