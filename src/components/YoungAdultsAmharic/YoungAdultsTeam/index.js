import React from 'react';
import LeaderCard from '../../SharedComponents/LeaderCard';
import image from '../../../images/leadership/church_worship_18.jpg';
import square_img from '../../../images/English_Service/joy.jpg';
import StoryCard from '../../SharedComponents/StoryCard';
import LeftCircleImg from '../../SharedComponents/LeftCircleImg';
import yng_adults_2 from '../../../images/Young_Adults/young_adults_2.jpg';
import CuteSquare from '../../SharedComponents/CuteSquare';
import BigSquareImg from '../../SharedComponents/BigSquareImg';
import SquareDots from '../../SharedComponents/SquareDots';
import young_adults_1 from '../../../images/Young_Adults/young_adults_1.jpg'

import PhotoTitle from '../../SharedComponents/PhotoTitle';
import bckgrnd_pht from '../../../images/event/events_5.png';
import YoungAdultsTextLeftImg from '../YoungAdultsTextLeftImg';
import './style.css';
import YoungAdultsEvents from '../YoungAdultsEvents';
import PhotoTitleBtn from '../../SharedComponents/PhotoTitleBtn';



const YoungAdultsTeam = () => {
    const listItems = [
        {
            title: 'Service Times',
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Church Program Times',
            content: "second title"        
        },
        {
            title: 'English Service',
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: 'Sunday Morning',
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]
    return (
        <div>
            
            <PhotoTitle photo={bckgrnd_pht} title='Young Adults' />
            <YoungAdultsTextLeftImg />
            <div className='young-adult-left-circle'>
            <LeftCircleImg left_img={young_adults_1} title='Find Your Community' listItems={listItems} />
            </div>
            <YoungAdultsEvents />
            <PhotoTitleBtn photo={yng_adults_2} title='Young Adults'/>
            {/* <RightCircleImg right_img={image} title='Find Your Community' listItems={listItems} /> */}
            
            <CuteSquare square_img={square_img} title="Foundational Truths of Christianity" person='Pastor Ephraim'/>
            <BigSquareImg image={square_img} text="Bible Study" btn="Learn More"/>
            <SquareDots />
            <StoryCard story_img={image} title='PERSONAL STORIES' caption='Share your build story ' date='Apr 17, 2025' read_more='READ MORE' />
            
        </div>
    )
}
export default YoungAdultsTeam;