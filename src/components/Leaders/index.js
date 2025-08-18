import React from 'react';
import "./style.css";
import LeaderCard from '../SharedComponents/LeaderCard';
import image from '../../images/leadership/Pastor_GEEC.jpg';
import leader2 from '../../images/leadership/geec_leader_2.jpg'
import leader3 from '../../images/leadership/geec_leader_4.jpg'
import leader4 from '../../images/leadership/geec_leader_5.jpg'
import { Link } from 'react-router-dom';

const LeadersSection = () => {
    return (
        
      <div className="team-container">


    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={leader2} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={leader3} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={leader4} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='team-leader'>
    <LeaderCard image={image} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
  </div>
      
    );
  };

export default LeadersSection;
