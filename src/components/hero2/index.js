// import React from 'react'
// import { Link } from 'react-router-dom'
// import VideoModal from '../ModalVideo'

// const Hero2 = (props) => {

//     return (
//         <section className="hero hero-style-1">
//             <div className="hero-slider">
//                 <div className="slide">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col col-lg-6 slide-caption">
//                                 <div className="slide-title">
//                                     <h2>Jesus is Lord <span>come to Him</span></h2>
//                                 </div>
//                                 <div className="slide-subtitle">
//                                     <p>Grace Ethiopian Evanagelical Church, Vancouver, BC, Canada</p>
//                                     <p>Sunday, 10 AM - 1 PM, 2201 8th Ave, New Westminster, BC</p>
//                                 </div>
//                                 <div className="btns">
//                                     <Link to="/donate" className="theme-btn">Donate Now</Link>
//                                     <ul>
//                                         <li className="video-holder">
//                                             <VideoModal />
//                                         </li>
//                                         <li className="video-text">
//                                             Watch Our Video
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="right-vec">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero2;


// import React from 'react';
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// import VideoModal from '../ModalVideo';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "../../images/church_images/geec_church_6.jpg";
// import image2 from "../../images/church_images/geec_church_7.jpg";
// import image3 from "../../images/church_images/geec_church_8.jpg";

// const Hero2 = () => {
//   const images = [image1, image2, image3];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     fade: true,
//     arrows: true,
//     pauseOnHover: false,
//   };

//   return (
//     <section className="hero hero-style-1" style={{ overflow: "hidden", position: "relative" }}>
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <div key={index}>
//             <div
//               className="slide"
//               style={{
//                 backgroundImage: `url(${img})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 position: 'relative', 
//               }}
//             >
//               {/* White and green background layers */}
//               <div className="hero-background">
//                 <div className="white-bg"></div>
//                 <div className="green-bg"></div>
//               </div>

//               <div className="container">
//                 <div className="row">
//                   <div className="col col-lg-6 slide-caption">
//                     <div className="slide-title">
//                       <h2>Jesus is Lord <span>come to Him</span></h2>
//                     </div>
//                     <div className="slide-subtitle">
//                       <p>Grace Ethiopian Evangelical Church, Vancouver, BC, Canada</p>
//                       <p>Sunday, 10 AM - 1 PM, 2201 8th Ave, New Westminster, BC</p>
//                     </div>
//                     <div className="btns">
//                       <Link to="/donate" className="theme-btn">Donate Now</Link>
//                       <ul>
//                         <li className="video-holder">
//                           <VideoModal />
//                         </li>
//                         <li className="video-text">Watch Our Video</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Hero2;


import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/church_images/geec_church_6.jpg";
import image2 from "../../images/church_images/geec_church_7.jpg";
import image3 from "../../images/church_images/geec_church_8.jpg";
import image4 from "../../images/church_images/geec_church_2.jpg";
import image5 from "../../images/church_images/geec_church_3.jpg";

const Hero2 = () => {
  const images = [image1, image2, image3, image4, image5];
  const videoRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
  };

  const openVideo = () => {
    if (videoRef.current) {
      videoRef.current.openModal();
    }
  };
  const handleSermon = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="hero hero-style-1" style={{ overflow: "visible", position: "relative" }}>
      {/* Render the modal once at the root */}
      {/* <VideoModal ref={videoRef} /> */}

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div className="hero-background">
                <div className="white-bg"></div>
                <div className="green-bg"></div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col col-lg-6 slide-caption">
                    <div className="slide-title">
                      <h2>Jesus is Lord <span>come to Him</span></h2>
                    </div>
                    <div className="slide-subtitle">
                      <p>Grace Ethiopian Evangelical Church, Vancouver, BC, Canada</p>
                      <p>Sunday, 10 AM - 1 PM, 2201 8th Ave, New Westminster, BC</p>
                    </div>
                    <div className="btns">
                      <Link to="/donate" className="theme-btn">Donate Now</Link>
                      <ul>
                        <li className="video-holder">
                            <Link to="/all-sermon-series" className="wrap" onClick={handleSermon}>
                            <i className="fi flaticon-play-button-2" aria-hidden="true"></i>
                            </Link>
                          {/* <button className="wrap" onClick={openVideo}>
                            <i className="fi flaticon-play-button-2" aria-hidden="true"></i>
                          </button> */}
                        </li>
                        <li className="video-text" onClick={openVideo}>Watch Our Sermons</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero2;
