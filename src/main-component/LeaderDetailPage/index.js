import React, {Fragment} from 'react';
import Header from '../../components/header';
import LeaderDetail from '../../components/LeaderDetail';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import PageHeader from '../../components/PageHeader';

const LeaderDetailPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title='Staff'/>
            <LeaderDetail />
            <Footer />
            <ScrollBar />
        </Fragment>
    )
}

export default LeaderDetailPage;