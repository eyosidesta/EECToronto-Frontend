import React, { Fragment } from 'react';
import Header from '../../components/header';
import bckgrnd_pht from '../../images/event/events_5.png';
import PhotoTitleBtn from '../../components/SharedComponents/PhotoTitleBtn';
import YoungAdultsEvents from '../../components/YoungAdultsAmharic/YoungAdultsEvents';
import YoungAdultsTeam from '../../components/YoungAdultsAmharic/YoungAdultsTeam';

const YoungAdultsPage = () => {
    return (
        <Fragment>
            <Header />
            <PhotoTitleBtn photo={bckgrnd_pht} title='Young Adults' />
            <YoungAdultsEvents />
            <YoungAdultsTeam />
        </Fragment>
    );
}

export default YoungAdultsPage;