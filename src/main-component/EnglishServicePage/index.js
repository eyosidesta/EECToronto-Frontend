import React, { Fragment } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import WelcomePage from '../../components/WelcomePage';
import EnglishServiceHeader from '../../components/EnglishServiceHeader';
import EnglishServicePhoto from '../../components/EnglishServicePhoto';
import EnglishServiceMnistry from '../../components/EnglishServiceMinistry';

const EnglishServicePage = () => {
    return (
        <Fragment>
            <Header />
            <WelcomePage />
            <EnglishServiceHeader />
            <EnglishServiceMnistry />
            <EnglishServicePhoto />
            <Footer />
            <ScrollBar />
        </Fragment>
    )
}

export default EnglishServicePage;