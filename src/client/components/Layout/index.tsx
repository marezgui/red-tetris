import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '24px'
    }
  }));

type LayoutProps = {
    children?: any
}

const Layout: FunctionComponent<LayoutProps>= (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <>
            <NavBar />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Layout;
