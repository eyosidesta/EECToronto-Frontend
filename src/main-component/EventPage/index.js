import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import EventSection2 from '../../components/event2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import imageUrl from '../../images/slider/church_photo.jpg';


const EventPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Our Event'} pagesub={'Event'} imageUrl={imageUrl}/> 
            <EventSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
