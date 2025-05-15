import React from 'react';
import './style.css'
import BigSquareImg from '../BigSquareImg';
import square_img from '../../../images/English_Service/joy.jpg';

const SquareDots = () => {
    return (
<div className="layered-dot-background">
    <div className='big_square'>
<BigSquareImg image={square_img} text="Bible Study" btn="Learn More"/>
<BigSquareImg image={square_img} text="Bible Study" btn="Learn More"/>
</div>
</div>
    );
}
export default SquareDots;