import React from 'react';
import serve_img from '../../../images/departments/Jesus_hands.jpg';
import prayer_img from '../../../images/departments/Serving_Jesus.jpg';
import worship_img from '../../../images/English_Service/back_photo.png';
import family_image from '../../../images/English_Service/back_photo.png';
import children_img from '../../../images/English_Service/back_photo.png';
import media from '../../../images/English_Service/back_photo.png';

import './style.css';
import PhotoTitle from '../../SharedComponents/PhotoTitle';
import ServeCard from '../ServeCard';

const ServeList = () => {
    const serviceLists = [
        {
            title: "Prayer Ministry",
            mini_detail: "If we pray God works, if we don't we work",
            service_link: "/prayer-department",
            service_img: prayer_img,
        },
        {
            title: "Worship Ministry",
            mini_detail: "If we pray God works, if we don't we work",
            service_link: "/worship-department",
            service_img: prayer_img,

        },
        {
            title: "Family Ministry",
            mini_detail: "If we pray God works, if we don't we work",
            service_link: "/family-department",
            service_img: prayer_img,

        },
        {
            title: "Media Ministry",
            mini_detail: "If we pray God works, if we don't we work",
            service_link: "/media-department",
            service_img: prayer_img,

        },
        {
            title: "Children Ministry",
            mini_detail: "If we pray God works, if we don't we work",
            service_link: "/children-department",
            service_img: prayer_img,

        },
        {
            title: "Evangelizm Ministry",
            mini_detail: "If we pray God works, if we don't we work",
            service_link: "prayer-department",
            service_img: prayer_img,

        },
    ]
    return (
        <div className="serve-content-wrapper">
            <PhotoTitle photo={serve_img} title='Serve The Lord with Us' />
            <div className='serve-title'>Get Involved to Serve Jesus</div>
            <div className="serve-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis sem at tristique tempor. Morbi porttitor, enim in fermentum porttitor, ante elit efficitur arcu, nec porta risus sapien in nulla. Nullam placerat convallis sem. Suspendisse viverra tincidunt justo in facilisis. Proin malesuada nisi id diam posuere, in tincidunt ante eleifend. Aenean posuere risus nec enim pretium vulputate. Sed dignissim sagittis mauris, vitae ullamcorper mi ultricies id. Integer volutpat fringilla nulla, vel dapibus est placerat ut. Etiam pretium augue eget turpis imperdiet, nec mattis lectus vulputate. Nunc fringilla, nisl in tincidunt ullamcorper, sem risus tincidunt nunc, ut tincidunt erat diam id mi.
                </p>
            </div>
            <div className='service-cards-list'>
                {serviceLists.map((service, index) => {
                    return (
                        <div>
                             <ServeCard service_img={service.service_img} title={service.title} mini_detail={service.mini_detail} service_link={service.service_link} />
                        </div>
                    )
                })}
               
            </div>
            <div className='service-not-sure'>
                <div>If you are not sure in which team you want to serve, fill out the following form and we will help you to find one</div>
            </div>

            <form className="serve-custom-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="first and last name" />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" />

                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label htmlFor="comment">Comment</label>
                <textarea id="comment" name="comment" rows="5" placeholder="Your comment here..." />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ServeList;
