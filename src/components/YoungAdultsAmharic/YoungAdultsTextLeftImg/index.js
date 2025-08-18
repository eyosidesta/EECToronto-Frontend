import React from 'react';
import TextLeftImg from '../../SharedComponents/TextLeftImg';
import image from '../../../images/leadership/Pastor_GEEC.jpg';
import './style.css';


const YoungAdultsTextLeftImg = () => {
    return (
        <div className='young-text-left-img-container'>
            <div className='young-text-left-img-content'>
            <TextLeftImg left_img={image} title="We're Glad You're Here." btn='Connect with us' btn_bg_color="black" btn_color="white"
                content="We are a diverse community of people who have heard Jesus’ voice, experienced the life-changing power of the Holy Spirit and know ourselves to be the loved children of God. Worship with us in person at one of our five Calgary locations, or find us online. " />
            </div>
            <div className='young-adult-welcome-text'>
                <div>Welcome</div>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            </div>
        </div>
    )
}

export default YoungAdultsTextLeftImg;