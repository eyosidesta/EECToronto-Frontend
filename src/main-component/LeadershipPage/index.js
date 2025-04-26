import React, { Fragment } from 'react';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import LeadersSection from '../../components/Leaders';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import imageUrl from '../../images/leadership/leadership_photo_1.png';

const LeadershipPage = () => {
    return (
        <Fragment>
        <Header />
        <PageTitle imageUrl={imageUrl} />
        <LeadersSection />
        <Footer />
        <ScrollBar/>
        </Fragment>
        
    )
}

export default LeadershipPage;