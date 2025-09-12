import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import AboutPage from '../AboutPage'
import CasePage from '../CasePage'
import CaseSinglePage from '../CaseSinglePage'
import EventPage from '../EventPage'
import EventPageSingle from '../EventPageSingle'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import LeadershipPage from '../LeadershipPage';
import LeaderDetailPage from '../LeaderDetailPage';
import EnglishServicePage from '../EnglishServicePage';
import YoungAdultsPage from '../YoungAdultsPage';
import YoungAdultsPageOld from '../YoungAdultsPageOld';
import EnglishSermonSeries from '../../components/EnglishServiceComponent/EnglishSermonSeries';
import AllEnglishSermons from '../AllEnglishSermons';
import SingleSermon from '../SingleSermon';
import AllEventsPage from '../AllEventsPage';
import EventDetailPage from '../EventDetailPage';
import AcceptChristPage from '../AcceptChristPage';
import PrayerPage from '../PrayerPage';
import StatementOfFaithPage from '../StatementOfFaithPage';
import BibleStudyPage from '../BibleStudyPage';
import NewHerePage from '../NewHerePage';
import BoardOfMembersPage from '../BoardOfMembersPage';
import AllSermons from '../AllSermons';
import AllSermonSeries from '../AllSermonSeries';
import EnglishEventDetailPage from '../EnglishEventDetailPage';
import PrayerDepartmentPage from '../PrayerDepartmentPage';
import WorshipDepartmentPage from '../WorshipDepartmentPage';
import FamilyDepartmentPage from '../FamilyDepartmentPage';
import ChildrenDepartmentPage from '../ChildrenDepartmentPage';
import MediaDepartmentPage from '../MediaDepartmentPage';
import ServePage from '../ServePage';
import Dashboard from '../../components/admin/Dashboard';
import AdminHome from '../../components/admin/AdminHome';
import AdminEventPage from '../Admin/AdminEventPage';
import AdminEnglishEventPage from '../Admin/AdminEnglishEventPage';
import AdminEnglishEventDetailPage from '../Admin/AdminEnglishEventDetailPage';
import AdminYoungAdultsEventsPage from '../Admin/AdminYoungAdultsEventsPage';
import AdminYoungAdultsEventDetailPage from '../Admin/AdminYoungAdultsEventDetailPage';
import AdminAllEventPage from '../Admin/AdminAllEventPage';
import AdminSermonHomePage from '../Admin/AdminSermonHomePage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home3' element={<Homepage3 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="all-sermons" element={<AllSermons />} />
          <Route path="all-sermon-series" element={<AllSermonSeries />} />
          <Route path="english-service" element={<EnglishServicePage />} />
          <Route path="english-sermon-series" element={<EnglishSermonSeries />} />
          <Route path="all-english-sermons" element={<AllEnglishSermons />} />
          <Route path="sermon/:sermonId" element={<SingleSermon />} />
          <Route path="young-adults-amharic" element={<YoungAdultsPage />} />
          <Route path="young-adults-amharic-old" element={<YoungAdultsPageOld />} />
          <Route path="leadership/:leaderId" element={<LeaderDetailPage />} />
          <Route path="all-events" element={<AllEventsPage />} />
          <Route path="all-events/:eventId" element={<EventDetailPage />} />
          <Route path="english-events/:eventId" element={<EnglishEventDetailPage />} />
          <Route path="accept-christ" element={<AcceptChristPage />} />
          <Route path="new-here" element={< NewHerePage/>} />
          <Route path="board-of-members" element={<BoardOfMembersPage />} />
          <Route path="prayer-request" element={<PrayerPage />} />
          <Route path="serve" element={<ServePage />} />
          <Route path="statement-of-faith" element={<StatementOfFaithPage />} />
          <Route path="bible-study" element={<BibleStudyPage />} />
          <Route path="prayer-department" element={<PrayerDepartmentPage />} />
          <Route path="worship-department" element={<WorshipDepartmentPage />} />
          <Route path="family-department" element={<FamilyDepartmentPage />} />
          <Route path="children-department" element={<ChildrenDepartmentPage />} />
          <Route path="media-department" element={<MediaDepartmentPage />} />

          <Route path="admin/events" element={<AdminEventPage />} />
          <Route path="admin/english-events" element={<AdminEnglishEventPage />} />
          <Route path="admin/english-events/:eventId" element={<AdminEnglishEventDetailPage />} />
          <Route path="admin/young-adults-events" element={<AdminYoungAdultsEventsPage />} />
          <Route path="admin/young-adults-events/:eventId" element={<AdminYoungAdultsEventDetailPage />} />
          <Route path="admin/all-events" element={<AdminAllEventPage />} />
          <Route path="admin/sermons" element={<AdminSermonHomePage />}/>


          <Route path='case' element={<CasePage />} />
          <Route path='case-single' element={<CaseSinglePage />} />
          <Route path='event' element={<EventPage />} />
          <Route path='event-details' element={<EventPageSingle />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path='volunteer' element={<VolunteerPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-details' element={<BlogDetails />} />
          <Route path='blog-details-left' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-details-fullwidth' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default AllRoute;
