import React, { Fragment } from 'react';

// Components
import Navbar from './Navbar';
import Aside from './Aside';
import Footer from './Footer';

export default function Dashboard({ children }) {
    return(
        <Fragment>
            <Navbar />
            <Aside />
                {children}
            <Footer /> 
        </Fragment>
    )
}