import React from 'react';
import "./style.css";
import LeaderCard from '../SharedComponents/LeaderCard';
import image from '../../images/leadership/church_worship_18.jpg';
import { Link } from 'react-router-dom';

const LeadersSection = () => {
    return (
        
      <div className="team-container">


    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Ephraim' detail='Markham Church Pastor / Pastor of Young Adults'/>
    </Link>
  </div>
      
    );
  };

export default LeadersSection;
