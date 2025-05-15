import React, { Fragment } from 'react';
import Header from '../../components/header';
import PhotoTitleBtn from '../../components/SharedComponents/PhotoTitleBtn';
import YoungAdultsEvents from '../../components/YoungAdultsAmharic/YoungAdultsEvents';
import YoungAdultsTeam from '../../components/YoungAdultsAmharic/YoungAdultsTeam';
import YoungAdultsTextLeftImg from '../../components/YoungAdultsAmharic/YoungAdultsTextLeftImg';

const YoungAdultsPage = () => {
    return (
        <Fragment>
            <Header />
            <YoungAdultsTeam />
            <YoungAdultsEvents />
            
        </Fragment>
    );
}

export default YoungAdultsPage;