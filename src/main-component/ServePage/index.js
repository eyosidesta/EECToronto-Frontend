import React, { Fragment } from 'react';
import ServeList from '../../components/ServeComponent/ServeList';
import Header from '../../components/header';

const ServePage = () => {
    return (
        <Fragment>
            <Header />
            <ServeList />
        </Fragment>
    )
}
export default ServePage;