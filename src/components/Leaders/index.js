import React from 'react';
import "./style.css";
import LeaderCard from '../SharedComponents/LeaderCard';
import image from '../../images/leadership/church_worship_18.jpg';

const LeadersSection = () => {
    return (
        
      <div className="team-container">


    <div className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </div>
    <div className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </div>
    <div className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </div>
    <div className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </div>
    <div className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </div>
    <div className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </div>
  </div>
      
    );
  };

export default LeadersSection;
