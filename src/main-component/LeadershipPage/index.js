import React, { Fragment } from 'react';
import Header from '../../components/header';
import LeadersSection from '../../components/Leaders';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import PageHeader from '../../components/PageHeader';

const LeadershipPage = () => {
    return (
        <Fragment>
        <Header />
        <PageHeader title='Leadership'/>
        <LeadersSection />
        <Footer />
        <ScrollBar/>
        </Fragment>
        
    )
}

export default LeadershipPage;