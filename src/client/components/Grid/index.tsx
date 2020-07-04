import React, { useState } from 'react';
import Square from '../Square';
import { makeStyles } from '@material-ui/core/styles';

const ROWS = 20;
const COLS = 10;

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundImage: 'linear-gradient(63deg, #55acb2, #68c4b6)', 
        padding: '4px',
        borderRadius: '12px',
        width: 'fit-content',
        margin: 'auto'
    }
}));

const Grid = () => {
    const [gridArray, setGridArray] = useState(new Array(ROWS).fill(null).map(item =>(new Array(COLS).fill(null))));
    const classes = useStyles();

    console.log(gridArray);

    return (
        <div
            className={classes.grid}
        >
            {gridArray.map((value, i) => {
                return (
                    <div key={i} style={{ display: 'flex' }}>
                        {gridArray[i].map((value, j) => {
                            return <Square key={`${i}${j}`} />
                        })}
                    </div>
                );
                
            })}
        </div>
    );
}

export default Grid;
