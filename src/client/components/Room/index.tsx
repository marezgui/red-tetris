import React, { useState, useEffect } from 'react';
import Grid from '../Grid';
import { includePiece, getStartPosition, moveDown, getRandomTetrimino } from '../../global/libft';
import { ROWS, COLS } from '../../global/constant';

const Room = () => {
    const [gridArray, setGridArray] = useState(
        new Array(ROWS).fill(null).map(item =>(new Array(COLS).fill(null)))
        );
    const [currentPos, setCurrentPos] = useState<number[][]>([]);

    const updateGridArray = (coordinates: any) => {
        let updatedGrid = includePiece(gridArray, coordinates);

        setGridArray(updatedGrid);
        setCurrentPos(coordinates);
    };

    useEffect(() => {
        let coordinates = getRandomTetrimino();

        updateGridArray(coordinates);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            let newPos = moveDown(currentPos);

            setCurrentPos(newPos);
            // updateGridArray(newPos);
        }, 1000);
        
        return function cleanUp() { 
            clearInterval(timer) 
        };
    }, [currentPos]);

    return (
        <div>
            <Grid gridArray={gridArray} />
            <div> Next preview:  </div>
        </div>
    )
};

export default Room;
