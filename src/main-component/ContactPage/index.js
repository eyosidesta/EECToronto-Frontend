import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import imageUrl from '../../images/event/church_event_3.jpg';


const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} imageUrl={imageUrl}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

