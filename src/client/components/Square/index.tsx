import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    square: {
        backgroundColor: '#92ccc5', 
        width: '30px', 
        height: '30px',
        borderRadius: '4px',
        margin: '1px'
    }
}));

const Square = () => {
    const classes = useStyles();

    return (
        <div
            className={classes.square}
        />
    )
};

export default Square;