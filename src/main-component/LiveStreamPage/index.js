import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LiveStream from '../../components/LiveStream';

const LiveStreamPage = () => {
    return (
        <frameElement>
            <Header />
            <LiveStream />
            <Footer />
        </frameElement>
    )
}

export default LiveStreamPage;