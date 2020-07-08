import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    value?: any
}

const useStyles = makeStyles(() => ({
    square: (props: Props) => ({
        backgroundColor: props.value ? 'black' : '#92ccc5', 
        width: '30px', 
        height: '30px',
        borderRadius: '4px',
        margin: '1px',
    })
}));

const Square = (props: Props) => {
    const classes = useStyles(props);

    return (
        <div
            className={classes.square}
        />
    )
};

export default Square;