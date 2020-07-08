import React from 'react';
import Square from '../Square';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    gridArray?: any[][]
};

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundImage: 'linear-gradient(63deg, #55acb2, #68c4b6)', 
        padding: '4px',
        borderRadius: '12px',
        width: 'fit-content',
        margin: 'auto'
    }
}));

const Grid = (props: Props) => {
    const { gridArray } = props;
    const classes = useStyles();

    return (
        <div
            className={classes.grid}
        >
            {gridArray?.map((value, i) => {
                return (
                    <div key={i} style={{ display: 'flex' }}>
                        {gridArray[i].map((value, j) => {
                            return <Square key={`${i}${j}`} value={!!value}/>
                        })}
                    </div>
                );
                
            })}
        </div>
    );
}

export default Grid;
