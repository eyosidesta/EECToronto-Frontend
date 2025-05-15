import React from 'react';
import backgroundPhoto from '../../images/English_Service/page_photo.png';
import './style.css';

const EnglishServicePagePhoto = () => {
    return (
        <div className='page-photo-container'>
            <div className='page-photo-image'>
                <img src={backgroundPhoto} alt='English Service' />
                <div className='text-page-container'>
                    <div class="page-photo-title">Get Envolved</div>
                    <div class="description_1">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </div>
                    <div className='description_2'>
                        standard dummy text ever since the 1500s, when an unknown 1500s, when an unknown 
                    </div>
                    <div><button>Learn More</button></div>
                </div>
            </div>
        </div>
    )
}

export default EnglishServicePagePhoto;
