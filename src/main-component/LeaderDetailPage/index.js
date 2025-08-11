import React, {Fragment} from 'react';
import LeaderDetail from '../../components/LeaderDetail';
import Footer from '../../components/footer';
import ScrollBar from 'react-perfect-scrollbar';
import PageHeader from '../../components/PageHeader';

const LeaderDetailPage = () => {
    return (
        <Fragment>
            <PageHeader title='Leader'/>
            <LeaderDetail />
            <Footer />
            <ScrollBar />
        </Fragment>
    )
}

export default LeaderDetailPage;