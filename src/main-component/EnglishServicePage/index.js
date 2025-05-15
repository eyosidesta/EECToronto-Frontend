import React, { Fragment } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import WelcomePage from '../../components/WelcomePage';
import EnglishServiceHeader from '../../components/EnglishServiceHeader';
import EnglishServicePhoto from '../../components/EnglishServicePhoto';
import EnglishServiceMnistry from '../../components/EnglishServiceMinistry';
import EnglishServiceMore from '../../components/EnglishServiceMore';
import EnglishServicePagePhoto from '../../components/EnglishServicePagePhoto';

const EnglishServicePage = () => {
    return (
        <Fragment>
            <Header />
            <WelcomePage />
            <EnglishServiceHeader />
            <EnglishServiceMore />
            <EnglishServicePagePhoto />
            <EnglishServiceMnistry />
            <EnglishServicePhoto />
            <Footer />
            <ScrollBar />
        </Fragment>
    )
}

export default EnglishServicePage;