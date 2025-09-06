import React from 'react';
import './style.css';
import Slider from 'react-slick';
import image1 from "../../../images/church_images/geec_church_6.jpg";
import image2 from "../../../images/church_images/geec_church_7.jpg";
import image3 from "../../../images/church_images/geec_church_8.jpg";
import image4 from "../../../images/church_images/geec_church_2.jpg";
import image5 from "../../../images/church_images/geec_church_3.jpg";

const ChildrenDepartment = () => {
    const images = [image1, image2, image3, image4, image5];

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

    return (
        <div className="children-department-content-wrapper">
            <section className="children-deparment-slide" style={{ overflow: "visible", position: "relative" }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index}>
                            <div
                                className="children-department-slide"
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: `400px`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <div className="children-department-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sem nec congue mattis, sapien
                    odio sodales justo, in fermentum nulla nunc in ligula. Integer et massa vitae nunc eleifend lacinia.
                    Curabitur non sem vitae elit rutrum malesuada non nec velit. Aliquam erat volutpat. Fusce et
                    scelerisque ex. Sed volutpat magna eget sagittis congue. Integer rhoncus facilisis purus, sit amet
                    gravida risus. Curabitur sed justo dignissim, vestibulum erat sed, convallis augue. Sed feugiat ex
                    eget ante tristique suscipit. Proin ac tristique justo. Suspendisse ullamcorper luctus ante a
                    rhoncus. Aliquam erat volutpat. Fusce scelerisque viverra massa, in luctus sapien porttitor sed.
                    Pellentesque ut elit eget risus lacinia hendrerit. Aliquam non sem malesuada, dignissim nulla ac,
                    ultrices libero. Mauris feugiat blandit erat a aliquam. Vestibulum ac velit in nunc fermentum
                    rhoncus. Integer sagittis sem vitae tincidunt faucibus. Suspendisse at pretium libero. Quisque
                    feugiat ligula nec risus porttitor, id porta mauris pulvinar. Donec sed risus vel nibh feugiat
                    euismod. Aenean eget nulla erat. Vestibulum posuere ligula in diam blandit, ac euismod nisl
                    hendrerit. Duis porta congue purus, in lacinia erat. Sed feugiat, metus id maximus imperdiet, velit
                    risus vulputate augue, sit amet eleifend sapien nisi vel erat. Donec nec bibendum lorem. Duis
                    blandit laoreet sem nec sagittis. Cras malesuada dolor sed nisi faucibus, a eleifend eros
                    sollicitudin. Vestibulum id odio metus. Fusce efficitur quam id libero pharetra, sed porttitor lorem
                    cursus. Phasellus suscipit tortor nisi, a semper velit fermentum in. Etiam feugiat vulputate
                    malesuada. Sed tempor lacus sed quam bibendum, at lobortis velit rutrum. Aliquam luctus justo vitae
                    dui lacinia, ac condimentum orci pulvinar. Duis sodales sed purus id cursus. Suspendisse tristique
                    ex et congue feugiat. Aenean sed mauris et erat bibendum convallis. Fusce tristique feugiat
                    facilisis. Vivamus feugiat in sapien in varius. Phasellus in sem vitae sem posuere aliquam. Etiam
                    efficitur tellus sed vehicula porttitor. Etiam condimentum diam eget turpis mattis, at finibus
                    felis vestibulum. Curabitur in nunc vehicula, fermentum metus vitae, vulputate leo. Proin hendrerit
                    velit a sagittis convallis. In imperdiet sit amet mi ut mattis. Pellentesque imperdiet rhoncus
                    turpis, sit amet ultrices nunc. In id sapien sed sem pulvinar facilisis.
                </p>
            </div>
            <h1>Want to join children Team? Fill out the form</h1>

            <form className="children-department-custom-form">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" placeholder="first and last name" />

                <label htmlFor="phone">Phone*</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" />

                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="Your email" />

                <label htmlFor="comment">Comment <span className="children-option-label">(optional)</span></label>
                <textarea id="comment" name="comment" rows="5" placeholder="Your comment here..." />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default ChildrenDepartment;
