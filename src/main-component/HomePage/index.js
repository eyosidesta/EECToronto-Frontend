import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero2 from '../../components/hero2'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import EventSection from '../../components/event'
import CtaSection from '../../components/cta'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero2/>
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            <CounterSection/>
            <TeamSection/>
            <WorldSection/>
            <EventSection/>
            <CtaSection/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;