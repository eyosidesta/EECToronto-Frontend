import React, { Fragment } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import WelcomePage from '../../components/WelcomePage';
import EnglishServiceHeader from '../../components/EnglishServiceComponent/EnglishServiceHeader';
import EnglishServicePhoto from '../../components/EnglishServiceComponent/EnglishServicePhoto';
import EnglishServiceMore from '../../components/EnglishServiceComponent/EnglishServiceMore';
import EnglishServicePagePhoto from '../../components/EnglishServiceComponent/EnglishServicePagePhoto';
import EnglishServiceMnistry from '../../components/EnglishServiceComponent/EnglishServiceMinistry';

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