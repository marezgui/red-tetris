import React, { FunctionComponent } from 'react';
import NavBar from '../NavBar/NavBar';
import { Container } from '@material-ui/core';

type LayoutProps = {
    children?: any
}

const Layout: FunctionComponent<LayoutProps>= (props) => {
    const { children } = props;

    return (
        <>
            <NavBar />
            <Container >
                {children}
            </Container>
        </>
    )
}

export default Layout;
